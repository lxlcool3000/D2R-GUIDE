// scripts/migrate-inline.js
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const files = [
  path.join(ROOT, 'index.html'),
  path.join(ROOT, 'js', 'main.js'),
];

function migrate(content) {
  // 1) navigate('xxx') -> data-action="navigate" data-arg="xxx"
  content = content.replace(/onclick="\s*navigate\(\s*'([^']+)'\s*\)\s*"/g,
                            'data-action="navigate" data-arg="$1"');
  content = content.replace(/onclick="\s*navigate\(\s*"([^"]+)"\s*\)\s*"/g,
                            'data-action="navigate" data-arg="$1"');

  // 2) 常见零参数函数 -> data-action="函数名"
  const fns = [
    'toggleRuneModal','toggleTipsModal','toggleGearModal','toggleBaseModal',
    'toggleMfBossModal','toggleBpModal','toggleMercModal','toggleCraftingModal',
    'toggleAIModal','getAIAdvice','renderRadarChart'
  ].join('|');
  const re0 = new RegExp(`onclick="\\s*(${fns})\\s*\\(\\s*\\)\\s*"`, 'g');
  content = content.replace(re0, 'data-action="$1"');

  // 3) 兜底：onclick="foo()" -> data-action="foo"（只改无参形式）
  content = content.replace(/onclick="\s*([A-Za-z_]\w*)\s*\(\s*\)\s*"/g,
                            'data-action="$1"');

  return content;
}

for (const fp of files) {
  if (!fs.existsSync(fp)) continue;
  const old = fs.readFileSync(fp, 'utf8');
  const next = migrate(old);
  if (next !== old) {
    fs.writeFileSync(fp, next, 'utf8');
    console.log('migrated:', path.relative(ROOT, fp));
  } else {
    console.log('no change:', path.relative(ROOT, fp));
  }
}

// 注入“事件委托核心”到 main.js 尾部，并移除早期的水合补丁（若有）
const mainPath = path.join(ROOT, 'js', 'main.js');
if (fs.existsSync(mainPath)) {
  let js = fs.readFileSync(mainPath, 'utf8');

  // 移除旧的水合/补丁块（若存在）
  js = js.replace(/\/\/ === .*Hydrate inline event handlers[\s\S]*?(?=\n\/\/ ===|$)/g, '');
  js = js.replace(/\/\/ === .*Production hardening[\s\S]*?(?=\n\/\/ ===|$)/g, '');
  js = js.replace(/\/\/ === .*CSP-safe inline handlers[\s\S]*?(?=\n\/\/ ===|$)/g, '');

  if (!js.includes('Delegation Core (no inline, CSP-safe)')) {
    js += `

// === Delegation Core (no inline, CSP-safe) ===
(function delegationCore(){
  const ACTION_ATTR = 'data-action';
  const ARG_ATTR = 'data-arg';

  function callAction(el, ev){
    const action = el.getAttribute(ACTION_ATTR);
    if (!action) return;
    const fn = window[action];
    if (typeof fn !== 'function') return;
    const arg = el.hasAttribute(ARG_ATTR) ? el.getAttribute(ARG_ATTR) : null;
    try { arg !== null ? fn(arg, ev) : fn(ev); } catch(e){ console.error(e); }
  }

  // 统一 click 委托
  document.addEventListener('click', (ev) => {
    const el = ev.target.closest && ev.target.closest('['+ACTION_ATTR+']');
    if (!el) return;
    callAction(el, ev);
  });

  // 键盘可达性（Enter/Space）
  document.addEventListener('keydown', (ev) => {
    if (ev.key !== 'Enter' && ev.key !== ' ') return;
    const el = ev.target.closest && ev.target.closest('['+ACTION_ATTR+']');
    if (!el) return;
    const isButtonLike = /^(BUTTON|A|INPUT)$/i.test(el.tagName) || el.getAttribute('role') === 'button';
    if (!isButtonLike) return;
    ev.preventDefault();
    callAction(el, ev);
  });

  // 导航容器兜底（可选）
  const nav = document.getElementById('class-nav');
  if (nav && !nav.__navBound) {
    nav.addEventListener('click', (e)=>{
      const btn = e.target.closest('.nav-item['+ACTION_ATTR+']');
      if (!btn) return;
      callAction(btn, e);
    });
    nav.__navBound = true;
  }
})();
`;
    fs.writeFileSync(mainPath, js, 'utf8');
    console.log('delegation core injected:', path.relative(ROOT, mainPath));
  } else {
    console.log('delegation core exists');
  }
}
