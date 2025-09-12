export const classData = {
            home: {
                title: '职业总览与对比',
                intro: '欢迎来到暗黑2重制版交互式职业攻略。这里汇总了七大职业的核心玩法与数据。首先，您可以通过下方的综合能力雷达图，对各个职业的“能力形状”有一个直观的了解。点击图例可以切换显示不同职业。选择您感兴趣的职业，深入探索其开荒路线、主流构筑和配装策略，祝您在庇护之地好运！',
                content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><div class="chart-container"><canvas id="classComparisonChart"></canvas></div><p class="text-center text-stone-400 text-sm mt-2">💡 点击下方的职业图例可以切换显示/隐藏对应的职业数据</p><div class="mt-4 p-4 bg-stone-950/50 rounded-lg border border-stone-700"><h4 class="text-amber-400 font-bold text-lg mb-2">💡 新手玩家推荐</h4><p class="text-stone-300">对于初次体验的玩家，我们强烈推荐 <strong class="text-amber-400">死灵法师(纯召唤)</strong> 或 <strong class="text-amber-400">巫师(冰火双修)</strong>。死灵法师依靠骷髅大军作战，自身非常安全，装备要求低；巫师拥有传送技能，跑图和刷装备效率极高，且冰火双修玩法能轻松应对游戏中的绝大多数情况。</p></div></div>`
            },
            necromancer: {
                title: '死灵法师 - 掌控生命与死亡',
                intro: '死灵法师是召唤大师与诅咒专家。他能组建亡者大军，也能用毒骨法术瓦解敌人。这个职业开荒极为安全，成型后是团队中不可或缺的顶级辅助和清场机器，对新手玩家非常友好。',
                sections: [
                     {
                        title: '🌱 Solo开荒路线',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600 text-stone-300 space-y-3"><p><strong>技能路线 (纯召唤):</strong></p><ul class="list-disc list-inside pl-4 space-y-1"><li><strong>1-12级:</strong> 优先点满 <span class="text-amber-400">骷髅复苏</span>。</li><li><strong>12-24级:</strong> 继续加满骷髅复苏，并开始投入 <span class="text-amber-400">支配骷髅</span>。学习1级 <span class="text-amber-400">黏土石魔</span>, <span class="text-amber-400">伤害加深</span>, 和 <span class="text-amber-400">尸体爆炸</span>。</li><li><strong>24级以后:</strong> 优先加满 <span class="text-amber-400">支配骷髅</span> 和 <span class="text-amber-400">尸体爆炸</span>。学习1级 <span class="text-amber-400">衰老</span> 对付Boss。</li></ul><p><strong>属性分配:</strong> 力量加到够穿装备(精神盾需156)，其余全体力。</p><p><strong>关键装备:</strong> "隐秘"甲(Lv 17), "知识"头(Lv 27), "精神"剑盾组合(Lv 25)。佣兵务必尽早装备"眼光"(Lv 27)。</p></div>`
                    },
                    { 
                        title: '💡 主流玩法构筑',
                        content: `<div class="space-y-4"><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">纯召死灵法师 (Fishymancer)</h4><p class="text-stone-300">以骷髅大军为核心的经典Build。战斗时让佣兵的力量光环强化骷髅，自己为敌群施放伤害加深诅咒；当首个敌人被击杀后，立即频繁施放尸体爆炸引发连锁爆炸。纯召流极其安全，对装备要求低。有了“谜团”(Lv 65)传送后，刷图效率成倍提升。</p></div><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">白骨死灵法师 (Bonemancer)</h4><p class="text-stone-300">以骨矛和骨魂为主要输出手段。骨矛具有穿透效果，直线清怪效率不错；骨魂则用于单体高伤打击。骨系法术属于魔法伤害，几乎没有免疫问题，是PVP的常青树。</p></div><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">毒素死灵法师 (Poisonmancer)</h4><p class="text-stone-300">以剧毒新星为核心，造成持续性大范围伤害。装备成型后清屏速度极快，特别适合秘密奶牛关等高密度区域。对装备要求非常高，核心是暗金法杖“死亡之网”。</p></div></div>`
                    },
                    {
                        title: '🗺️ MF刷宝推荐区域',
                        content: `<ul class="list-disc list-inside text-stone-300 space-y-2 bg-stone-800 p-4 rounded-lg border border-stone-600"><li><strong class="text-amber-400">秘密奶牛关 & 各高密度85级区域：</strong> 纯召或毒系死灵的乐园，怪物密集，非常适合尸爆或毒星清场。</li><li><strong class="text-amber-400">A5 - 尼拉塞克 (Nihlathak)：</strong> 纯召死灵最安全的刷钥匙选择之一。骷髅和石魔能有效吸引火力，防止被尼拉塞克的尸爆秒杀。</li></ul>`
                    },
                    {
                        title: '🤺 PVP玩法与对策',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><p class="text-stone-300">PVP中以<strong class="text-amber-400">白骨死灵</strong>为主。利用骨矛的快速弹道和骨魂的追踪能力，配合骨牢囚禁对手进行打击。对策是保持高速移动，避免被骨牢困住，并堆叠“魔法伤害减少”属性。</p></div>`
                    },
                    {
                        title: '⚙️ 装备成长路线',
                        content: `<div class="grid md:grid-cols-3 gap-4"> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">过渡期</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器/盾牌:</strong> +技能魔杖/娃娃头, "精神"剑盾 (Lv 25)</li> <li><strong>头盔:</strong> "知识" (Lv 27)</li> <li><strong>护甲:</strong> "隐秘" (Lv 17)</li> <li><strong>佣兵:</strong> "眼光"长柄武器 (Lv 27)</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">成型期</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器:</strong> "橡树之心" (Lv 55)</li> <li><strong>盾牌:</strong> "精神" (Lv 25)</li> <li><strong>头盔:</strong> 谐角之冠(Shako)</li> <li><strong>护甲:</strong> 蛇魔法师之皮</li> <li><strong>副手:</strong> "野兽" (Lv 63)</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">毕业装 (纯召/毒)</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>护甲:</strong> "谜团" (Lv 65) (核心)</li> <li><strong>佣兵武器:</strong> "无限" (Lv 63) (纯召)</li> <li><strong>武器:</strong> 死亡之网 (纯毒)</li> <li><strong>套装:</strong> 塔格奥三件 (纯毒)</li> </ul> </div> </div>`
                    }
                ]
            },
            paladin: {
                title: '圣骑士 - 神圣的化身',
                intro: '圣骑士是攻守兼备的团队核心。他拥有强大的战斗光环，祝福之锤流派（Hammerdin）被公认为版本刷图之王。无论是开荒、后期刷宝还是挑战超级Boss，圣骑士都有着无与伦比的全面性。',
                sections: [
                    {
                        title: '🌱 Solo开荒路线',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600 text-stone-300 space-y-3"><p><strong>技能路线 (圣火转祝福之锤):</strong></p><ul class="list-disc list-inside pl-4 space-y-1"><li><strong>1-18级 (圣火):</strong> 主加 <span class="text-amber-400">圣火</span> 及其协同 <span class="text-amber-400">抵抗火焰</span>，清怪效率极高。</li><li><strong>18-24级 (转型):</strong> 洗点或开始加点 <span class="text-amber-400">祝福之锤</span> 和 <span class="text-amber-400">专注</span> 光环。</li><li><strong>24级以后:</strong> 加满 <span class="text-amber-400">祝福之锤</span> 及其协同技能 (<span class="text-amber-400">祝福瞄准</span>, <span class="text-amber-400">活力</span>)，并加满 <span class="text-amber-400">专注</span>。</li></ul><p><strong>属性分配:</strong> 力量够穿装备(约156)，敏捷加到圣盾后格挡75%，其余全体力。</p><p><strong>关键装备:</strong> 双"精神"(剑+圣骑士盾)(Lv 25)是质变装备。"隐秘"甲(Lv 17), "知识"头(Lv 27)过渡。佣兵使用"眼光"(Lv 27)。</p></div>`
                    },
                    {
                        title: '💡 主流玩法构筑',
                        content: `<div class="space-y-4"><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">祝福之锤圣骑士 (Hammerdin)</h4><p class="text-stone-300">利用祝福之锤+专注光环输出，是当前版本PVM效率最高的Build。飞锤属于魔法伤害，地狱难度几乎没有免疫怪，可谓无往不利。唯一缺点是在狭窄地形需要走位技巧。</p></div><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">盾击圣骑士 (Smiter)</h4><p class="text-stone-300">专注于单体目标的Boss杀手。依靠100%命中的重击和高压碎性打击(CB)效果，能最快速度击杀各大Boss，是获取地狱火炬的绝对主力。但几乎没有清小怪能力。</p></div><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">天堂之拳圣骑士 (FoHdin)</h4><p class="text-stone-300">在恶魔与不死生物密集的场景（如 A4 - 混沌魔殿 (Chaos Sanctuary)）清场效率极高，甚至超过祝福之锤。但对其他类型的怪物伤害有限，Farm路线较为固定。</p></div></div>`
                    },
                     {
                        title: '🗺️ MF刷宝推荐区域',
                        content: `<ul class="list-disc list-inside text-stone-300 space-y-2 bg-stone-800 p-4 rounded-lg border border-stone-600"><li><strong class="text-amber-400">所有85级区域：</strong> 祝福之锤圣骑士可以高效清理任何顶级场景，如 A4 - 混沌魔殿 (Chaos Sanctuary)、A5 - 世界之石要塞 (Worldstone Keep) 等。</li><li><strong class="text-amber-400">A3 - 崔凡克议会 (Travincal)：</strong> 刷高级符文和金币的绝佳地点。</li><li><strong class="text-amber-400">地狱火炬任务 (Uber Tristram)：</strong> 盾击圣骑士是单挑超级Boss、获取火炬的首选职业。</li></ul>`
                    },
                    {
                        title: '🤺 PVP玩法与对策',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><p class="text-stone-300"><strong class="text-amber-400">祝福之锤圣骑士</strong>在PVP中近乎无解。高伤害、高机动、高防御，几乎没有天敌。对策是利用地形和走位躲避飞锤，并堆叠“魔法伤害减免”属性。不要尝试与<strong class="text-amber-400">盾击圣骑士</strong>近战硬拼。</p></div>`
                    },
                    {
                        title: '⚙️ 装备成长路线 (祝福之锤)',
                        content: `<div class="grid md:grid-cols-3 gap-4"> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">过渡期</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器/盾牌:</strong> 双"精神" (Lv 25) (剑+圣骑士盾)</li> <li><strong>头盔:</strong> "知识" (Lv 27)</li> <li><strong>护甲:</strong> "隐秘" (Lv 17) 或 "狮心" (Lv 41)</li> <li><strong>佣兵:</strong> "眼光"长柄武器 (Lv 27)</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">成型期</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器:</strong> "橡树之心" (Lv 55)</li> <li><strong>盾牌:</strong> 高抗"精神"圣骑士盾 (Lv 25)</li> <li><strong>头盔:</strong> 谐角之冠(Shako)</li> <li><strong>腰带:</strong> 蜘蛛之网</li> <li><strong>手套:</strong> 法师之拳</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">毕业装</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>护甲:</strong> "谜团" (Lv 65) (核心)</li> <li><strong>戒指:</strong> 双乔丹之石</li> <li><strong>护符:</strong> 马拉的万花筒</li> <li><strong>其他:</strong> 职业火炬、毁灭</li> </ul> </div> </div>`
                    }
                ]
            },
            sorceress: {
                title: '巫师 - 元素的女王',
                intro: '巫师是元素魔法的大师，更拥有独一无二的传送技能，这让她成为当之无愧的开荒和MF女王。虽然身板脆弱，但强大的远程火力与无与伦比的机动性，让她始终是游戏中最受欢迎的职业。',
                sections: [
                    {
                        title: '🌱 Solo开荒路线',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600 text-stone-300 space-y-3"><p><strong>技能路线 (火系转冰火双修):</strong></p><ul class="list-disc list-inside pl-4 space-y-1"><li><strong>1-24级 (火系):</strong> 主加 <span class="text-amber-400">火球</span> 及其协同 <span class="text-amber-400">火焰弹</span>。务必学习1级 <span class="text-amber-400">静态力场</span> 和1级 <span class="text-amber-400">传送</span>。</li><li><strong>24级以后 (双修):</strong> 开始主加 <span class="text-amber-400">冰封球</span> 和 <span class="text-amber-400">冰冷支配</span>。保留火球作为对付冰免怪的手段。</li></ul><p><strong>属性分配:</strong> 力量够穿装备(精神盾需156)，其余全体力。</p><p><strong>关键装备:</strong> "叶子"法杖(Lv 19)(前期火法), "隐秘"甲(Lv 17), "知识"头(Lv 27), "精神"剑盾组合(Lv 25)。佣兵使用"眼光"(Lv 27)。</p></div>`
                    },
                    {
                        title: '💡 主流玩法构筑',
                        content: `<div class="space-y-4"><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">纯冰巫师 (Blizzard Sorc)</h4><p class="text-stone-300">以暴风雪为核心输出，伤害极高、范围极大，是MF效率最高的Build之一。自带冰冻减速效果，非常安全。缺点是无法处理冰免怪，Farm路线相对固定。</p></div><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">纯电巫师 (Lightning Sorc)</h4><p class="text-stone-300">理论伤害上限全职业最高，清屏速度极快。但伤害波动大且极度依赖装备，需要佣兵持有“无限”(Lv 63)破除免疫才能发挥全部威力，是大后期的选择。</p></div><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">冰火双修巫师 (Meteorb)</h4><p class="text-stone-300">同时修习火系（陨石/火球）和冰系（冰封球）。优点是通关过程平滑，能应对绝大多数免疫怪物，非常适合单人通关和全场景MF。缺点是伤害上限不如单系专精。</p></div></div>`
                    },
                    {
                        title: '🗺️ MF刷宝推荐区域',
                        content: `<ul class="list-disc list-inside text-stone-300 space-y-2 bg-stone-800 p-4 rounded-lg border border-stone-600"><li><strong class="text-amber-400">A1 - 安达利尔 (Andariel) & A3 - 墨菲斯托 (Mephisto)：</strong> 纯冰法师最经典的Boss Farm路线，可以利用地形卡位安全击杀，是积累基础装备的起点。</li><li><strong class="text-amber-400">A2 - 古代通道 (Ancient Tunnels)：</strong> 85级场景且无冰免怪，是纯冰法师的天堂。</li><li><strong class="text-amber-400">全地图 (需装备支持)：</strong> 拥有“无限”(Lv 63)的纯电法师可以无视免疫，以最高效率Farm任何地图或恐怖地带。</li></ul>`
                    },
                     {
                        title: '🤺 PVP玩法与对策',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><p class="text-stone-300"><strong class="text-amber-400">冰系巫师</strong>依靠减速和暴风雪的爆发进行风筝。对策是堆满冰抗、装备防冻，并保持高速移动避免被命中。<br><strong class="text-amber-400">电系巫师</strong>常配合能量护盾，利用传送贴脸释放新星秒杀对手。对策是堆叠闪电抗性和闪电吸收装备，并拉开距离，在其护盾被打破时反击。</p></div>`
                    },
                    {
                        title: '⚙️ 装备成长路线',
                        content: `<div class="grid md:grid-cols-3 gap-4"> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">过渡期</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器:</strong> "叶子"法杖 (Lv 19) (火系), "精神"剑 (Lv 25)</li> <li><strong>盾牌:</strong> "精神"盾 (Lv 25)</li> <li><strong>头盔:</strong> "知识" (Lv 27)</li> <li><strong>护甲:</strong> "隐秘" (Lv 17)</li> <li><strong>佣兵:</strong> "眼光"长柄武器 (Lv 27)</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">成型期</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>套装:</strong> 塔拉夏的化身 (性价比极高)</li> <li><strong>散件:</strong> 奥库斯法杖, 谐角之冠, 蛇魔法师之皮, 蜘蛛之网</li> <li><strong>戒指/项链:</strong> 乔丹之石, 马拉的万花筒</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">毕业装 (纯电/纯冰)</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>佣兵武器:</strong> "无限" (Lv 63) (电法核心)</li> <li><strong>头盔:</strong> 格里芬之眼 (电法), 夜翼面纱 (冰法)</li> <li><strong>武器:</strong> 死亡深度 (冰法), "新月"(Lv 47)/艾斯屈塔 (电法)</li> <li><strong>护甲:</strong> "谜团" (Lv 65) 或 "荣耀之链" (Lv 63)</li> </ul> </div> </div>`
                    }
                ]
            },
            amazon: {
                title: '亚马逊 - 标枪与弓箭的女武神',
                intro: '亚马逊是远程物理和元素伤害的专家。标枪系擅长大规模清场，尤其在秘密奶牛关中所向披靡；弓箭系则是经典的远程物理射手。该职业对装备和操作有一定要求，更适合有经验的玩家。',
                sections: [
                    {
                        title: '🌱 Solo开荒路线',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600 text-stone-300 space-y-3"><p><strong>技能路线 (标枪):</strong></p><ul class="list-disc list-inside pl-4 space-y-1"><li><strong>初期:</strong> 使用 <span class="text-amber-400">剧毒标枪</span> 过渡。</li><li><strong>中期 (18级+):</strong> 主力单体技能 <span class="text-amber-400">充能一击</span>。</li><li><strong>后期 (30级+):</strong> 主力清场技能 <span class="text-amber-400">闪电之怒</span>。优先加满 <span class="text-amber-400">闪电之怒</span> 和 <span class="text-amber-400">充能一击</span> 及其协同技能。</li></ul><p><strong>属性分配:</strong> 力量够穿装备，敏捷加到满足格挡或装备需求，其余全体力。</p><p><strong>关键装备:</strong> "隐秘"甲(Lv 17), "知识"头(Lv 27)。标枪亚马逊核心是+技能装备。佣兵使用"眼光"(Lv 27)。</p></div>`
                    },
                     {
                        title: '💡 主流玩法构筑',
                        content: `<div class="space-y-4"><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">标枪电疗亚马逊 (Lightning Javazon)</h4><p class="text-stone-300">以闪电之怒和充能一击为核心，被誉为“奶牛场杀手”。怪物越多，闪电之怒的清场效率越高。对单体Boss，充能一击能造成毁灭性伤害。需要“无限”(Lv 63)光环来解决闪电免疫问题。</p></div><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">弓箭物理亚马逊 (Bowazon)</h4><p class="text-stone-300">以多重箭和导引箭为主要输出手段的物理弓手。没有元素免疫烦恼，但极度依赖高端装备，核心是“信心”(Lv 65)符文弓提供的狂热光环，以及“刚毅”(Lv 59)甲提供的巨额物理增伤。</p></div></div>`
                    },
                     {
                        title: '🗺️ MF刷宝推荐区域',
                        content: `<ul class="list-disc list-inside text-stone-300 space-y-2 bg-stone-800 p-4 rounded-lg border border-stone-600"><li><strong class="text-amber-400">秘密奶牛关：</strong> 标枪亚马逊的首选天堂，怪物密集且无电免，完美契合闪电之怒。</li><li><strong class="text-amber-400">A1 - 泰摩高地 -> 地穴 (The Pit)：</strong> 85级场景，物理弓亚马逊和拥有“无限”(Lv 63)的标枪亚马逊均可高效Farm。</li><li><strong class="text-amber-400">A4 - 混沌魔殿 (Chaos Sanctuary)：</strong> 对装备要求高，需要“无限”(Lv 63)或破免手段处理电免怪。</li></ul>`
                    },
                    {
                        title: '🤺 PVP玩法与对策',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><p class="text-stone-300"><strong class="text-amber-400">弓箭亚马逊</strong>是经典的PVP角色，依靠高攻速的导引箭进行远程压制。对策是快速近身，不给她风筝的空间。<strong class="text-amber-400">标枪亚马逊</strong>则依靠贴脸充能一击或剧毒标枪打Hit&Run，对策是保持距离和准备解毒药水。</p></div>`
                    },
                    {
                        title: '⚙️ 装备成长路线',
                        content: `<div class="grid md:grid-cols-3 gap-4"> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">过渡期</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器:</strong> +技能标枪, "和风"弓 (Lv 21)</li> <li><strong>头盔:</strong> "知识" (Lv 27)</li> <li><strong>护甲:</strong> "隐秘" (Lv 17), "和平" (Lv 29)</li> <li><strong>佣兵:</strong> "眼光"长柄武器 (Lv 27)</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">成型期 (标枪)</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器:</strong> 泰坦的复仇</li> <li><strong>头盔:</strong> 安达利尔的面容</li> <li><strong>腰带:</strong> 剃刀之尾</li> <li><strong>手套:</strong> 安置手</li> <li><strong>盾牌:</strong> "精神" (Lv 25)</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">毕业装 (标枪/弓)</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>佣兵武器:</strong> "无限" (Lv 63) (标枪)</li> <li><strong>护甲:</strong> "谜团" (Lv 65) (标枪), "刚毅" (Lv 59) (弓)</li> <li><strong>头盔:</strong> 格里芬之眼 (标枪)</li> <li><strong>武器:</strong> "信心"弓 (Lv 65) (弓)</li> </ul> </div> </div>`
                    }
                ]
            },
            assassin: {
                title: '猎法者 - 暗影中的利刃',
                intro: '猎法者精通陷阱与武学两种截然不同的战斗方式。陷阱流安全高效，是开荒首选；武学流在“马赛克”符文之语的加持下强势崛起，成为后期强力玩法。她是一位集控制、爆发和战术于一身的多面手。',
                sections: [
                    {
                        title: '🌱 Solo开荒路线',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600 text-stone-300 space-y-3"><p><strong>技能路线 (陷阱):</strong></p><ul class="list-disc list-inside pl-4 space-y-1"><li><strong>1-24级:</strong> 使用 <span class="text-amber-400">火焰爆震</span> 作为主要输出。</li><li><strong>24级以后:</strong> 核心技能 <span class="text-amber-400">雷光守卫</span> (优先加满) 和 <span class="text-amber-400">亡者守卫</span> (尸爆清场)。</li><li><strong>辅助技能:</strong> 1点 <span class="text-amber-400">魔影斗篷</span> (控场), 1点 <span class="text-amber-400">心灵爆震</span> (保命), 1点 <span class="text-amber-400">暗影宗师</span> (肉盾)。</li></ul><p><strong>属性分配:</strong> 力量够穿装备，敏捷满足装备需求，其余全体力。</p><p><strong>关键装备:</strong> 核心是+陷阱技能的爪子。"隐秘"甲(Lv 17), "知识"头(Lv 27)。可准备"精神"剑盾(Lv 25)作为副手切装放陷阱。佣兵使用"眼光"(Lv 27)。</p></div>`
                    },
                     {
                        title: '💡 主流玩法构筑',
                        content: `<div class="space-y-4"><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">陷阱猎法者 (Trapsin)</h4><p class="text-stone-300">以雷光守卫和亡者守卫为核心输出。玩法非常安全，通过陷阱进行远程攻击，并利用亡者守卫的尸爆效果清场。核心是堆叠+陷阱技能等级。</p></div><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">马赛克武学猎法者 (Mosaic Sin)</h4><p class="text-stone-300">2.6版本崛起的超强力玩法。双持“马赛克”(Lv 53)爪后，终结技不再消耗聚气，可以同时触发冰、火、电三系元素效果，清场能力极强，且不受单一免疫限制。但需要近身作战，操作要求高。</p></div><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">踢击猎法者 (Kicksin)</h4><p class="text-stone-300">利用龙爪/龙尾的高连击次数叠加压碎性打击(CB)效果，是专门用来击杀超级Boss的Build之一，可以单挑Uber三王获取火炬。</p></div></div>`
                    },
                    {
                        title: '🗺️ MF刷宝推荐区域',
                        content: `<ul class="list-disc list-inside text-stone-300 space-y-2 bg-stone-800 p-4 rounded-lg border border-stone-600"><li><strong class="text-amber-400">A1 - 女伯爵 (Countess)：</strong> 陷阱刺客刷低中级符文的绝佳地点，可以隔墙放置陷阱安全击杀。</li><li><strong class="text-amber-400">A5 - 尼拉塞克 (Nihlathak)：</strong> 利用亡者守卫抢先引爆尸体，可以非常安全地Farm毁灭之钥。</li><li><strong class="text-amber-400">Uber崔斯特姆 (Uber Tristram)：</strong> 踢击刺客是除圣骑士外，单挑三魔王的又一选择。</li></ul>`
                    },
                    {
                        title: '🤺 PVP玩法与对策',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><p class="text-stone-300"><strong class="text-amber-400">陷阱刺客</strong>通过布置陷阱阵和心灵爆震的“锁头”控制对手。对策是提高电抗和吸收，并保持移动打乱其节奏。<strong class="text-amber-400">幽灵刺客</strong>利用“混沌”(Lv 57)爪的旋风斩进行贴身缠斗，对策是使用圣骑士的盾击打断或法师的高频传送拉开距离。</p></div>`
                    },
                    {
                        title: '⚙️ 装备成长路线',
                        content: `<div class="grid md:grid-cols-3 gap-4"> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">过渡期 (陷阱)</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器:</strong> +3陷阱技能爪</li> <li><strong>头盔:</strong> "知识" (Lv 27)</li> <li><strong>护甲:</strong> "隐秘" (Lv 17), "烟雾" (Lv 37)</li> <li><strong>副手:</strong> "精神"剑盾 (Lv 25)</li> <li><strong>佣兵:</strong> "眼光" (Lv 27)</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">成型期 (陷阱/武学)</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器:</strong> 双"马赛克"爪 (Lv 53) (武学)</li> <li><strong>头盔:</strong> 谐角之冠 (陷阱), 吉拉的守护 (武学)</li> <li><strong>护甲:</strong> "背信" (Lv 43) (通用), "谜团" (Lv 65) (陷阱)</li> <li><strong>手套:</strong> 德古拉之握 (武学)</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">毕业装 (陷阱/武学)</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>头盔:</strong> 格里芬之眼 (陷阱)</li> <li><strong>护甲:</strong> "刚毅" (Lv 59) (武学), "谜团" (Lv 65) (通用)</li> <li><strong>佣兵武器:</strong> "无限" (Lv 63) (陷阱)</li> <li><strong>戒指:</strong> 双乔丹之石 (陷阱)</li> </ul> </div> </div>`
                    }
                ]
            },
            barbarian: {
                title: '野蛮人 - 战场的怒吼',
                intro: '野蛮人是传统的近战之王与团队的支柱。他拥有全职业最高的生命成长和强大的战斗吼叫，能极大地增强自己和队友的生存能力。虽然开荒较为艰难，但成型后是团队中不可或缺的辅助和“打钱”专家。',
                sections: [
                    {
                        title: '🌱 Solo开荒路线',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600 text-stone-300 space-y-3"><p><strong>技能路线 (双挥转旋风):</strong></p><ul class="list-disc list-inside pl-4 space-y-1"><li><strong>初期:</strong> 使用 <span class="text-amber-400">双手挥舞</span> (4级后0蓝耗) 清怪。</li><li><strong>中期 (24级+):</strong> 核心生存技能 <span class="text-amber-400">战斗体制</span> (优先加满)。</li><li><strong>后期 (30级+):</strong> 主力输出技能 <span class="text-amber-400">旋风斩</span>。并根据武器类型加满对应的 <span class="text-amber-400">武器掌握</span>。</li></ul><p><strong>属性分配:</strong> 力量够穿装备，敏捷满足装备和命中需求，其余全体力。</p><p><strong>关键装备:</strong> 双持"钢铁"(Lv 13)武器开荒。中期可凑齐不朽之王(IK)套装部件。头盔目标是亚瑞特的面容。佣兵使用"眼光"(Lv 27)。</p></div>`
                    },
                     {
                        title: '💡 主流玩法构筑',
                        content: `<div class="space-y-4"><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">旋风斩野蛮人 (Whirlwind Barb)</h4><p class="text-stone-300">经典的WW流派，通过旋风斩在怪物群中来回穿梭造成伤害。适合开阔地形，装备成型后清场能力不俗。是PVP中的近战霸主之一。</p></div><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">狂乱野蛮人 (Frenzy Barb)</h4><p class="text-stone-300">通过连续攻击叠加移动和攻击速度，越打越快。在跑图和单体输出上有优势，打击感十足。但清群能力和安全性稍逊于旋风流。</p></div><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">打钱野蛮人 (Gold Find Barb)</h4><p class="text-stone-300">特化Build，利用“寻找物品”技能在崔凡克等场景反复击杀议会成员并翻找尸体，以获取大量金币和高级符文。是后期重要的财富来源。</p></div></div>`
                    },
                    {
                        title: '🗺️ MF刷宝推荐区域',
                        content: `<ul class="list-disc list-inside text-stone-300 space-y-2 bg-stone-800 p-4 rounded-lg border border-stone-600"><li><strong class="text-amber-400">A3 - 崔凡克高阶议会 (Travincal Council)：</strong> 野蛮人刷钱和刷高级符文的圣地。高抗性让他能硬抗议会成员的攻击，击杀后还能用“寻找物品”获得额外掉落。</li><li><strong class="text-amber-400">组队MF：</strong> 在多人游戏中，野蛮人是顶级的辅助。提供战斗体制(BO)吼血，并对所有尸体使用“寻找物品”，能显著提高整个队伍的掉宝总量。</li></ul>`
                    },
                    {
                        title: '🤺 PVP玩法与对策',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><p class="text-stone-300"><strong class="text-amber-400">旋风野蛮人</strong>是PVP近战霸主。利用高速旋风和跳跃的击退进行控场和输出。对策是避免正面硬拼，利用瞬移和障碍物拉扯，在其旋风结束的硬直时反击。</p></div>`
                    },
                    {
                        title: '⚙️ 装备成长路线',
                        content: `<div class="grid md:grid-cols-3 gap-4"> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">过渡期</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器:</strong> 双"钢铁" (Lv 13), "荣耀" (Lv 27)</li> <li><strong>套装:</strong> 不朽之王 (IK) 部分组件</li> <li><strong>护甲:</strong> "烟雾" (Lv 37), "狮心" (Lv 41)</li> <li><strong>戒指:</strong> 乌鸦之霜</li> <li><strong>佣兵:</strong> "眼光" (Lv 27)</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">成型期</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器:</strong> "誓约" (Lv 49) (性价比之王)</li> <li><strong>头盔:</strong> 亚瑞特的面容 (核心)</li> <li><strong>护甲:</strong> "背信" (Lv 43)</li> <li><strong>腰带:</strong> 维尔凯的赎罪</li> <li><strong>手套:</strong> 德古拉之握</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">毕业装</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器:</strong> 双"悔恨"相位剑 (Lv 59)</li> <li><strong>护甲:</strong> "谜团" (Lv 65) (机动性) 或 "刚毅" (Lv 59) (伤害)</li> <li><strong>头盔:</strong> 亚瑞特的面容 (升级)</li> <li><strong>戒指:</strong> 双吸戒指+乌鸦之霜</li> </ul> </div> </div>`
                    }
                ]
            },
            druid: {
                title: '德鲁伊 - 自然的守护者',
                intro: '德鲁伊是一位玩法多样的职业，他能召唤猛兽、驾驭元素、变身野兽。风系德鲁伊是PVM中的全能好手，攻防兼备；变身德鲁伊则在PVP中表现出色。他能为团队提供宝贵的生命光环，是队伍中坚实的后盾。',
                sections: [
                    {
                        title: '🌱 Solo开荒路线',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600 text-stone-300 space-y-3"><p><strong>技能路线 (火系转风系):</strong></p><ul class="list-disc list-inside pl-4 space-y-1"><li><strong>1-24级 (火系):</strong> 主加 <span class="text-amber-400">火焰风暴</span> 和 <span class="text-amber-400">裂地</span>，轻松度过前期。</li><li><strong>24级以后 (转型风系):</strong> 洗点，主加 <span class="text-amber-400">龙卷风</span> 和 <span class="text-amber-400">暴风</span>，并加满协同技能 <span class="text-amber-400">旋风装甲</span>。</li><li><strong>召唤系:</strong> 务必点出1点 <span class="text-amber-400">橡木智者</span> (极大提升生命)。</li></ul><p><strong>属性分配:</strong> 力量够穿装备(精神盾需156)，其余全体力。</p><p><strong>关键装备:</strong> "叶子"法杖(Lv 19)(前期火德), "精神"剑盾(Lv 25)(风德核心)。+3龙卷风的德鲁伊头盔是制作"知识"(Lv 27)的极品底材。佣兵使用"眼光"(Lv 27)。</p></div>`
                    },
                    {
                        title: '💡 主流玩法构筑',
                        content: `<div class="space-y-4"><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">风系德鲁伊 (Wind Druid)</h4><p class="text-stone-300">最强的PVM流派之一。核心技能是龙卷风（物理）和暴风（冰冷），同时拥有物理和元素两种伤害，几乎没有打不了的怪物。加上旋风装甲和橡木智者，生存能力极强。</p></div><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">变身狼人德 (Fury Werewolf)</h4><p class="text-stone-300">主攻技能为狂怒，一次攻击5次，是强力的物理近战Build。配合狂犬病还能造成大范围持续毒伤。玩法类似狂乱野蛮人，高速砍杀，生存力强。</p></div><div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><h4 class="font-bold text-lg text-amber-400 mb-2">变身熊人德 (Maul Werebear)</h4><p class="text-stone-300">以超高生命和防御著称的坦克。攻击速度较慢，但拥有群体眩晕神技“震波”。主要在PVM中充当坦克和控场，或特化为专门击杀Uber Boss的Build。</p></div></div>`
                    },
                    {
                        title: '🗺️ MF刷宝推荐区域',
                        content: `<ul class="list-disc list-inside text-stone-300 space-y-2 bg-stone-800 p-4 rounded-lg border border-stone-600"><li><strong class="text-amber-400">A2 - 古代通道 (Ancient Tunnels)：</strong> 风德的完美Farm地点，85级场景且无冰免。</li><li><strong class="text-amber-400">秘密奶牛关 (Cow Level)：</strong> 风德和火德刷牛效率都不错且非常安全。</li><li><strong class="text-amber-400">A5 - 尼拉塞克 (Nihlathak)：</strong> 风德拥有食尸藤可以吞噬尸体，能相对安全地Farm。</li></ul>`
                    },
                     {
                        title: '🤺 PVP玩法与对策',
                        content: `<div class="bg-stone-800 p-4 rounded-lg border border-stone-600"><p class="text-stone-300"><strong class="text-amber-400">风德</strong>血量极厚，生存能力强，在法系对决中依靠消耗战取胜。对策是速战速决，利用其龙卷风弹道不稳定的弱点进行爆发。<strong class="text-amber-400">狼德</strong>则依靠“狂犬病”的剧毒进行Hit&Run。对策是被咬后立即喝解毒药水，并保持距离。</p></div>`
                    },
                    {
                        title: '⚙️ 装备成长路线',
                        content: `<div class="grid md:grid-cols-3 gap-4"> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">过渡期 (元素/近战)</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器:</strong> "叶子"(Lv 19)/"精神"(Lv 25) (元素), "誓约"(Lv 49) (近战)</li> <li><strong>头盔:</strong> "知识" (Lv 27), 加尔的长发 (近战核心)</li> <li><strong>护甲:</strong> "隐秘" (Lv 17), "烟雾" (Lv 37)</li> <li><strong>佣兵:</strong> "眼光" (Lv 27)</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">成型期 (元素/近战)</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>武器:</strong> "橡树之心" (Lv 55) (元素), "毁灭" (Lv 69) (近战)</li> <li><strong>头盔:</strong> 谐角之冠 (元素), 加尔的长发 (近战)</li> <li><strong>护甲:</strong> 蛇魔法师之皮 (元素), "刚毅" (Lv 59) (近战)</li> <li><strong>盾牌:</strong> "精神" (Lv 25) (元素)</li> </ul> </div> <div class="bg-stone-800 p-4 rounded-lg border border-stone-600"> <h4 class="font-bold text-lg text-amber-500 mb-2">毕业装</h4> <ul class="list-disc list-inside text-stone-300 space-y-1"> <li><strong>护甲:</strong> "谜团" (Lv 65) (通用核心)</li> <li><strong>佣兵武器:</strong> "无限" (Lv 63) (极大提升风德和狼德)</li> <li><strong>戒指:</strong> 乌鸦之霜 (近战)</li> <li><strong>手套:</strong> 德古拉之握 (近战)</li> </ul> </div> </div>`
                    }
                ]
            }
        };