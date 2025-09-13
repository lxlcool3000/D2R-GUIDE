// Tag options for filters (exported for reuse and i18n)
export const gearTagOptions = [
  'FCR','IAS','MF','CB','DS','ResAll','CBF','Teleport','Conviction','-EnemyRes','FRW','DR','Life','Mana','Gold','vsDemons','OW','ED','STR','Dex','Merc','Budget','+Skill','PsnDamage','ManaRegen','Pierce','Amazon','Barbarian','Assassin','Druid','Paladin','Sockets','Caster','Melee','ColdDamage'
];

export const runeTagOptions = [
  'FCR','IAS','MF','CB','DS','ResAll','CBF','Teleport','Conviction','-EnemyRes','Meditation','FRW','Budget','Merc','+Skill','Attributes','Defense','Lightning','Fire','Bow'
];

export const baseTagOptions = [
  'Spirit','HOTO','Grief','Infinity','Insight','Faith','Enigma','Fortitude','Exile','Merc','Phoenix','Treachery','Stealth'
];

// Canonical mapping: Runeword name -> tags
export const runewordTagsMap = new Map([
  ['谜团 (Enigma)', ['Teleport','MF','+Skill']],
  ['精神 (Spirit)', ['FCR','+Skill','Mana','Budget']],
  ['橡树之心 (Heart of the Oak)', ['FCR','ResAll']],
  ['无限 (Infinity)', ['Conviction','-EnemyRes','Merc']],
  ['眼光 (Insight)', ['Meditation','ManaRegen','Merc','Budget']],
  ['背信 (Treachery)', ['IAS']],
  ['隐秘 (Stealth)', ['FCR','FRW','Budget']],
  ['凤凰 (Phoenix)', ['-EnemyRes']],
  ['悔恨 (Grief)', ['IAS','Melee']],
  ['知识 (Lore)', ['+Skill','Budget']],
  ['荣耀 (Honor)', ['Budget','Leveling','Melee']],
  ['和风 (Zephyr)', ['Bow','FRW','Leveling']],
  ['狮心 (Lionheart)', ['Budget','Attributes']],
  ['和平 (Peace)', ['Amazon']],
  ['马赛克 (Mosaic)', ['Assassin','MartialArts','Endgame']],
  ['钢铁 (Steel)', ['Leveling','AR','IAS']],
  ['刚毅 (Fortitude)', ['ED','Defense','ResAll']],
  ['信心 (Faith)', ['Fanaticism','Bow','IAS']],
  ['流亡 (Exile)', ['Paladin','Defensive']],
  ['最后的愿望 (Last Wish)', ['CB','LL','Endgame']],
  ['烟雾 (Smoke)', ['ResAll','Budget']],
  ['毁灭 (Breath of the Dying)', ['LL','ED','IAS','Melee','Endgame']],
  ['混沌 (Chaos)', ['Assassin','Whirlwind','Melee']],
  ['新月 (Crescent Moon)', ['-EnemyLightningRes','Lightning','Melee']],
  ['荣耀之链 (Chains of Honor)', ['+Skill','ResAll','DR','MF']],
  ['战争召唤 (Call to Arms)', ['BO','Buff','Swap','+Skill']],
  ['服从 (Obedience)', ['ED','CB','ResAll','Merc','Budget']],
  ['骄傲 (Pride)', ['Concentration','Merc','Aura']],
  ['和谐 (Harmony)', ['Vigor','Bow','FRW','Budget']],
  ['法之使者 (Lawbringer)', ['Decrepify','Sanctuary','Utility']]
]);

// Localized labels (ZH). Keys not listed fall back to key.
export const tagLabelsZh = {
  // common mechanics
  FCR: 'FCR 施法速度', IAS: 'IAS 攻击速度', MF: 'MF 掉率', CB: 'CB 压碎', DS: 'DS 致命一击',
  ResAll: '全抗', CBF: '不可冰冻', Teleport: '传送', Conviction: '信念光环', '-EnemyRes': '降低敌抗',
  Meditation: '冥思光环', FRW: '移动速度', DR: '物理减伤', Life: '生命', Mana: '法力', Gold: '金币',
  vsDemons: '对恶魔伤害', OW: '开放伤口', ED: '增强伤害', STR: '力量', Dex: '敏捷',
  Merc: '佣兵', Budget: '平民/过渡', '+Skill': '+技能', PsnDamage: '毒素伤害', ManaRegen: '回蓝',
  Pierce: '穿刺', Attributes: '属性', Defense: '防御', Lightning: '闪电', Fire: '火焰', Bow: '弓系',
  // classes
  Amazon: '亚马逊', Barbarian: '野蛮人', Assassin: '刺客', Druid: '德鲁伊', Paladin: '圣骑士',
  Sockets: '多孔', Caster: '施法', Melee: '近战', ColdDamage: '冰冷伤害',
  // auras / utility
  Concentration: '专注光环', Vigor: '活力光环', Sanctuary: '庇护所光环', Decrepify: '衰老', Vendor: '商人折扣',
  BO: '战斗体制', Buff: '增益', Swap: '切换', Endgame: '毕业'
};

// Localized labels (EN)
export const tagLabelsEn = {
  // common mechanics
  FCR: 'FCR Cast Rate', IAS: 'IAS Attack Speed', MF: 'Magic Find', CB: 'Crushing Blow', DS: 'Deadly Strike',
  ResAll: 'All Resist', CBF: 'Cannot Be Frozen', Teleport: 'Teleport', Conviction: 'Conviction Aura', '-EnemyRes': 'Reduce Enemy Res',
  Meditation: 'Meditation Aura', FRW: 'Run/Walk', DR: 'Damage Reduce', Life: 'Life', Mana: 'Mana', Gold: 'Gold Find',
  vsDemons: 'Vs Demons', OW: 'Open Wounds', ED: 'Enhanced Damage', STR: 'Strength', Dex: 'Dexterity',
  Merc: 'Mercenary', Budget: 'Budget', '+Skill': '+Skills', PsnDamage: 'Poison Damage', ManaRegen: 'Mana Regen',
  Pierce: 'Pierce', Attributes: 'Attributes', Defense: 'Defense', Lightning: 'Lightning', Fire: 'Fire', Bow: 'Bow',
  // classes
  Amazon: 'Amazon', Barbarian: 'Barbarian', Assassin: 'Assassin', Druid: 'Druid', Paladin: 'Paladin',
  Sockets: 'Sockets', Caster: 'Caster', Melee: 'Melee', ColdDamage: 'Cold Damage',
  // auras / utility
  Concentration: 'Concentration', Vigor: 'Vigor', Sanctuary: 'Sanctuary', Decrepify: 'Decrepify', Vendor: 'Vendor Discount',
  BO: 'Battle Orders', Buff: 'Buff', Swap: 'Weapon Swap', Endgame: 'Endgame'
};
