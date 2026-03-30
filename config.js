export const GAME_CONFIG = {
    currency: "FAC",
    startMoney: 0,
    IncomeMultiplier: 1, // for custom events and stuff, after buff is done, it will revert to 1, so modifying it works only really early ga,e
    saveKey: "FrutigAeroClicker_by_losba", // Key used in saving system. ie: FrutigerClicker_v21_money, FrutigerClicker_v21_power
    OutOfStockText: "НЕНЕ ЧУВАК АЛО НЕТУ"
};

export const upgrades = {
    boost: {
        name: "Booster",
        desc: "idk just booster tester",
        img: "POWERICON.jpg",
        price: 15, power: 2, bonus: 0, count: 0, aps: 0,
        type: 'strengther', rarity: 'common', category: 'base',
        increment: 1.5, limit: Infinity, requires: null
    },
    proost: {
        name: "prooster",
        desc: "idk just proooster tester",
        img: "BONUSICON.jpg",
        price: 200, power: 1, bonus: 2, count: 0, aps: 0,
        type: 'strengther', rarity: 'common', category: 'base',
        increment: 1.5, limit: Infinity, requires: null
    },
    auter: {
        name: "AutoCLickaer",
        desc: "idk just booster tester",
        img: "LOSBAVAVTAR.jpg",
        price: 300, power: 0, bonus: 0, count: 0, aps: 1,
        type: 'strengther', rarity: 'common', category: 'base',
        increment: 1.4, limit: Infinity, requires: null
    },
    Nokia3310: {
        name: "Nokia3310GOLD",
        desc: "ЛИШЬ ОДИН НА ВЕСЬ МИР СКА",
        img: "UpgradesPhotos/NOKIA3310GOLD.png",
        price: 3000, power: 8, bonus: 4, count: 0, aps: 1,
        type: 'item', rarity: 'legendary', category: 'base',
        increment: 1, limit: 1, requires: null
    },
    mp3player: {
        name: "ПЛЕЕР ЕПТА",
        desc: "свэшг",
        img: "UpgradesPhotos/ipod.jpg",
        price: 500, power: 0, bonus: 0, count: 0, aps: 0,
        type: 'item', rarity: 'legendary', category: 'base',
        increment: 1, limit: 1, requires: null
    },
    WBuster: {
        name: "W Buster❤️‍🩹",
        desc: "Все будет W",
        img: "UpgradesPhotos/WBOOSTER.jpg",
        price: 1800, power: 3, bonus: 2, count: 0, aps: 0,
        type: 'item', rarity: 'legendary', category: 'base',
        increment: 1, limit: 1, requires: null
    },
    X360: {
        name: "Xbox360",
        desc: "Не знаю, зачем тебе это, но окей, ООО ЕЕ ЛЕГЕНДАРНАЯ ПРИСТАВКА",
        img: "UpgradesPhotos/xbox360.jpg",
        price: 12000, power: 0, bonus: 0.2, count: 0, aps: 0,
        type: 'item', rarity: 'common', category: 'base',
        increment: 1, limit: 55, requires: null
    },
    PS3: {
        name: "ГРИЛЬ ЭPS3Э",
        desc: "PS3 LBP MINECRAFT ROBLOX EEEEYEYEYEYEYEEE. ГРЕЕТС БУКЕ СТОП ТАК ТЫ ПОКУПАЕШЬ РАДИ ТОГО, ЧТОБЫ НА НЕЙ ГОТОВИТЬ?",
        img: "UpgradesPhotos/ps3.jpg",
        price: 16000, power: 0, bonus: 0.3, count: 0, aps: 0,
        type: 'item', rarity: 'common', category: 'base',
        increment: 1, limit: 55, requires: null
    },
    NW: {
        name: "Nintendo W❤️‍🩹",
        desc: "W Nintendo❤️‍🩹",
        img: "UpgradesPhotos/wii-icon.png",
        price: 10000, power: 0, bonus: 0.2, count: 0, aps: 0,
        type: 'item', rarity: 'common', category: 'base',
        increment: 1, limit: 55, requires: null
    },
    PS2: {
        name: "PS2",
        desc: "ТО, О ЧЕМ ТЫ МЕЧТАЛ В ДЕТСТВЕ?",
        img: "UpgradesPhotos/ps2.webp",
        price: 7000, power: 0, bonus: 0.2, count: 0, aps: 0,
        type: 'item', rarity: 'common', category: 'base',
        increment: 1, limit: 55, requires: null
    },
    PSP: {
        name: "ЗЫЗ",
        desc: "ЗЫЗ, ЧЕРТОВАЯ ЗЫЗ ЕАХАХХАЗЕ ЗХЕЗАХАЗАХАХАХАХ ЕЕЕЕ",
        img: "UpgradesPhotos/psp.webp",
        price: 7000, power: 0, bonus: 0.2, count: 0, aps: 0,
        type: 'item', rarity: 'common', category: 'base',
        increment: 1, limit: 555, requires: null
    },
    NDS: {
        name: "Nintendo бесполезно 'ДуалСкрин Двойной Экран7'",
        desc: "ЧЕРТ ВОЗЬМИ УРА МАРИО ЕЕЕ УРАА АРАРАРУРУРАУРАУРА",
        img: "UpgradesPhotos/nds.png",
        price: 5000, power: 0, bonus: 0.2, count: 0, aps: 0,
        type: 'item', rarity: 'common', category: 'base',
        increment: 1, limit: 555, requires: null
    },
    WVL: {
        name: "Windows Vista лицензия",
        desc: "Ты счастливый обладщатель я не помню какое там слово!",
        img: "https://windows-office.ru/upload/iblock/248/2482e2dd06fa6a320e1436ea52fff1c6.jpg",
        price: 5000, power: 0, bonus: 0.2, count: 0, aps: 0,
        type: 'item', rarity: 'common', category: 'software',
        increment: 1, limit: Infinity, requires: null
    },
    W7L: {
        name: "Windows 7 лицензия",
        desc: "НОВАЯ СИСТЕМА WINDOWS 7 НА ВАШЕ УСТРОЙСТВО!",
        img: "https://i.yavitrina.ru/get-marketpic/169660/market_sSKgDLUe24rhFVE2OU-yeQ/200x200",
        price: 5500, power: 0, bonus: 0.2, count: 0, aps: 0,
        type: 'item', rarity: 'common', category: 'software',
        increment: 1, limit: Infinity, requires: null
    },
    IPHONE22: {
        name: "Iphone20",
        desc: "Это не стоит своих денег. Ты потереяшьн деньги.",
        img: "https://avatars.mds.yandex.net/i?id=2a0000019d25a0e0ae5190a0128be19d71ef-1605841-fast-images&n=13",
        price: 50000000, power: 0, bonus: 0.01, count: 0, aps: 0,
        type: 'item', rarity: 'common', category: 'base',
        increment: 1, limit: 2, requires: null
    },
    GOYITEM: {
        name: "Крутка в геншин испмпакат!!!!",
        desc: "Это не стоит своих денег. Ты потереяшьн деньги.",
        img: "https://upload-os-bbs.hoyolab.com/upload/2023/05/24/177771183/1d4eca62672defdb978d8862eb04aaf6_701158364565349487.jpg",
        price: 30000000, power: 0, bonus: 0.01, count: 0, aps: 0,
        type: 'item', rarity: 'common', category: 'base',
        increment: 1, limit: 15, requires: null
    },

    // W959 phone
    W595: {
        name: "Sony Ericsson W595",
        desc: `Оранжевый глянец и логотип, похожий на каплю ртути. 
        Главная фишка — функция Shake Control': тряси телефон, чтобы пер
        еключить трек (и случайно вывихнуть запястье). Если не купишь зарядку,
        он даже не пискнет своим фирменным рингтоном. Внимание: зарядка работает,
        только если придавить её сверху тяжёлым учебником`,
        img: "https://mobilmarket.ru/f/article/w595_w595-all.jpg",
        price: 10000, power: 0, bonus: 0.2, count: 0, aps: 0,
        type: 'item', rarity: 'common', category: 'base',
        increment: 1, limit: 1, requires: null
    },
    FastPort: {
        name: "FastPort - зарядка для твоего W959",
        desc: `Как ты включишь телефон без зарядки?`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/SonyEricsson_FastPort_plug_on_charger.JPG/500px-SonyEricsson_FastPort_plug_on_charger.JPG",
        price: 18000, power: 8, bonus: 1, count: 0, aps: 8,
        type: 'item', rarity: 'common', category: 'key',
        increment: 1, limit: 1, requires: 'W595'
    },
    // W959 phone

    // N7380 phone
    N7380: {
        name: "Nokia 7380",
        desc: `Этот телефон выглядит просто безумно круто`,
        img: "https://content.onliner.by/news/tech/2005/12/010574.jpg",
        price: 10000, power: 0, bonus: 0.2, count: 0, aps: 0,
        type: 'item', rarity: 'common', category: 'base',
        increment: 1, limit: 1, requires: null
    },
    N7380zar: {
        name: "Nokia AC-3E",
        desc: `Как ты включишь телефон без зарядки?`,
        img: "https://ir.ozone.ru/s3/multimedia-1-z/c1000/6995897603.jpg",
        price: 16000, power: 8, bonus: 1, count: 0, aps: 12,
        type: 'item', rarity: 'common', category: 'key',
        increment: 1, limit: 1, requires: 'N7380'
    },
    // N7380 phone

    // GAMES FOR PS3
    LBP: {
        name: "LBP + MINECRAFT BUNDLE",
        desc: "УРА ХИТОВЫЕ   иИГРЫ!",
        img: "https://avatars.mds.yandex.net/i?id=5732ff7b2e5b0d3442e2b63e944049f2_l-5042077-images-thumbs&n=13",
        price: 2000, power: 0, bonus: 0.3, count: 0, aps: 0,
        type: 'item', rarity: 'common', category: 'disc',
        increment: 1, limit: 15, requires: 'PS3'
    },

    ////psps
    SD32: {
        name: "Карта памяти Stick Duo 32MB",
        desc: `Влезет целых две песни в 128kbps и один сейв Роскошь`,
        img: "https://i.ebayimg.com/images/g/iF0AAOSwGFtnyhGo/s-l1600.jpg",
        price: 15000, power: 3, bonus: 1, count: 0, aps: 3,
        type: 'item', rarity: 'common', category: 'key',
        increment: 1.05, limit: 500, requires: 'PSP'
    },
    GOCAM: {
        name: "Внешняя камера GoCam!",
        desc: `0.5 Мегапикселей!!! настоящий топ`,
        img: "https://brutalitygame.ru/upload/iblock/db0/_3.jpg",
        price: 25000, power: 3, bonus: 1, count: 0, aps: 3,
        type: 'item', rarity: 'common', category: 'key',
        increment: 1, limit: 500, requires: 'PSP'
    },
    PSPWHITEHEADPHONES: {
        name: "Белые наушники для PSP!",
        desc: `Провода путаются даже в коде, но зато ты выглядишь как чел из рекламы Apple (почти).`,
        img: "https://img.joomcdn.net/0ffeba958ac437c7f2bd4aece794a116322cc6a4_original.jpeg",
        price: 60000, power: 12, bonus: 4, count: 0, aps: 6,
        type: 'item', rarity: 'common', category: 'key',
        increment: 1.05, limit: 500, requires: 'PSP'
    },
    PSPGPS: {
        name: "GPS-приемник PSP-290",
        desc: `Ищет дорогу к нормальной жизни. Пока нашел только ближайший ларек с дисками.`,
        img: "https://avatars.mds.yandex.net/i?id=e57a4af1e88b4007fa5d2354fe3443ff965d804f-12146892-images-thumbs&n=13",
        price: 120000, power: 15, bonus: 6, count: 0, aps: 8,
        type: 'item', rarity: 'common', category: 'key',
        increment: 1, limit: 500, requires: 'PSP'
    },
    PSPTUL: {
        name: "Тюльпаны для псп епта",
        desc: `Ееееееее тюльпаны теперь могу смотреть год оф вор или фильм человек паук два на своем телеке!!! счспсс счлетеее еееееееебооой`,
        img: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-10/501/636/711/010/111/600022032099b0.jpg",
        price: 300000, power: 40, bonus: 15, count: 0, aps: 20,
        type: 'item', rarity: 'epic', category: 'key',
        increment: 1, limit: 501, requires: 'PSP',
        effect: "Раз в 60 секунд добавляет +50 кликов автоматически"
    },
    PSPCHP2: {
        name: "UMD-диск с фильмом «Человек-паук 2»",
        desc: `Смотреть кино на экране 480x272 — это путь - настоящего идиота бро. Ладно, шутка истинного самурая ахахах ха0хах-аха`,
        img: "https://meshok.net/i/289409220.0.208x208.jpg",
        price: 12000, power: 6, bonus: 3, count: 0, aps: 4,
        type: 'item', rarity: 'common', category: 'disc',
        increment: 1, limit: 500, requires: 'PSP'
    },
    //psps
    NDSRP: {
        name: "Nintendo DS Rumble Pak",
        desc: ` Картридж-вибратор, который вставляется в слот для GBA и просто жужжит в руках во время игры.`,
        img: "https://nextgame.net/upload/dev2fun.imagecompress/webp/iblock/03b/aksessuary-ustroystvo-rumble-pak-dlya-ds-lite-dsl-for-nintendo-ds.webp",
        price: 80000, power: 10, bonus: 12, count: 0, aps: 2,
        type: 'item', rarity: 'rare', category: 'key',
        increment: 1, limit: 250, requires: 'NDS'
    },

    // wiii
    WIM: {
        name: "WiiMote",
        desc: `Wiii remootee`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wiimote-Safety-First.jpg/250px-Wiimote-Safety-First.jpg",
        price: 80000, power: 10, bonus: 12, count: 0, aps: 2,
        type: 'item', rarity: 'rare', category: 'key',
        increment: 1.1, limit: 250, requires: 'NW'
    },


    h4: {
        name: "Halo 4",
        desc: `Аахахахахаха`,
        img: "https://avatars.mds.yandex.net/get-marketpic/1598151/pic9707cd16370f2a970f78788ea2d0d0a0/orig",
        price: 3500, power: 10, bonus: 12, count: 0, aps: 2,
        type: 'item', rarity: 'rare', category: 'disc',
        increment: 2, limit: 250, requires: 'X360'
    },
    h3: {
        name: "Halo 3",
        desc: `не пон откуда оно тут`,
        img: "https://avatars.mds.yandex.net/i?id=8d311cbd3c7203ef223325401e649f3e_l-4961046-images-thumbs&n=13",
        price: 3500, power: 100, bonus: 120, count: 0, aps: 20,
        type: 'item', rarity: 'rare', category: 'disc',
        increment: 3, limit: 250, requires: 'h4'
    },

    lp: {
        name: "LBP PSP",
        desc: `крутая игра!!!`,
        img: "https://i.ebayimg.com/images/g/iUMAAOSwvtlne07Y/s-l1600.jpg",
        price: 1500, power: 100, bonus: 120, count: 0, aps: 20,
        type: 'item', rarity: 'rare', category: 'disc',
        increment: 1.2, limit: 250, requires: 'PSP'
    },

    CHEAT: {
        name: "Unexpected catch ()e e",
        desc: `shdfshfd
VM1011:1 Uncaught ReferenceError: shdfshfd is not defined
    at <anonymous>:1:1
(anonymous) @ VM1011:1
h gkgsl; function fgasd
VM1053:1 Uncaught SyntaxError: Unexpected identifier 'gkgsl'
gsad
VM1057:1 Uncaught ReferenceError: gsad is not defined
    at <anonymous>:1:1
(anonymous) @ VM1057:1
g
VM1063:1 Uncaught ReferenceError: g is not defined
    at <anonymous>:1:1
(anonymous) @ VM1063:1
function expteted(){
    readlallla kjfjsd;lafs'dgflds;f gj' slkjiu@()@)_(@_;;; <<,d,af,f.dsfa
}
VM1166:2 Uncaught SyntaxError: Unexpected identifier 'kjfjsd'
dfggsdfgsdgdsfdfs
VM1192:1 Uncaught ReferenceError: dfggsdfgsdgdsfdfs is not defined
    at <anonymous>:1:1`,
        img: "https://i.ebayimg.com/images/g/iUMAAOSwvtlne07Y/s-l1600.jpg",
        price: 1500, power: 300, bonus: 4320, count: 0, aps: 5120,
        type: 'item', rarity: 'rare', category: 'disc',
        increment: 5, limit: 20, requires: 'lp'
    },


};

export const achvs = {
    SborMusora: { img: "AchievementsIcons/hot.webp", name: "Первые баблишки", desc: "Ееееееееееееее", goal: 1, type: 'money', itemId: 'X360', done: false },
    mpowner: { img: "UpgradesPhotos/ipod.jpg", name: "Да будет музло!!!11!1!!!!", desc: "СЮДААААА  УМЕНЯ ЕСТЬ МП3П ЛЕЕРП!!!!", goal: 1, type: 'item', itemId: 'mp3player', done: false },
    Buster: { img: "UpgradesPhotos/WBOOSTER.jpg", name: "Я сегодня залил полный бак в свою малышку...", desc: "ПОЛНЫЙ БАК Я ЗАПРАВИЛ СВОЮ ТАЧКУ ПОЛНЫЙ БАК ЕП ЕП", goal: 1, type: 'item', itemId: 'WBuster', done: false },
    Nokiaer: { img: "UpgradesPhotos/NOKIA3310GOLD.png", name: "Золотая нокия!!!", desc: "ЧУВАК ДА ТЫ САМЫЙ БОГАТЫЙ В ЭТОМ МИРЕ!", goal: 1, type: 'item', itemId: 'Nokia3310', done: false },
    WinVista: { img: "https://windows-office.ru/upload/iblock/248/2482e2dd06fa6a320e1436ea52fff1c6.jpg", name: "ВИНДА ВИСТА!!!!!", desc: "УРА ТЕПЕРЬ МОЙ КОМПЬЮТЕР ПОДТВЕРЖДЕН", goal: 1, type: 'item', itemId: 'WVL', done: false },
    Win7: { img: "https://i.yavitrina.ru/get-marketpic/169660/market_sSKgDLUe24rhFVE2OU-yeQ/200x200", name: "ВИНДА 7!!!!!", desc: "УРА ТЕПЕРЬ МОЙ КОМПЬЮТЕР ПОДТВЕРЖДЕН", goal: 1, type: 'item', itemId: 'W7L', done: false },
    XboxCollector: { img: "UpgradesPhotos/xbox360.jpg", name: "КОРОБКА ИКС 360!", desc: "Ееееееееееееее", goal: 1, type: 'item', itemId: 'X360', done: false },
    H4TROLL: { img: "https://www.shutterstock.com/ru/image-vector/emoticon-laughing-wiping-tears-away-while-564985714", name: "Ахахахахах че нет нормальных игр да", desc: "ащзщпвахызвапзщшав ну вот твои 434 индастриес авапзхщахрзпвщхр", goal: 1, type: 'item', itemId: 'h4', done: false },
    H3TROLL: { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3ruIbwIyJpYa21gSLkHJUlRZkNU1b3DM_g&s", name: "Не понял откуда это", desc: "С;КА!!!!!!!", goal: 1, type: 'item', itemId: 'h3', done: false },
    H3TROLL2: { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEor-QH638PovkgOyGaSGjK-4-zNzH2_VyYA&s", name: "па ПАПАПАЦАН ОСТАНОВИСЬ АЛО", desc: "ЭТОГО НЕ ДОЛЖНО БЫТЬ!!!", goal: 15, type: 'item', itemId: 'h3', done: false },
    BUGACH: { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEor-QH638PovkgOyGaSGjK-4-zNzH2_VyYA&s", name: "Если вы видете эту ачивку", desc: "То это баг", goal: 20, type: 'item', itemId: 'CHEAT', done: false },

    PS3Collector: { img: "UpgradesPhotos/ps3.jpg", name: "УРА ПС3 ПЛЕЙТСЕШЕЙН!!!!", desc: "Ееееееееееееее", goal: 1, type: 'item', itemId: 'PS3', done: false },
    ManyXbox: { img: "UpgradesPhotos/xbox360.jpg", name: "ББбброо?...", desc: "ну я конечно не гений но зач тебе стоко", goal: 50, type: 'item', itemId: 'X360', done: false },
    ManyPS3: { img: "UpgradesPhotos/ps3.jpg", name: "УРА ПС3 ПЛЕЙТСЕШЕЙН!!!! МНОГА ПЛЕЙСТЕЙШН!!!!", desc: "МНОГО ПЛЕЙСТЕШН НЕ БЫВАЕТ!!!!", goal: 50, type: 'item', itemId: 'PS3', done: false },
    IphoneOwner: { img: "https://i.pinimg.com/736x/99/98/f5/9998f53849e0ed80e0aaff6f13dfee99.jpg", name: "Я ЖЕ ГОВОРИЛ, ЧТО ЭТО ТОГО НЕ СТОИТ!", desc: "Теперь ты бомж", goal: 1, type: 'item', itemId: 'IPHONE22', done: false },
    ManyPSPCards: { img: "https://i.ebayimg.com/images/g/iF0AAOSwGFtnyhGo/s-l1600.jpg", name: "Памяти много не бывает!", desc: "оСОСОСОБЕННОНОНО НА ПСП!!", goal: 10, type: 'item', itemId: 'SD32', done: false },
    ManyPSPheds: { img: "https://img.joomcdn.net/0ffeba958ac437c7f2bd4aece794a116322cc6a4_original.jpeg", name: "Э-э-э-эээ, наушников полагаю тоже", desc: "оСОСОСОБЕННОНОНО НА ПСП!! Оооокей бро!", goal: 10, type: 'item', itemId: 'PSPWHITEHEADPHONES', done: false },
    ManyPSPFilms: { img: "https://meshok.net/i/289409220.0.208x208.jpg", name: "Для всех друзей!", desc: "Ееееебооойй", goal: 15, type: 'item', itemId: 'PSPCHP2', done: false },
    ManyPSPTulpans: { img: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-10/501/636/711/010/111/600022032099b0.jpg", name: "Много тюльпанов не бываеттеет!", desc: "Оссобеннноо для псп! А еще вообще сломаться могут! Кстати, вроде я писал точно такое же описание я уже сплю, 1:28, 30.03.2026. Магадан", goal: 15, type: 'item', itemId: 'PSPTUL', done: false },
    ManyNDSPaks: { img: "https://nextgame.net/upload/dev2fun.imagecompress/webp/iblock/03b/aksessuary-ustroystvo-rumble-pak-dlya-ds-lite-dsl-for-nintendo-ds.webp", name: "Я просто не понимаю, зачем тебе столько", desc: "поэтому я нах убрал его из стока", goal: 250, type: 'item', itemId: 'NDSRP', done: false },



    TooManyPSPCards: { img: "https://i.ebayimg.com/images/g/iF0AAOSwGFtnyhGo/s-l1600.jpg", name: "Памяти много не бывает!.. Бро", desc: "Бро, я понтмаю что вечно не хватает, но блин, ты все люто выкупил!!!", goal: 500, type: 'item', itemId: 'SD32', done: false },
    TooManyPSPheds: { img: "https://img.joomcdn.net/0ffeba958ac437c7f2bd4aece794a116322cc6a4_original.jpeg", name: "А наушников то тебе 500 нафига😭", desc: "оСОСОСОБЕННОНОНО НА ПСП!! Оооокей бро! а А ЗАЧЕМ ТЕБЕ СТОЛЬКО БЛ ОТВЕТЬ МНЕ НАПИШИ!!!!", goal: 500, type: 'item', itemId: 'PSPWHITEHEADPHONES', done: false },
    TooManyPSPFilms: { img: "https://meshok.net/i/289409220.0.208x208.jpg", name: "ЭТОТ ФИЛЬМ ПРОСТО ИМБА!!!", desc: "И Я РЕШИЛ ЕГО ПОЛНОСТЬЮ СКУПИТЬ ЧЕРТ ВОЗЬМИ!!!", goal: 500, type: 'item', itemId: 'PSPCHP2', done: false },
    TooManyPSPTulpans: { img: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-10/501/636/711/010/111/600022032099b0.jpg", name: "МНОГО ТЮЛЬПАНОВ ВООБЩЕ НЕ БЫВАЕТ БЛ!", desc: "БЕСКОНЕЧНРСИТЬ НЕ ПРЕДЕЛ!!!!!!!!", goal: 500, type: 'item', itemId: 'PSPTUL', done: false },
    TooManyPSPTulpans: { img: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-10/501/636/711/010/111/600022032099b0.jpg", name: "...Или предел...", desc: "Ха-Ха! Разработчик просто гений🤣😅😭😎🤣✅🥂🍻💀💀💪🕊️❤️‍🩹🤣😎😎🤣😅😅😭 МЕГА УЛЬТРА КРУТОЙ ТРОЛЛЬ АХАХАХАХАХ", goal: 501, type: 'item', itemId: 'PSPTUL', done: false },

    Allitems_93: { img: "https://media.istockphoto.com/id/1200604891/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%BE%D0%BC%D0%B5%D1%80-93-3d.jpg?s=170x170&k=20&c=m7aGEweZ2R8sf7Ek7E3KjJW3DJ6ZNm7Y3jEp30m00kI=", name: "93!", desc: "93 ПРЕДМЕТА ЕСТЬ!", goal: 93, type: 'totalItems', itemId: 'ПРЕДМЕТА ЗАРАБОТАНО ЛЕТС ГОООООУ КРАСАВА', done: false },
    Allitems_100: { img: "https://color-time.ru/thumb/2/AutsnaJRFwRMpgMuAHYkZQ/180r160/d/igrushka_antistress_smayl-magnatmini_1.jpg", name: "Реальный магнат!", desc: "СОТОЧКА!", goal: 100, type: 'totalItems', itemId: 'ВСЕГО ВЕЩЕЙ!!', done: false },
    Allitems_936: { img: "https://avatars.mds.yandex.net/i?id=990188a08b99800e7cf24773ccdc2850_l-10118230-images-thumbs&n=13", name: "ПОЛНАЯ МОРТАЛЬНОСТЬ.", desc: "ЭТО ПРОСТО БЕЗУМИЕ!!", goal: 936, type: 'totalItems', itemId: 'ВСЕГО ВЕЩЕЙ!!', done: false },
};