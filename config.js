export const GAME_CONFIG = {
    currency: "FAC",
    startMoney: 0,
    saveKey: "FrutigAeroClicker_by_losba", // Key used in saving system. ie: FrutigerClicker_v21_money, FrutigerClicker_v21_power
    OutOfStockText: "НЕНЕ ЧУВАК АЛО НЕТУ"
};

export const upgrades = {
    boost: {
        name: "Booster",
        desc: "idk just booster tester",
        img: "POWERICON.jpg",
        price: 15, power: 2, bonus: 0, count: 0, aps: 0,
        increment: 1.5, limit: Infinity
    },
    proost: {
        name: "prooster",
        desc: "idk just proooster tester",
        img: "BONUSICON.jpg",
        price: 200, power: 1, bonus: 2, count: 0, aps: 0,
        increment: 1.5, limit: Infinity
    },
    auter: {
        name: "AutoCLickaer",
        desc: "idk just booster tester",
        img: "LOSBAVAVTAR.jpg",
        price: 250, power: 0, bonus: 0, count: 0, aps: 1,
        increment: 1.4, limit: Infinity
    },
    Nokia3310: {
        name: "Nokia3310GOLD",
        desc: "ЛИШЬ ОДИН НА ВЕСЬ МИР СКА",
        img: "UpgradesPhotos/NOKIA3310GOLD.png",
        price: 2500, power: 20, bonus: 0, count: 0, aps: 1,
        increment: 1, limit: 1
    },
    mp3player: {
        name: "ПЛЕЕР ЕПТА",
        desc: "свэшг",
        img: "UpgradesPhotos/ipod.jpg",
        price: 150, power: 0, bonus: 0, count: 0, aps: 0,
        increment: 1, limit: 1
    },
    WBuster: {
        name: "W Buster❤️‍🩹",
        desc: "Все будет W",
        img: "UpgradesPhotos/WBOOSTER.jpg",
        price: 1500, power: 2, bonus: 1.5, count: 0, aps: 0,
        increment: 1, limit: 1
    },
    X360: {
        name: "Xbox360",
        desc: "Не знаю, зачем тебе это, но окей, ООО ЕЕ ЛЕГЕНДАРНАЯ ПРИСТАВКА",
        img: "UpgradesPhotos/xbox360.jpg",
        price: 13500, power: 0, bonus: 0.1, count: 0, aps: 0,
        increment: 1, limit: Infinity
    },
    PS3: {
        name: "ГРИЛЬ ЭPS3Э",
        desc: "PS3 LBP MINECRAFT ROBLOX EEEEYEYEYEYEYEEE. ГРЕЕТС БУКЕ СТОП ТАК ТЫ ПОКУПАЕШЬ РАДИ ТОГО, ЧТОБЫ НА НЕЙ ГОТОВИТЬ?",
        img: "UpgradesPhotos/ps3.jpg",
        price: 19900, power: 0, bonus: 0.1, count: 0, aps: 0,
        increment: 1, limit: Infinity
    },
    NW: {
        name: "Nintendo W❤️‍🩹",
        desc: "W Nintendo❤️‍🩹",
        img: "UpgradesPhotos/wii-icon.png",
        price: 9900, power: 0, bonus: 0.1, count: 0, aps: 0,
        increment: 1, limit: Infinity
    },
    PS2: {
        name: "PS2",
        desc: "ТО, О ЧЕМ ТЫ МЕЧТАЛ В ДЕТСТВЕ?",
        img: "UpgradesPhotos/ps2.webp",
        price: 7500, power: 0, bonus: 0.1, count: 0, aps: 0,
        increment: 1, limit: Infinity
    },
    PSP: {
        name: "ЗЫЗ",
        desc: "ЗЫЗ, ЧЕРТОВАЯ ЗЫЗ ЕАХАХХАЗЕ ЗХЕЗАХАЗАХАХАХАХ ЕЕЕЕ",
        img: "UpgradesPhotos/psp.webp",
        price: 7500, power: 0, bonus: 0.1, count: 0, aps: 0,
        increment: 1, limit: Infinity
    },
    NDS: {
        name: "Nintendo бесполезно 'ДуалСкрин Двойной Экран7'",
        desc: "ЧЕРТ ВОЗЬМИ УРА МАРИО ЕЕЕ УРАА АРАРАРУРУРАУРАУРА",
        img: "UpgradesPhotos/nds.png",
        price: 5550, power: 0, bonus: 0.1, count: 0, aps: 0,
        increment: 1, limit: Infinity
    },
};

export const achvs = {
    SborMusora: { img: "AchievementsIcons/hot.webp", name: "Первые баблишки", desc: "Ееееееееееееее", goal: 1, type: 'money', itemId: 'X360' , done: false },
    Nokiaer: { img: "UpgradesPhotos/NOKIA3310GOLD.png", name: "Золотая нокия!!!", desc: "ЧУВАК ДА ТЫ САМЫЙ БОГАТЫЙ В ЭТОМ МИРЕ!", goal: 1, type: 'item',itemId: 'Nokia3310' , done: false },
    XboxCollector: { img: "UpgradesPhotos/xbox360.jpg", name: "КОРОБКА ИКС 360!", desc: "Ееееееееееееее", goal: 1, type: 'item',itemId: 'X360' , done: false },
    PS3Collector: { img: "UpgradesPhotos/ps3.jpg", name: "УРА ПС3 ПЛЕЙТСЕШЕЙН!!!!", desc: "Ееееееееееееее", goal: 1, type: 'item',itemId: 'PS3' , done: false },
    ManyXbox: { img: "UpgradesPhotos/xbox360.jpg", name: "ББбброо?...", desc: "ну я конечно не гений но зач тебе стоко", goal: 50, type: 'item',itemId: 'X360' , done: false },
    ManyPS3: { img: "UpgradesPhotos/ps3.jpg", name: "УРА ПС3 ПЛЕЙТСЕШЕЙН!!!! МНОГА ПЛЕЙСТЕЙШН!!!!", desc: "МНОГО ПЛЕЙСТЕШН НЕ БЫВАЕТ!!!!", goal: 1, type: 'item',itemId: 'PS3' , done: false },
};