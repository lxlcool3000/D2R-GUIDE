export const db = {
            classes: [
                { id: 'home', name: '职业总览', icon: '📜' },
                { id: 'necromancer', name: '死灵法师', icon: '💀' },
                { id: 'paladin', name: '圣骑士', icon: '🛡️' },
                { id: 'sorceress', name: '巫师', icon: '🔥' },
                { id: 'amazon', name: '亚马逊', icon: '🏹' },
                { id: 'assassin', name: '猎法者', icon: '🥷' },
                { id: 'barbarian', name: '野蛮人', icon: '⚔️' },
                { id: 'druid', name: '德鲁伊', icon: '🐾' }
            ],
            runes: [
                { id: 1, zh: '艾尔', tw: '愛爾', en: 'El' }, { id: 2, zh: '艾德', tw: '艾德', en: 'Eld' }, { id: 3, zh: '特尔', tw: '特爾', en: 'Tir' }, { id: 4, zh: '那夫', tw: '那夫', en: 'Nef' }, { id: 5, zh: '爱斯', tw: '愛斯', en: 'Eth' }, { id: 6, zh: '伊司', tw: '伊司', en: 'Ith' }, { id: 7, zh: '塔尔', tw: '塔爾', en: 'Tal' }, { id: 8, zh: '拉尔', tw: '拉爾', en: 'Ral' }, { id: 9, zh: '欧特', tw: '歐特', en: 'Ort' }, { id: 10, zh: '书尔', tw: '書爾', en: 'Thul' }, { id: 11, zh: '安姆', tw: '安姆', en: 'Amn' }, { id: 12, zh: '索尔', tw: '索爾', en: 'Sol' }, { id: 13, zh: '夏', tw: '夏', en: 'Shael' }, { id: 14, zh: '多尔', tw: '多爾', en: 'Dol' }, { id: 15, zh: '海尔', tw: '海爾', en: 'Hel' }, { id: 16, zh: '埃欧', tw: '埃歐', en: 'Io' }, { id: 17, zh: '卢姆', tw: '盧姆', en: 'Lum' }, { id: 18, zh: '科', tw: '科', en: 'Ko' }, { id: 19, zh: '法尔', tw: '法爾', en: 'Fal' }, { id: 20, zh: '蓝姆', tw: '藍姆', en: 'Lem' }, { id: 21, zh: '普尔', tw: '普爾', en: 'Pul' }, { id: 22, zh: '乌姆', tw: '烏姆', en: 'Um' }, { id: 23, zh: '马尔', tw: '馬爾', en: 'Mal' }, { id: 24, zh: '伊斯特', tw: '伊斯特', en: 'Ist' }, { id: 25, zh: '古尔', tw: '古爾', en: 'Gul' }, { id: 26, zh: '伐克斯', tw: '伐克斯', en: 'Vex' }, { id: 27, zh: '欧姆', tw: '歐姆', en: 'Ohm' }, { id: 28, zh: '罗', tw: '羅', en: 'Lo' }, { id: 29, zh: '瑟', tw: '瑟', en: 'Sur' }, { id: 30, zh: '贝', tw: '貝', en: 'Ber' }, { id: 31, zh: '乔', tw: '喬', en: 'Jah' }, { id: 32, zh: '查姆', tw: '查姆', en: 'Cham' }, { id: 33, zh: '萨德', tw: '薩德', en: 'Zod' },
            ],
            runewords: [
                { name: '野兽 (Beast)', base: '5孔 斧/权杖/锤', formula: '30+3+22+23+17', level: 63, type: ['weapon'], sockets: 5 }, { name: '毁灭 (Breath of the Dying)', base: '6孔 任意武器', formula: '26+15+1+2+33+5', level: 69, type: ['weapon'], sockets: 6 }, { name: '荣耀之链 (Chains of Honor)', base: '4孔 胸甲', formula: '14+22+30+24', level: 63, type: ['armor'], sockets: 4 }, { name: '混沌 (Chaos)', base: '3孔 爪类', formula: '19+27+22', level: 57, type: ['weapon'], sockets: 3 }, { name: '新月 (Crescent Moon)', base: '3孔 斧/剑/长柄武器', formula: '13+22+3', level: 47, type: ['weapon'], sockets: 3 }, { name: '谜团 (Enigma)', base: '3孔 胸甲', formula: '31+6+30', level: 65, type: ['armor'], sockets: 3 }, { name: '流亡 (Exile)', base: '4孔 圣骑士盾牌', formula: '26+27+24+14', level: 57, type: ['shield'], sockets: 4 }, { name: '信心 (Faith)', base: '4孔 弓/弩', formula: '27+31+20+2', level: 65, type: ['weapon'], sockets: 4 }, { name: '刚毅 (Fortitude)', base: '4孔 武器/胸甲', formula: '1+12+14+28', level: 59, type: ['weapon', 'armor'], sockets: 4 }, { name: '悔恨 (Grief)', base: '5孔 剑/斧', formula: '5+3+28+23+8', level: 59, type: ['weapon'], sockets: 5 }, { name: '橡树之心 (Heart of the Oak)', base: '4孔 法杖/连枷', formula: '18+26+21+10', level: 55, type: ['weapon'], sockets: 4 }, { name: '荣耀 (Honor)', base: '5孔 近战武器', formula: '11+1+6+3+12', level: 27, type: ['weapon'], sockets: 5 }, { name: '无限 (Infinity)', base: '4孔 长柄武器/长矛', formula: '30+23+30+29', level: 63, type: ['weapon'], sockets: 4 }, { name: '眼光 (Insight)', base: '4孔 长柄武器/法杖/弓/弩', formula: '8+3+7+12', level: 27, type: ['weapon'], sockets: 4 }, { name: '最后的愿望 (Last Wish)', base: '6孔 剑/锤/斧', formula: '31+23+31+29+31+30', level: 65, type: ['weapon'], sockets: 6 }, { name: '叶子 (Leaf)', base: '2孔 法杖', formula: '3+8', level: 19, type: ['weapon'], sockets: 2 }, { name: '狮心 (Lionheart)', base: '3孔 胸甲', formula: '15+17+19', level: 41, type: ['armor'], sockets: 3 }, { name: '知识 (Lore)', base: '2孔 头盔', formula: '9+12', level: 27, type: ['helm'], sockets: 2 }, { name: '马赛克 (Mosaic)', base: '3孔 爪类', formula: '23+25+11', level: 53, type: ['weapon'], sockets: 3 }, { name: '誓约 (Oath)', base: '4孔 剑/斧/钉头锤', formula: '13+21+23+17', level: 49, type: ['weapon'], sockets: 4 }, { name: '和平 (Peace)', base: '2孔 胸甲', formula: '13+10+11', level: 29, type: ['armor'], sockets: 2 }, { name: '凤凰 (Phoenix)', base: '4孔 武器/盾牌', formula: '26+26+28+31', level: 65, type: ['weapon', 'shield'], sockets: 4 }, { name: '烟雾 (Smoke)', base: '2孔 胸甲', formula: '4+17', level: 37, type: ['armor'], sockets: 2 }, { name: '精神 (Spirit)', base: '4孔 剑/盾牌', formula: '7+10+9+11', level: 25, type: ['weapon', 'shield'], sockets: 4 }, { name: '钢铁 (Steel)', base: '2孔 剑/斧/钉头锤', formula: '3+1', level: 13, type: ['weapon'], sockets: 2 }, { name: '隐秘 (Stealth)', base: '2孔 胸甲', formula: '7+5', level: 17, type: ['armor'], sockets: 2 }, { name: '背信 (Treachery)', base: '3孔 胸甲', formula: '13+10+20', level: 43, type: ['armor'], sockets: 3 }, { name: '和风 (Zephyr)', base: '2孔 远程武器', formula: '9+5', level: 21, type: ['weapon'], sockets: 2 },
            ],
            tips: [
                { title: '🐄 如何开启秘密奶牛关？', content: '通关对应难度（普通/噩梦/地狱）后，在赫拉迪姆方块中放入“维特之腿”（在崔斯特瑞姆拯救凯恩的地方获取）和一个“辨识卷轴”，点击合成，即可在罗格营地开启通往秘密奶牛关的红门。' },
                { title: '🏃‍♂️ 重置地图与Boss', content: '想要重复刷一个Boss或一个区域？很简单，只需要“储存并退出游戏”，然后重新进入游戏即可。所有的怪物和地图都会被重置。' },
                { title: '📦 赫拉迪姆方块实用公式 (非符文之语)', content: '<ul class="list-disc list-inside space-y-2"><li><strong>3 个治疗药剂 + 3 个法力药剂 + 1 个碎裂的宝石</strong> = 1 个回复活力药剂</li><li><strong>1 个回复活力药剂 + 3 个完美的宝石</strong> = 1 个全面的回复活力药剂 (大紫)</li><li><strong>3 个完美的宝石 + 1 件魔法物品</strong> = 重置该魔法物品的属性 (相当于赌博)</li><li><strong>1 个“海尔”符文(15#) + 1 个回城卷轴 + 任何带孔物品</strong> = 清除镶嵌物 (镶嵌物会消失)</li><li><strong>1 个无暇的宝石 + 1 个魔法武器/盔甲</strong> = 升级为更高品质的魔法物品</li><li><strong>“塔尔”(7#) + “书尔”(10#) + “完美的黄玉” + 普通盔甲</strong> = 同类型的带孔盔甲</li><li><strong>“拉尔”(8#) + “安姆”(11#) + “完美的紫水晶” + 普通武器</strong> = 同类型的带孔武器</li></ul>' },
                { title: ' mercenary 装备小技巧', content: '给你的佣兵穿上带有“无法破坏”属性的无形装备（比如无形的“刚毅”护甲），可以让他获得无形装备带来的50%基础属性加成，并且装备不会损坏，极大提升其生存和输出能力。' },
                { title: '🔄 快速切换武器', content: '默认按下 “W” 键可以在主副两套武器之间快速切换。这对于需要不同光环（如副手“野兽”）或不同技能组合的职业至关重要。' },
                { title: '💀 如何安全地捡回尸体？', content: '如果你在危险的地方死亡，难以捡回尸体，可以先“储存并退出游戏”。重新进入游戏后，你的尸体（以及上面的所有装备）会出现在城镇的安全区域。' },
                { title: '💰 卖什么物品最值钱？', content: '在游戏早期，带有“+技能”词缀的法杖、死灵法师的“娃娃头”（盾牌）、圣骑士的权杖等职业特定物品通常能卖出好价钱。另外，戒指、护身符等小件物品的售价与占用空间比很高。' },
            ],
            topGear: [
                { name: '谜团 (Enigma)', type: '符文之语胸甲', category: ['armor'], key_stats: ['+1 传送 (Teleport)', '+2 所有技能', '+高力量 (按等级提升)', '🍀高MF (按等级提升)'], best_for: '所有职业的终极毕业选择，赋予无与伦比的机动性，彻底改变游戏玩法。' },
                { name: '悔恨 (Grief)', type: '符文之语武器', category: ['weapon'], key_stats: ['+320-400 伤害 (Damage)', '⚔️20-40% IAS', '-25% 目标防御', '20% 致命一击'], best_for: '物理近战职业的毕业武器，尤其是盾击圣骑士和旋风野蛮人。伤害计算方式独特，面板不显示但实际伤害极高。' },
                { name: '无限 (Infinity)', type: '符文之语长柄武器', category: ['weapon'], key_stats: ['赋予12级信念光环 (Conviction Aura)', '40% 压碎性打击 (CB)', '+高额增强伤害 (ED)'], best_for: '佣兵专用毕业武器。信念光环能破除大部分怪物的元素免疫，是所有元素系玩法（如电法、标枪亚马逊）的质变装备。' },
                { name: '精神 (Spirit)', type: '符文之语剑/盾', category: ['weapon', 'shield'], key_stats: ['+2 所有技能', '⚡25-35% FCR', '+大量法力', '+生命'], best_for: '性价比最高的施法者装备，无论是剑还是盾，都是所有法系职业从开荒到毕业的核心选择。' },
                { name: '橡树之心 (Heart of the Oak)', type: '符文之语武器', category: ['weapon'], key_stats: ['+3 所有技能', '⚡40% FCR', '+30-40 所有抗性', '+10 敏捷'], best_for: '法系职业的通用毕业武器，提供海量的技能、施法速度和抗性。' },
                { name: '谐角之冠 (Shako)', type: '头盔', category: ['helm'], key_stats: ['+2 所有技能', '+大量生命/法力 (按等级提升)', '10% 物理伤害减免', '🍀50% MF'], best_for: '几乎所有非近战物理职业的毕业选择，通用性之王。俗称“军帽”。' },
                { name: '格里芬之眼 (Griffon\'s Eye)', type: '头饰', category: ['helm'], key_stats: ['+1 所有技能', '+10-15% 闪电技能伤害', '-15-20% 敌人闪电抗性', '⚡+25% FCR'], best_for: '所有闪电系玩法的终极毕业头盔，如闪电巫师、标枪亚马逊。' },
                { name: '马拉的万花筒 (Mara\'s Kaleidoscope)', type: '项链', category: ['amulet'], key_stats: ['+2 所有技能', '+20-30 所有抗性', '+5 所有属性'], best_for: '通用性最强的项链之一，同时提供技能、抗性和属性，适合所有职业。' },
                { name: '乔丹之石 (Stone of Jordan)', type: '戒指', category: ['ring'], key_stats: ['+1 所有技能', '增加法力上限 25%', '+20 法力'], best_for: '法系职业的终极戒指，提供宝贵的+1技能和海量法力。俗称“SOJ”。' },
                { name: '蜘蛛之网 (Arachnid Mesh)', type: '腰带', category: ['belt'], key_stats: ['+1 所有技能', '⚡20% FCR', '减速目标 10%'], best_for: '法系统一的毕业腰带，是唯一提供+1技能和FCR的腰带。' },
                { name: '战争旅者 (War Traveler)', type: '鞋子', category: ['boot'], key_stats: ['增加 15-25 伤害', '🍀30-50% MF', '+10 力量/体力'], best_for: '物理系和MF玩法泛用性最广的鞋子，提供直接伤害和高MF值。' },
                { name: '泰坦的复仇 (Titan\'s Revenge)', type: '标枪', category: ['weapon'], key_stats: ['+2 亚马逊技能', '+2 标枪与长矛技能', '自动回复数量', '🏃+30% FRW'], best_for: '标枪亚马逊的专属毕业武器，无形的版本更是价值连城。' },
                { name: '死亡深度 (Death\'s Fathom)', type: '法珠', category: ['weapon'], key_stats: ['+3 巫师技能', '+15-30% 冰冷技能伤害', '+闪电/火焰抗性'], best_for: '纯冰巫师的终极毕业武器，能最大化暴风雪等技能的伤害。' },
                { name: '安达利尔的面容 (Andariel\'s Visage)', type: '头盔', category: ['helm'], key_stats: ['+2 所有技能', '⚔️20% IAS', '8-10% 偷取生命', '+力量'], best_for: '佣兵（尤其是第二幕枪兵）的毕业头盔，提供技能、攻速和吸血，属性完美。' },
                { name: '塔格奥的化身 (Trang-Oul\'s Avatar)', type: '套装', category: ['set'], key_stats: ['集齐后变身吸血鬼', '提供大量抗性、技能、⚡FCR', '手套+腰带+盾牌三件套提供-25%敌人毒素抗性'], best_for: '毒系死灵法师的常见选择，尤其是三件套的减毒抗效果非常关键。' },
            ],
            usefulBases: [
                { 
                    category: "施法者武器 (Caster Weapons)",
                    intro: "辨识单/双手武器是新手的常见困扰。最简单的方法是看物品栏占格：占用1x2格的是单手武器（如手杖Wands），可以配盾；占用1x3或1x4格的是双手武器（如法杖Staves），无法配盾。",
                    items: [
                        { name: '手杖 (Wand)', icon: '🪄', why: '所有手杖均为单手。是制作符文之语“白色”(White)或作为死灵法师过渡武器的底材。', tip: '在商店寻找带有“+3 骨矛”等核心技能的灰色2孔手杖是毕业选择之一。' },
                        { name: '法杖 (Staff)', icon: '⚕️', why: '游戏中最常见的“法杖”多为双手。是前期巫师制作“叶子”(Leaf)的底材。', tip: '辨识技巧：物品栏占 1x3 或 1x4 格为双手。' }
                    ]
                },
                { 
                    category: "通用武器底材 (Weapon Bases)",
                    items: [
                        { name: '水晶剑/阔剑', sockets: '4孔', why: '法系通用的“精神”剑底材。普通牛场掉落的水晶剑，用第五幕拉苏克任务打孔必出4孔。', icon: '🗡️' },
                        { name: '连枷', sockets: '4孔', why: '“橡树之心”(HOTO)的标准底材，力量需求低，攻速快。', icon: '🔨' },
                        { name: '幻化之刃', sockets: '5孔', why: '物理系毕业武器“悔恨”的最佳底材之一，天生无法破坏且攻速极快。', icon: '⚔️' },
                        { name: '巨长斧/神秘之斧/锐利之斧 (仅无形)', sockets: '4孔', why: '佣兵毕业武器“无限”和“眼光”的顶级底材，无形的高基础伤害能极大提升佣兵输出。', icon: '🪓' },
                        { name: '女族长之弓/大院长之弓', sockets: '4孔', why: '弓马毕业武器“信心”的优质底材，自带+3弓与十字弓技能。', icon: '🏹' }
                    ]
                },
                { 
                    category: "盔甲底材 (Armor Bases)",
                    items: [
                        { name: '法师铠甲 (Mage Plate)', sockets: '3孔', why: '力量需求极低(55)，最适合制作“谜团”的轻甲底材之一，不影响移动速度。', icon: '🧥' },
                        { name: '执政官铠甲 (Archon Plate)', sockets: '3孔/4孔', why: '防御最高的轻甲，力量需求也只有103，是制作“谜团”和“刚毅”的毕业底材。', icon: '👕' },
                        { name: '灰暮寿衣 (Dusk Shroud)', sockets: '3孔/4孔', why: '力量需求(77)和防御力介于法师铠甲和执政官铠甲之间，也是制作“谜团”、“刚毅”的优秀选择。', icon: '🎽' }
                    ]
                },
                { 
                    category: "盾牌底材 (Shield Bases)",
                    items: [
                        { name: '统治者大盾 (Monarch)', sockets: '4孔', why: '非圣骑士职业能获得4孔的最高防御盾牌，是制作“精神”盾的唯一选择。俗称“统治盾”。', icon: '🛡️' },
                        { name: '神圣小盾/神圣轻圆盾 (Sacred Targe/Rondache)', sockets: '4孔 (要求高全抗)', why: '圣骑士专属盾，自带高格挡率和最高可达45的全抗，是制作“精神”或“流亡”的极品底材。', icon: '⚜️' }
                    ]
                }
            ],
            mfTargets: [
                { name: '墨菲斯托 (Mephisto)', location: 'A3 - 憎恨囚牢 第三层 (Durance of Hate Lvl 3)', why: '最著名的“劳模”。掉落表极其优秀，涵盖了游戏中绝大部分核心暗金装备。路线短，且可以利用地形卡位无伤击杀。', recommended: '纯冰巫师' },
                { name: '安达利尔 (Andariel)', location: 'A1 - 地下墓穴 第四层 (Catacombs Lvl 4)', why: '掉落大量实用暗金和套装，尤其是戒指和项链。首次击杀有Quest Bug，掉率极高，效率惊人。', recommended: '火法/冰法' },
                { name: '暴躁外皮 (Pindleskin)', location: 'A5 - 哈洛加斯 (Harrogath - Anya\'s Portal)', why: '俗称“皮叔”。路线极短，就在红门旁边。85级场景掉落，能出所有顶级装备，刷宝速度飞快。', recommended: '任何高伤害清场职业' },
                { name: '崔凡克议会 (Travincal Council)', location: 'A3 - 崔凡克 (Travincal)', why: '高级符文和金币的主要来源。怪物固定，密度高，是“打钱”野蛮人的最爱。', recommended: '祝福之锤圣骑士, 打钱野蛮人' },
                { name: '古代通道 (Ancient Tunnels)', location: 'A2 - 失落古城 (Lost City)', why: '85级场景，能掉落游戏中所有物品。场景内怪物没有冰冷免疫，是纯冰巫师的天堂。', recommended: '纯冰巫师, 风德' },
                { name: '女伯爵 (The Countess)', location: 'A1 - 黑色荒地 (Black Marsh) -> 遗忘高塔 第五层 (Forgotten Tower Lvl 5)', why: '前中期符文的主要来源，稳定掉落1-8号符文（地狱难度最高掉落24号）。', recommended: '任何有传送/高跑速的职业' },
                { name: '尼拉塞克 (Nihlathak)', location: 'A5 - 沃特大厅 (Halls of Vaught)', why: '毁灭之钥的唯一来源，同时也是高级符文和顶级装备的掉落点。但其尸爆技能非常危险。', recommended: '纯召死灵法师, 陷阱猎法者' }
            ],
            breakpoints: {
                fcr: {
                    name: "高速施法 (FCR)",
                    amazon: { "施法": [0, 7, 14, 22, 32, 48, 68, 99, 152] },
                    assassin: { "施法": [0, 8, 16, 27, 42, 65, 102, 174] },
                    barbarian: { "施法": [0, 9, 20, 37, 63, 105, 200] },
                    druid: { "人形施法": [0, 4, 10, 19, 30, 46, 68, 99, 163] },
                    necromancer: { "施法": [0, 9, 18, 30, 48, 75, 125] },
                    paladin: { "施法": [0, 9, 18, 30, 48, 75, 125] },
                    sorceress: { "闪电/连锁闪电": [0, 7, 15, 23, 35, 52, 78, 117, 194], "其他技能": [0, 9, 20, 37, 63, 105, 200] }
                },
                fhr: {
                    name: "快速打击恢复 (FHR)",
                    amazon: [0, 6, 13, 20, 32, 52, 86, 174, 600],
                    assassin: [0, 7, 15, 27, 48, 86, 200, 4680],
                    barbarian: [0, 7, 15, 27, 48, 86, 200, 4680],
                    druid_human: [0, 3, 7, 13, 19, 29, 42, 63, 99, 174, 456],
                    druid_wolf: [0, 6, 13, 20, 32, 52, 86, 174, 600],
                    druid_bear: [0, 5, 10, 16, 26, 39, 56, 86, 152, 360],
                    necromancer: [0, 5, 10, 16, 26, 39, 56, 86, 152, 360],
                    paladin: [0, 7, 15, 27, 48, 86, 200, 4680],
                    sorceress: [0, 5, 9, 14, 20, 30, 42, 60, 86, 142, 280]
                },
                fbr: {
                    name: "快速格挡速度 (FBR)",
                    amazon: [0, 6, 13, 20, 32, 52, 86, 174, 600],
                    assassin: [0, 7, 15, 27, 48, 86, 200, 4680],
                    barbarian: [0, 7, 15, 27, 48, 86, 200, 4680],
                    druid: [0, 6, 13, 20, 32, 52, 86, 174, 600],
                    necromancer: [0, 6, 13, 20, 32, 52, 86, 174, 600],
                    paladin: [0, 9, 18, 30, 48, 75, 125],
                    sorceress: [0, 7, 15, 27, 48, 86, 200, 4680]
                }
            },
            mercenaries: [
                 { 
                    category: "第二幕 沙漠佣兵 (Act 2 Desert Mercenary) - 最强伙伴",
                    items: [
                        { name: '噩梦难度 - 进攻型', icon: '⚔️', why: '<strong>光环: 力量 (Might)。</strong> 提供百分比物理伤害加成，是所有物理系职业（如野蛮人、弓马、风德）和召唤系职业（死灵法师）的最强辅助。' },
                        { name: '噩梦难度 - 防御型', icon: '❄️', why: '<strong>光环: 神圣冰冻 (Holy Freeze)。</strong> 大范围减速敌人，极大提升角色安全性，适合所有脆皮职业或开荒阶段。' },
                        { name: '普通/地狱 - 战斗型', icon: '🙏', why: '<strong>光环: 祈祷 (Prayer)。</strong> 配合“眼光”符文之语的冥思光环，可以实现双倍回血效果，续航能力极强。' },
                        { name: '毕业装备推荐', icon: '👑', why: '<strong>武器:</strong> “无限”(破免核心)、“眼光”(回蓝)、“遵从”(高伤)、“死神的丧钟”(破物免)。<strong>盔甲:</strong> “刚毅”(伤害+生存)、“背信”(攻速+减伤)。<strong>头盔:</strong> “安达利尔的面容”(攻速+吸血)、“吉永之脸”(CB打王)。' }
                    ]
                },
                { 
                    category: "其他佣兵",
                    items: [
                        { name: '第一幕 罗格斥候 (Act 1 Rogue Scout)', icon: '🏹', why: '可以使用弓。当装备“信心”符文之语时，她能为玩家提供狂热光环，是物理弓马的毕业选择。' },
                        { name: '第五幕 野蛮人战士 (Act 5 Barbarian Warrior)', icon: '💪', why: '非常强壮的肉盾，可以使用“执法者”符文之语提供庇护所光环（对不死族有效），或双持“瘟疫”提供净化光环。' }
                    ]
                }
            ],
            crafting: [
                 { 
                    name: '橙色合成物品 (Crafted Items)', 
                    intro: '合成物品是游戏后期获取极品装备的重要途径。公式为：特定魔法物品 + 对应的符文 + 对应颜色的完美宝石 + 任意珠宝。物品等级(ilvl)和角色等级(clvl)共同决定了成品属性的上限。',
                    recipes: [
                        { name: '施法者项链 (Caster Amulet)', formula: '魔法项链 + 8#拉尔 + 完美紫水晶 + 珠宝', stats: '固定词缀：(4-10)% 高速施法, (4-10)% 法力回复, +(10-20) 法力。<br><strong>追求目标:</strong> +2 职业技能, (15-20)% 高速施法, 属性, 抗性。' },
                        { name: '血腥手套 (Blood Gloves)', formula: '魔法重手套/鲨鱼皮手套/吸血鬼骸骨手套 + 4#那夫 + 完美红宝石 + 珠宝', stats: '固定词缀：(5-10)% 压碎性打击 (CB), (1-3)% 吸取生命, +(10-20) 生命。<br><strong>追求目标:</strong> +2 标枪/弓箭技能, 20% 提升攻击速度 (IAS), 属性。' },
                        { name: '血腥戒指 (Blood Ring)', formula: '魔法戒指 + 12#索尔 + 完美红宝石 + 珠宝', stats: '固定词缀：(1-3)% 吸取生命, +(10-20) 生命, + (1-5) 力量。<br><strong>追求目标:</strong> 高速施法, 双吸, 属性, 抗性。' }
                    ]
                },
                { 
                    name: '符文升级公式 (Rune Upgrade)', 
                    intro: '在赫拉迪姆方块中，可以将低级符文合成为更高级的符文。请注意，从10号符文开始，合成需要额外的宝石。',
                    recipes: [
                        { name: '基础符文 (1# - 9#)', formula: '3 x 符文 (N)', stats: '<strong>产物:</strong> 1 x 符文 (N+1)<br><strong>示例:</strong> 3 x 3#(特尔) -> 1 x 4#(那夫)' },
                        { name: '10# → 21# (需碎裂/裂开的宝石)', formula: '3 x 符文 (N) + 对应宝石', stats: '<strong>示例:</strong> 3 x 10#(书尔) + 1 碎裂的黄玉 -> 1 x 11#(安姆)' },
                        { name: '21# → 33# (需普通/无瑕疵的宝石)', formula: '2 x 符文 (N) + 对应宝石', stats: '<strong>注意:</strong> 从21号开始，每次合成只需要2个低级符文。<br><strong>示例:</strong> 2 x 21#(普尔) + 1 裂开的钻石 -> 1 x 22#(乌姆)' }
                    ]
                }
            ]
        };