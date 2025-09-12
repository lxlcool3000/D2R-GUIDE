
        const db = {
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

        const classData = {
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

        let currentClass = 'home';
        let chartInstance = null;
        
        const mainContent = document.getElementById('main-content');
        const classNav = document.getElementById('class-nav');
        const runeModal = document.getElementById('runeModal');
        const tipsModal = document.getElementById('tipsModal');
        const gearModal = document.getElementById('gearModal');
        const baseModal = document.getElementById('baseModal');
        const mfBossModal = document.getElementById('mfBossModal');
        const aiModal = document.getElementById('aiModal');
        const bpModal = document.getElementById('bpModal');
        const mercModal = document.getElementById('mercModal');
        const craftingModal = document.getElementById('craftingModal');

        const runeListContainer = document.getElementById('runeListContainer');
        const tipsListContainer = document.getElementById('tipsListContainer');
        const gearListContainer = document.getElementById('gearListContainer');
        const baseListContainer = document.getElementById('baseListContainer');
        const mfBossListContainer = document.getElementById('mfBossListContainer');
        const mercListContainer = document.getElementById('mercListContainer');
        const craftingListContainer = document.getElementById('craftingListContainer');

        const runeSearch = document.getElementById('runeSearch');
        const runeTypeFilter = document.getElementById('runeTypeFilter');
        const runeSocketFilter = document.getElementById('runeSocketFilter');
        const gearSearch = document.getElementById('gearSearch');
        const gearTypeFilter = document.getElementById('gearTypeFilter');

        const aiClassSelect = document.getElementById('aiClassSelect');
        const aiQueryInput = document.getElementById('aiQueryInput');
        const aiResponseContainer = document.getElementById('aiResponseContainer');

        const bpClassSelect = document.getElementById('bpClassSelect');
        const bpTypeSelect = document.getElementById('bpTypeSelect');
        const bpResultContainer = document.getElementById('bpResultContainer');


        function formatRunewordFormula(formula) {
            return formula.split('+').map(num => {
                const rune = db.runes.find(r => r.id == num);
                return rune ? `<span class="whitespace-nowrap">${num}#${rune.zh}</span>` : '';
            }).join(' + ');
        }
        
        function renderRunes() {
            const query = runeSearch.value.toLowerCase();
            const type = runeTypeFilter.value;
            const sockets = runeSocketFilter.value;

            // Filter individual runes
            const filteredRunes = db.runes.filter(rune => {
                return rune.zh.toLowerCase().includes(query) || 
                       rune.en.toLowerCase().includes(query) || 
                       rune.tw.toLowerCase().includes(query) ||
                       rune.id.toString() === query;
            });

            // Filter runewords
            const filteredRunewords = db.runewords.filter(rw => {
                const nameMatch = rw.name.toLowerCase().includes(query);
                const typeMatch = type === 'all' || rw.type.includes(type);
                const socketMatch = sockets === 'all' || rw.sockets == sockets;
                return (query === '' || nameMatch) && typeMatch && socketMatch;
            });
            
            let html = '';

            if(query !== '' && filteredRunes.length > 0) {
                html += '<h4 class="text-amber-500 font-bold text-lg mb-2">符文查询结果</h4>';
                html += '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-6">';
                filteredRunes.forEach(rune => {
                    html += `<div class="bg-stone-800 p-2 rounded text-stone-300"><strong>${rune.id}#</strong> ${rune.zh} / ${rune.tw} (${rune.en})</div>`;
                });
                html += '</div>';
            }


            html += '<h4 class="text-amber-500 font-bold text-lg mb-2">符文之语</h4>';
            html += '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
            filteredRunewords.forEach(rw => {
                html += `
                    <div class="bg-stone-800 p-3 rounded">
                        <p class="font-bold text-amber-400">${rw.name} <span class="text-stone-400 font-normal text-sm">(Lv ${rw.level})</span></p>
                        <p class="text-sm text-stone-400">${rw.base}</p>
                        <p class="text-stone-300 mt-1">${formatRunewordFormula(rw.formula)}</p>
                    </div>
                `;
            });
            html += '</div>';

            if(filteredRunewords.length === 0 && filteredRunes.length === 0) {
                 html = '<p class="text-stone-400 text-center py-4">未找到匹配的结果。</p>';
            }
            runeListContainer.innerHTML = html;
        }

        function renderTips() {
            let html = '';
            db.tips.forEach(tip => {
                html += `
                    <div class="bg-stone-800 p-4 rounded-lg border border-stone-700">
                        <h4 class="font-bold text-lg text-amber-400 mb-2">${tip.title}</h4>
                        <div class="text-stone-300">${tip.content}</div>
                    </div>
                `;
            });
            tipsListContainer.innerHTML = html;
        }

        function renderTopGear() {
            const query = gearSearch.value.toLowerCase();
            const type = gearTypeFilter.value;

            const filteredGear = db.topGear.filter(item => {
                const nameMatch = item.name.toLowerCase().includes(query);
                const typeMatch = type === 'all' || item.category.includes(type);
                return nameMatch && typeMatch;
            });

            let html = '<div class="grid md:grid-cols-2 gap-4">';
            filteredGear.forEach(item => {
                let statsHtml = item.key_stats.map(stat => `<li>${stat}</li>`).join('');
                html += `
                    <div class="bg-stone-800 p-4 rounded-lg border border-stone-700 flex flex-col">
                        <h4 class="font-bold text-lg text-amber-400">${item.name}</h4>
                        <p class="text-sm text-stone-400 mb-2">${item.type}</p>
                        <ul class="list-disc list-inside text-stone-300 space-y-1 flex-grow">${statsHtml}</ul>
                        <p class="mt-3 pt-3 border-t border-stone-600 text-amber-500 text-sm"><strong>适用:</strong> ${item.best_for}</p>
                    </div>
                `;
            });
            html += '</div>';
            if(filteredGear.length === 0) {
                 html = '<p class="text-stone-400 text-center py-4">未找到匹配的装备。</p>';
            }
            gearListContainer.innerHTML = html;
        }
        
        function renderUsefulBases() {
            let html = '';
            db.usefulBases.forEach(category => {
                html += `<div class="bg-stone-800 p-4 rounded-lg border border-stone-700"><h4 class="text-amber-500 font-bold text-lg mb-3">${category.category}</h4>`;
                if(category.intro) {
                     html += `<p class="text-sm text-stone-400 mb-4">${category.intro}</p>`;
                }
                html += '<div class="grid md:grid-cols-2 gap-4">';
                category.items.forEach(item => {
                    html += `
                        <div class="bg-stone-900 p-4 rounded">
                            <p class="font-bold text-amber-400 text-lg">${item.icon} ${item.name}</p>
                            ${item.sockets ? `<p class="text-sm text-stone-400 mb-2"><strong>需求孔数:</strong> ${item.sockets}</p>` : ''}
                            <p class="text-stone-300">${item.why}</p>
                            ${item.tip ? `<p class="text-xs text-amber-400/80 mt-2"><strong>提示:</strong> ${item.tip}</p>` : ''}
                        </div>
                    `;
                });
                html += '</div></div>';
            });
            baseListContainer.innerHTML = html;
        }

        function renderMfBossList() {
             let html = '';
            db.mfTargets.forEach(target => {
                html += `
                    <div class="bg-stone-800 p-4 rounded-lg border border-stone-700">
                        <h4 class="font-bold text-lg text-amber-400 mb-1">${target.name}</h4>
                        <p class="text-sm text-stone-400 mb-2"><strong>位置:</strong> ${target.location}</p>
                        <p class="text-stone-300 mb-2">${target.why}</p>
                        <p class="text-amber-500 text-sm"><strong>推荐职业:</strong> ${target.recommended}</p>
                    </div>
                `;
            });
            mfBossListContainer.innerHTML = html;
        }

        function renderMercenaries() {
            let html = '';
            db.mercenaries.forEach(category => {
                html += `<h4 class="text-amber-500 font-bold text-lg mb-3">${category.category}</h4>`;
                html += '<div class="grid md:grid-cols-2 gap-4 mb-6">';
                category.items.forEach(item => {
                    html += `
                        <div class="bg-stone-800 p-4 rounded-lg border border-stone-700">
                            <p class="font-bold text-amber-400 text-lg">${item.icon} ${item.name}</p>
                            <div class="text-stone-300">${item.why}</div>
                        </div>
                    `;
                });
                html += '</div>';
            });
            mercListContainer.innerHTML = html;
        }

        function renderCrafting() {
            let html = '';
            db.crafting.forEach(category => {
                html += `<div class="mb-6"><h4 class="text-amber-500 font-bold text-lg mb-3">${category.name}</h4>`
                html += `<p class="text-stone-300 mb-4">${category.intro}</p>`;
                category.recipes.forEach(recipe => {
                    html += `
                        <div class="bg-stone-800 p-4 rounded-lg border border-stone-700 mb-4">
                            <h5 class="font-bold text-lg text-amber-400 mb-2">${recipe.name}</h5>
                            <p class="text-stone-300"><strong class="text-amber-500">公式:</strong> ${recipe.formula}</p>
                            <div class="text-stone-300 mt-2">${recipe.stats}</div>
                        </div>
                    `;
                });
                html += `</div>`;
            });
            craftingListContainer.innerHTML = html;
        }

        function populateAIClassSelect() {
            db.classes.forEach(cls => {
                if (cls.id !== 'home') {
                    const option = document.createElement('option');
                    option.value = cls.id;
                    option.textContent = cls.name;
                    aiClassSelect.appendChild(option);
                }
            });
        }
        
        async function getAIAdvice() {
            const selectedClassId = aiClassSelect.value;
            const userQuery = aiQueryInput.value;

            if (!selectedClassId || !userQuery.trim()) {
                aiResponseContainer.innerHTML = '<p class="text-red-400">请选择一个职业并描述你的问题。</p>';
                return;
            }

            aiResponseContainer.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div></div>';
            
            const classInfo = classData[selectedClassId];
            let context = `职业: ${classInfo.title}\n简介: ${classInfo.intro}\n`;
            classInfo.sections.forEach(sec => {
                context += `${sec.title}:\n${sec.content.replace(/<[^>]*>/g, ' ')}\n\n`;
            });
            
            const systemPrompt = `你是一位名为“迪卡·凯恩”的《暗黑破坏神2》专家顾问。你的所有知识都严格基于我提供的攻略文本。请使用中文，用迪卡·凯恩的口吻（“Stay a while and listen...”的风格）来回答玩家的问题。你的回答必须简洁、有条理，并直接引用或总结我提供的攻略内容，为玩家推荐最合适的玩法和装备。`;
            const userPrompt = `这是关于一个职业的攻略资料：\n\n${context}\n\n---
            现在，请根据以上资料，回答这位玩家的问题： "${userQuery}"`;
            
            const response = await fetch('/api/ai-advice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ systemPrompt, userPrompt })
            });

try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: userPrompt }] }],
                        systemInstruction: { parts: [{ text: systemPrompt }] },
                    })
                });

                if (!response.ok) {
                    throw new Error(`API 请求失败，状态码: ${response.status}`);
                }

                const result = await response.json();
                const candidate = result.candidates?.[0];

                if (candidate && candidate.content?.parts?.[0]?.text) {
                    let text = candidate.content.parts[0].text;
                    text = text.replace(/\n/g, '<br>');
                    aiResponseContainer.innerHTML = `<p>${text}</p>`;
                } else {
                    throw new Error("未能从API获取有效回复。");
                }

            } catch (error) {
                console.error("Gemini API Error:", error);
                aiResponseContainer.innerHTML = '<p class="text-red-400">抱歉，赫拉迪姆的智慧暂时无法连接。请稍后再试。</p>';
            }
        }

        function populateBpSelectors() {
            bpClassSelect.innerHTML = '';
            let firstClassId = '';
            db.classes.forEach(cls => {
                if (cls.id !== 'home') {
                    if(!firstClassId) firstClassId = 'necromancer';
                    const option = document.createElement('option');
                    option.value = cls.id;
                    option.textContent = cls.name;
                    bpClassSelect.appendChild(option);
                }
            });
            bpClassSelect.value = firstClassId;

            bpTypeSelect.innerHTML = '';
            Object.keys(db.breakpoints).forEach(key => {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = db.breakpoints[key].name;
                bpTypeSelect.appendChild(option);
            });
            
            bpClassSelect.addEventListener('change', renderBreakpoints);
            bpTypeSelect.addEventListener('change', renderBreakpoints);
        }

        function renderBreakpoints() {
            const classId = bpClassSelect.value;
            const type = bpTypeSelect.value;
            const bpTypeData = db.breakpoints[type];
            let html = '';

            if (!bpTypeData) {
                bpResultContainer.innerHTML = '';
                return;
            }
            
            const classBpData = bpTypeData[classId];

            let dataSets;
            if (classId === 'druid' && type === 'fhr') {
                dataSets = { "人形": bpTypeData.druid_human, "狼人": bpTypeData.druid_wolf, "熊人": bpTypeData.druid_bear };
            } else if (typeof classBpData === 'object' && !Array.isArray(classBpData)) {
                dataSets = classBpData;
            } else if (Array.isArray(classBpData)) {
                dataSets = { [bpTypeData.name]: classBpData };
            } else {
                bpResultContainer.innerHTML = '<p class="text-stone-400 text-center py-4">该职业无此档位数据。</p>';
                return;
            }
            
            html += `<p class="text-sm text-stone-400 mb-4">注意：IAS(提升攻击速度)档位因武器、技能不同而极其复杂，建议使用专门的IAS计算器查询。</p>`;
            
            const frames = {
                fcr: {"施法": [15, 14, 13, 12, 11, 10, 9, 8, 7], "人形施法": [18, 17, 16, 15, 14, 13, 12, 11, 10], "闪电/连锁闪电": [13, 12, 11, 10, 9, 8, 7, 6, 5], "其他技能": [13, 12, 11, 10, 9, 8, 7] },
                fhr: { amazon: [11,10,9,8,7,6,5,4,3], assassin: [13,12,11,10,9,8,7,6], barbarian: [13,12,11,10,9,8,7,6], necromancer: [13,12,11,10,9,8,7,6,5,4], paladin: [9,8,7,6,5,4,3], sorceress: [15,14,13,12,11,10,9,8,7,6,5], "人形": [14,13,12,11,10,9,8,7,6,5], "狼人": [11,10,9,8,7,6,5,4,3], "熊人": [13,12,11,10,9,8,7,6,5] },
                fbr: { paladin: [4,3,2,1], amazon: [5,4,3,2,1], assassin: [7,6,5,4,3,2,1], barbarian: [7,6,5,4,3,2,1], druid: [7,6,5,4,3,2,1], necromancer: [7,6,5,4,3,2,1], sorceress: [9,8,7,6,5,4,3] }
            };

            for (const subType in dataSets) {
                const values = dataSets[subType];
                if (!Array.isArray(values)) continue;
                
                let frameData;
                 if(type === 'fcr') frameData = frames.fcr[subType] || frames.fcr['施法'];
                 else if(type === 'fhr') frameData = frames.fhr[classId] || frames.fhr[subType] || frames.fhr[classId.split('_')[0]];
                 else if(type === 'fbr') frameData = frames.fbr[classId] || frames.fbr.default;

                html += `<h4 class="font-bold text-amber-400 text-lg mb-2">${subType}</h4>`;
                html += `<div class="overflow-x-auto"><table class="w-full text-sm text-left text-stone-300">`;
                html += `<thead class="text-xs text-amber-400 uppercase bg-stone-700"><tr>`;
                
                let headers = ``;
                let cells = ``;
                values.slice(1).forEach((val, i) => {
                    if(frameData && frameData[i]){
                       headers += `<th class="px-6 py-3 text-center">${frameData[i]}F</th>`;
                       cells += `<td class="px-6 py-4 text-center">${val}</td>`;
                    }
                });

                html += `<th class="px-6 py-3">帧数 (Frames)</th>` + headers;
                html += `</tr></thead><tbody><tr class="bg-stone-800 border-b border-stone-600"><td class="px-6 py-4 font-medium">需要 ${bpTypeData.name} (%)</td>` + cells;
                html += `</tr></tbody></table></div>`;
            }

            bpResultContainer.innerHTML = html;
        }


        function toggleRuneModal() {
            if (runeModal.classList.contains('opacity-0')) {
                runeModal.classList.remove('opacity-0', 'pointer-events-none');
                renderRunes();
            } else {
                runeModal.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        function toggleTipsModal() {
            if (tipsModal.classList.contains('opacity-0')) {
                tipsModal.classList.remove('opacity-0', 'pointer-events-none');
                renderTips();
            } else {
                tipsModal.classList.add('opacity-0', 'pointer-events-none');
            }
        }
        
        function toggleGearModal() {
            if (gearModal.classList.contains('opacity-0')) {
                gearModal.classList.remove('opacity-0', 'pointer-events-none');
                renderTopGear();
            } else {
                gearModal.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        function toggleBaseModal() {
            if (baseModal.classList.contains('opacity-0')) {
                baseModal.classList.remove('opacity-0', 'pointer-events-none');
                renderUsefulBases();
            } else {
                baseModal.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        function toggleMfBossModal() {
            if (mfBossModal.classList.contains('opacity-0')) {
                mfBossModal.classList.remove('opacity-0', 'pointer-events-none');
                renderMfBossList();
            } else {
                mfBossModal.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        function toggleAIModal() {
            if (aiModal.classList.contains('opacity-0')) {
                aiModal.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                aiModal.classList.add('opacity-0', 'pointer-events-none');
            }
        }
        
        function toggleBpModal() {
            if (bpModal.classList.contains('opacity-0')) {
                bpModal.classList.remove('opacity-0', 'pointer-events-none');
                bpTypeSelect.value = 'fcr';
                renderBreakpoints();
            } else {
                bpModal.classList.add('opacity-0', 'pointer-events-none');
            }
        }
        
        function toggleMercModal() {
            if (mercModal.classList.contains('opacity-0')) {
                mercModal.classList.remove('opacity-0', 'pointer-events-none');
                renderMercenaries();
            } else {
                mercModal.classList.add('opacity-0', 'pointer-events-none');
            }
        }
        
        function toggleCraftingModal() {
            if (craftingModal.classList.contains('opacity-0')) {
                craftingModal.classList.remove('opacity-0', 'pointer-events-none');
                renderCrafting();
            } else {
                craftingModal.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        runeSearch.addEventListener('input', renderRunes);
        runeTypeFilter.addEventListener('change', renderRunes);
        runeSocketFilter.addEventListener('change', renderRunes);
        gearSearch.addEventListener('input', renderTopGear);
        gearTypeFilter.addEventListener('change', renderTopGear);
        
        function renderContent(classId) {
            const data = classData[classId];
            if (!data) return;

            let contentHtml = `
                <div class="content-section active" id="content-${classId}">
                    <h2 class="text-3xl font-bold text-amber-400 mb-2">${data.title}</h2>
                    <p class="text-stone-300 mb-8 max-w-4xl">${data.intro}</p>
                    ${data.content || ''}
            `;

            if(data.sections) {
                data.sections.forEach(section => {
                    contentHtml += `
                        <div class="mb-8">
                            <h3 class="text-2xl font-semibold text-amber-500 mb-4 pb-2 border-b-2 border-stone-600">${section.title}</h3>
                            <div>${section.content}</div>
                        </div>
                    `;
                });
            }

            contentHtml += `</div>`;
            mainContent.innerHTML = contentHtml;

            if (classId === 'home') {
                renderRadarChart();
            }
        }
        
        function navigate(classId) {
            if (currentClass === classId && classId !== 'home') return;
            currentClass = classId;
            
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.dataset.classId === classId) {
                    item.classList.add('active');
                }
            });

            renderContent(classId);
            window.scrollTo(0, 0);
        }

        function renderNav() {
            let navHtml = '';
            db.classes.forEach(cls => {
                navHtml += `
                    <button class="nav-item flex flex-col items-center p-2 rounded-lg border border-transparent" data-class-id="${cls.id}" data-action="navigate" data-arg="${cls.id}">
                        <span class="text-3xl mb-1">${cls.icon}</span>
                        <span class="font-semibold text-sm text-stone-300">${cls.name}</span>
                    </button>
                `;
            });
            classNav.innerHTML = navHtml;
        }

        function renderRadarChart() {
            const ctx = document.getElementById('classComparisonChart');

            try { if (ctx && !ctx.getAttribute('height')) ctx.setAttribute('height','360'); } catch {}
if (!ctx) return;
            if (chartInstance) {
                chartInstance.destroy();
            }
            const data = {
                labels: ['清场速度', '单体伤害', '生存能力', '团队辅助', '机动性', '开荒友好度', 'Boss击杀能力'],
                datasets: [
                    { label: '死灵法师', data: [9, 6, 9, 9, 3, 9, 7], fill: true, backgroundColor: 'rgba(130, 130, 130, 0.2)', borderColor: 'rgb(200, 200, 200)', pointBackgroundColor: 'rgb(200, 200, 200)'},
                    { label: '圣骑士', data: [10, 9, 8, 9, 4, 8, 10], fill: true, backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgb(54, 162, 235)', pointBackgroundColor: 'rgb(54, 162, 235)'},
                    { label: '巫师', data: [10, 7, 5, 5, 10, 9, 8], fill: true, backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgb(255, 99, 132)', pointBackgroundColor: 'rgb(255, 99, 132)'},
                    { label: '亚马逊', data: [9, 9, 6, 2, 6, 4, 9], fill: true, backgroundColor: 'rgba(255, 205, 86, 0.2)', borderColor: 'rgb(255, 205, 86)', pointBackgroundColor: 'rgb(255, 205, 86)'},
                    { label: '猎法者', data: [8, 7, 7, 4, 7, 7, 9], fill: true, backgroundColor: 'rgba(75, 192, 192, 0.2)', borderColor: 'rgb(75, 192, 192)', pointBackgroundColor: 'rgb(75, 192, 192)'},
                    { label: '野蛮人', data: [6, 8, 8, 8, 5, 2, 6], fill: true, backgroundColor: 'rgba(255, 159, 64, 0.2)', borderColor: 'rgb(255, 159, 64)', pointBackgroundColor: 'rgb(255, 159, 64)'},
                    { label: '德鲁伊', data: [7, 6, 10, 8, 4, 6, 8], fill: true, backgroundColor: 'rgba(153, 102, 255, 0.2)', borderColor: 'rgb(153, 102, 255)', pointBackgroundColor: 'rgb(153, 102, 255)'},
                ]
            };
            chartInstance = new (window.Chart || Chart)(ctx, {
                type: 'radar',
                data: data,
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    elements: { line: { tension: 0.1 } },
                    plugins: {
                        title: { display: true, text: '七大职业综合能力雷达图', color: '#facc15', font: { size: 18 } },
                        legend: { 
                            position: 'bottom', 
                            labels: { color: '#d6d3d1' },
                            onHover: (event) => {
                                event.native.target.style.cursor = 'pointer';
                            },
                            onLeave: (event) => {
                                event.native.target.style.cursor = 'default';
                            }
                        }
                    },
                    scales: {
                        r: {
                            angleLines: { color: 'rgba(168, 162, 158, 0.3)' },
                            grid: { color: 'rgba(168, 162, 158, 0.3)' },
                            pointLabels: { color: '#facc15', font: { size: 14 } },
                            ticks: {
                                backdropColor: '#1a1a1a',
                                color: '#d6d3d1',
                                stepSize: 2
                            },
                            min: 0,
                            max: 10
                        }
                    }
                }
            });
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            renderNav();
            populateAIClassSelect();
            populateBpSelectors();
            navigate('home');
        });

    



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
