import { upgrades, achvs, GAME_CONFIG } from './config.js';
import { activateBuff, activeBuffs, updateIncome, buffs } from './buffs.js'

let savedUpgrades = localStorage.getItem(`${GAME_CONFIG.saveKey}_upgrades`);
const counter = document.getElementById("count")
const clickbutton = document.getElementById("ClickButton")
const stats = document.getElementById("Stats")
const shop_container = document.getElementById("shop-cont")
const coll_conatiner = document.getElementById("coll-cont")
const buff_cont = document.getElementById("BuffDiv")
const CategoryNames = {
    'all': 'Весь хлам',
    'base': 'Основные вещички',
    'key': 'Зарядки и Ключи',
    'item': 'Гаджеты',
    'disc': 'Диски',
    'strengther': 'Бустеры',
    'software': 'Софт',
    'sale': '🔥 АКЦИИ (ГОРБУШКА) 🔥'
};




// АУДИО ЖВЖА ДВИЖОКЧЕК
const sounds = {
    ach: new Audio('https://archive.org/download/win95sounds/tada.mp3'),
    buy: new Audio('https://github.com/losba78rf2/MYFUNNYWEBSITE/raw/refs/heads/main/roblox-cash-register.mp3'),
    click: new Audio(''),
    error: new Audio('https://archive.org/download/windows98microsoftplus-sounds/w98sounds/CHORD.mp3'),
    shimmer: new Audio('https://dn711100.ca.archive.org/0/items/Boot_Sounds_Compilation/Windows%2098%20-%20Boot.mp3'),
    longhorn: new Audio('https://dn710201.ca.archive.org/0/items/Microsoft_Windows-Longhorn-Reloaded-System-Sounds/Windows-Longhorn-Reloaded-sound-effects/longhorn_reloaded_%5Bwinsounds.com%5D_767/LHR%20Logon.mp3'),
    vista: new Audio('https://archive.org/download/Boot_Sounds_Compilation/Windows%20Vista%20-%20Boot.mp3'),
    rington: new Audio('sounds/c55_asia.mp3'),
    bak: new Audio('music/buster.mp3')

}

function playsound(SName) { //SoundName
    if (sounds[SName]) {
        sounds[SName].volume = 0.5
        sounds[SName].currentTime = 0
        sounds[SName].play().catch(e => console.log("Браузер заблокировал звук до первого клика " + e));
    }
}
// АУДИО ЖВЖА ДВИЖОКЧЕК
function checkAchievements() {
    for (let id in achvs) {
        let ach = achvs[id];
        if (ach.done) continue; // Если уже получена, скипаем \\ ШКИП

        let reached = false;
        if (ach.type === 'money' && SberBanks.money >= ach.goal) reached = true;

        if (ach.type === 'item' && upgrades[ach.itemId]) {
            if (upgrades[ach.itemId].count >= ach.goal) {
                reached = true;
            }
        }
        if (ach.type === 'totalItems') {
            if (SberBanks.totalitems >= ach.goal) {
                reached = true
            }
        }

        if (reached) {
            playsound('ach')
            ach.done = true;
            showAchievement(ach);
            localStorage.setItem(`${GAME_CONFIG.saveKey}_achievements`, JSON.stringify(achvs));
            renderACHVS()
        }
    }
}

const SberBanks = {
    _money: GAME_CONFIG.startMoney,
    _power: 1,
    _bonus: 1,
    _aps: 0,
    _xp: 0,
    _level: 1,
    _xpNext: 100,
    _powerMultLevel: 1,
    _mp3Collapsed: localStorage.getItem(`${GAME_CONFIG.saveKey}_mp3Collapsed`) === 'true',
    _totalitems: 0,

    get powerMultLevel() {
        return this._powerMultLevel
    },

    set powerMultLevel(vl) {
        this._powerMultLevel = vl
        localStorage.setItem(`${GAME_CONFIG.saveKey}_PowerLevelMult`, this._powerMultLevel);
    },

    get xp() {
        return this._xp
    },

    set xp(vl) {
        this._xp = Math.max(0, Math.floor(vl))
        localStorage.setItem(`${GAME_CONFIG.saveKey}_xp`, this._xp);
        this.checkLevelUp();
        this.updateLevelDisplay();
    },

    get level() {
        return this._level
    },
    set level(vl) {
        this._level = Math.max(1, Math.floor(vl));
        localStorage.setItem(`${GAME_CONFIG.saveKey}_level`, this._level);
        this.updateLevelDisplay();
        this.onLevelUp();
    },

    get xpNext() {
        return this._xpNext
    },
    set xpNext(vl) {
        this._xpNext = Math.max(100, Math.floor(vl))
        localStorage.setItem(`${GAME_CONFIG.saveKey}_XpToNext`, this._xpNext);
        this.updateLevelDisplay();
    },

    checkLevelUp() {
        while (this._xp >= this.xpNext) {
            this.level += 1
            this.xp -= this.xpNext
            this.xpNext = this.calcXpForNext(this.level)
        }
    },

    calcXpForNext(lvl) {
        return Math.floor(100 * Math.pow(lvl, 1.5))
    },

    onLevelUp() {
        this.power *= 1.15
        this.powerMultLevel += 1.5
        playsound('ach')
    },

    updateLevelDisplay() {
        const levelbar = document.getElementById("levelbar")
        const xptext = document.getElementById("xp_count")
        const leftxp = document.getElementById("xpleft")

        if (levelbar) {
            let progress = (this.xp / this.xpNext) * 100
            levelbar.style.width = progress + '%'
        }

        if (xptext) {
            xptext.textContent = `Xp: ${this.xp}\nLevel: ${this.level}`
        }
        if (leftxp) {
            let needs = this.xpNext - this.xp
            leftxp.textContent = `For Next Level XP Left: ${needs}`
        }
    },

    addXp(kolvo) {
        this.xp += kolvo
    },

    initLevels() {

        this.xp = parseInt(localStorage.getItem(`${GAME_CONFIG.saveKey}_xp`)) || 0;
        this.level = parseInt(localStorage.getItem(`${GAME_CONFIG.saveKey}_level`)) || 1;
        this.xpNext = this.calcXpForNext(this._level);
        this.powerMultLevel = parseInt(localStorage.getItem(`${GAME_CONFIG.saveKey}_PowerLevelMult`)) || 1;
        this.updateLevelDisplay();
    },

    get mp3player() { return this._mp3Collapsed },
    set mp3player(vl) {
        this._mp3Collapsed = vl
        localStorage.setItem(`${GAME_CONFIG.saveKey}_mp3Collapsed`, vl)
        this.applyPlayerPosition()
    },

    set money(vl) {
        this._money = Math.floor(vl);
        counter.textContent = this._money;
        localStorage.setItem(`${GAME_CONFIG.saveKey}_money`, this._money);
        checkAchievements()
    },

    get money() {
        return this._money;
    },

    updateStats() {
        stats.textContent = `Boost: ${this._bonus}\nPower: ${this._power}`;
    },

    set power(vl) {
        this._power = vl
        this.updateStats()
        localStorage.setItem(`${GAME_CONFIG.saveKey}_power`, this._power);
    },
    get power() {
        return this._power
    },
    get bonus() {
        return this._bonus
    },

    set bonus(vl) {
        this._bonus = vl;
        this.updateStats();
        localStorage.setItem(`${GAME_CONFIG.saveKey}_bonus`, this._bonus);
    },

    get aps() {
        return this._aps;
    },

    set aps(vl) {
        this._aps = vl;
        localStorage.setItem(`${GAME_CONFIG.saveKey}_AutoMoneys`, this._aps);
    },

    applyPlayerPosition() {
        const mp3 = document.getElementById("playerwind");
        if (!mp3) return;
        mp3.style.bottom = this._mp3Collapsed ? "-450px" : "0px";
    },

    get totalitems() {
        return this._totalitems;
    },

    set totalitems(vl) {
        this._totalitems = vl;
        localStorage.setItem(`${GAME_CONFIG.saveKey}_TotalItems`, this._totalitems);
        const el = document.getElementById('TotalXlam');
        if (el) el.textContent = `Всего ${this._totalitems}`;
    },
};

function recalcTI() {
    let total = 0
    for (let key in upgrades) {
        if (upgrades[key].type === 'item') {
            // console.log(upgrades[key].count) // дебажка
            total += upgrades[key].count || 0
        }
    }
    SberBanks.totalitems = total
}




function recalcPowerBonus() {
    let power = 1
    let bonus = 1
    let aps = 0 // Добавим и aps, раз уж пересчитываем

    // Проверяем, что upgrades существует и это объект
    if (!upgrades || typeof upgrades !== 'object') {
        console.warn('upgrades не загружен, используем 0')
        SberBanks.power = 1
        SberBanks.bonus = 1
        SberBanks.aps = 0
        return
    }

    // Перебираем все апгрейды
    for (let key in upgrades) {
        const item = upgrades[key]

        // Проверяем, что предмет куплен (count > 0)
        const count = item.count || 0
        if (count <= 0) continue

        // Учитываем power, bonus, aps с учётом количества
        power += (item.power || 0) * count
        bonus += (item.bonus || 0) * count
        aps += (item.aps || 0) * count
    }

    // Обновляем c,cmnk ска сбербанк
    SberBanks.power = power
    SberBanks.bonus = bonus
    SberBanks.aps = aps

    console.log(`Пересчитано: power=${power}, bonus=${bonus}, aps=${aps} ОЕ ОЕОЕОЕОЕОЕОЕОЕОЕ ААААХХАХА ЗЗЕЕШЩХ\Э ХЫВАЗ`)
}

function startRandomBuffs() {
    setInterval(() => {
        // список всех ключей баффов
        const keys = Object.keys(buffs);
        // Выбираем случайный
        const randomKey = keys[Math.floor(Math.random() * keys.length)];


        const success = activateBuff(randomKey);

        // if (success) {
        //     console.log(` Рандомное событие: ${buffs[randomKey].name}`);
        // }
    }, 5 * 60 * 100); // 5 минут в миллисекундах
}


SberBanks.applyPlayerPosition();
SberBanks.money = Number(localStorage.getItem(`${GAME_CONFIG.saveKey}_money`) || 0)
SberBanks.power = Number(localStorage.getItem(`${GAME_CONFIG.saveKey}_power`) || 1)
SberBanks.bonus = Number(localStorage.getItem(`${GAME_CONFIG.saveKey}_bonus`) || 1)
SberBanks.aps = Number(localStorage.getItem(`${GAME_CONFIG.saveKey}_AutoMoneys`) || 0)
SberBanks.totalitems = Number(localStorage.getItem(`${GAME_CONFIG.saveKey}_TotalItems`) || 0)


setInterval(() => {
    if (SberBanks.aps > 3) {
        SberBanks.money += Number(SberBanks.aps) * (Number(SberBanks.power) * Number(SberBanks.bonus))
    } else if (SberBanks.aps > 0) {
        SberBanks.money += Number(SberBanks.aps)
    }
}, 1000);



function Click() {
    SberBanks.money += (Number(SberBanks.power) * Number(SberBanks.bonus)) * Number(GAME_CONFIG.IncomeMultiplier) * Number(SberBanks.powerMultLevel)
}

function showPlayer() {
    const mp3player = document.getElementById("playerwind")
    mp3player.style.display = "block"
}



function renderShop() {
    checkWindaActivat()
    shop_container.innerHTML = "" //ПРИВЕ5Т
    coll_conatiner.innerHTML = ""

    const select = document.getElementById("category-select")
    const activeCategory = select ? select.value : 'all'

    for (let id in upgrades) {
        let item = upgrades[id]
        const itemCateg = item.category || item.type
        if (activeCategory !== 'all' && itemCateg !== activeCategory) {
            continue
        }

        const isFulled = item.count >= item.limit
        const isAffordable = SberBanks.money >= item.price ? "" : "opacity: 0.5; cursor: not-allowed;";

        let btnText = `Buy: ${item.price} ${GAME_CONFIG.currency} (x${item.count})`;
        let btnClass = "shopperbutton";
        let btnDisabled = "";

        if (item.requires) {
            let unlocked = true;

            // Если requires — строка (старый формат)
            if (typeof item.requires === 'string') {
                if (!upgrades[item.requires] || upgrades[item.requires].count === 0) {
                    unlocked = false;
                }
            }
            // Если объект — проверяем и уровень, и предмет
            else if (typeof item.requires === 'object') {
                // Требуется уровень?
                if (item.requires.level) {
                    if (SberBanks.level < item.requires.level) {
                        unlocked = false;
                    }
                }
                // Требуется предмет?
                if (item.requires.item) {
                    if (!upgrades[item.requires.item] || upgrades[item.requires.item].count === 0) {
                        unlocked = false;
                    }
                }
            }

            if (!unlocked) {
                continue; // Скрываем предмет
            }
        }

        let trollTip = "";
        if (item.name === 'Крутка в геншин испмпакат!!!!') {
            trollTip = "Ты дурак. Гой. \nНу если ты не понял то ты реальный гой, за это даже ачивки не будет";
        } else if (item.name === 'Iphone20') {
            trollTip = "Удачи скачать приложение сбербанк онлайн.";
        } else if (item.count > 100) {
            trollTip = "АЛЁ! ТЫ ОБРУШИШЬ ЭКОНОМИКУ СТРАНЫ! ОСТАНОВИСЬ!";
        } else if (item.name.toLowerCase().includes('windows')) {
            trollTip = "виндус лицензия! ура!";
        } else if (item.count > 50) {
            trollTip = "Нафига тебе столько? Ты чё, перекуп с Горбушки?";
        } else if (item.count > 10) {
            trollTip = "Ого, коллекция растёт... Скоро за квартиру платить нечем будет... Или будешь платить этой же вещью?";
        } else {
            trollTip = `Твой честно заработанный ${item.name}!`; //Вырезанное: было так Твой честно заработанный ${item.name}. Глянец так и прёт!
        }

        let newElement = null
        if (isFulled || item.type === 'item' && item.count > 0) {
            coll_conatiner.innerHTML += `
            <div class="shop-item" style="display: flex;" title="${trollTip}">
                <div class="vista-avatar">
                    <img src="${item.img}" class="item-img" style="height: 100px; width: 100px;">
                    <img src="rDGyp.png" class="frame-overlay" style="height: 100px;">
                </div>
                <div class="item-info">
                    <h1>${item.name}</h1>
                    <p>${item.desc}</p>
                    <p>X${item.count}</p>
                </div>
            </div>
            `
            newElement = coll_conatiner.lastElementChild
            newElement.addEventListener('mouseenter', () => {
                let soundTimer = setTimeout(() => {
                    if (item.name === 'Крутка в геншин испмпакат!!!!') {
                        playsound('error');
                    } else if (item.name === 'Iphone20') {
                        playsound('shimmer');
                    }
                }, 650);


                newElement.addEventListener('mouseleave', () => {
                    // ВАЖНО: Если мышка ушла раньше, чем через 700мс — отменяем звук
                    clearTimeout(soundTimer);
                });
            });

        } if (!isFulled) {
            shop_container.innerHTML += `
                <div class="shop-item" style="display: flex; ${isFulled ? 'opacity: 0.7;' : ''}">
                    <div class="vista-avatar">
                        <img src="${item.img}" class="item-img" style="height: 100px; width: 100px;">
                        <img src="rDGyp.png" class="frame-overlay" style="height: 100px;">
                    </div>
                    <div class="item-info">
                        <h1>${item.name}</h1>
                        <p>${item.desc}</p>
                        <button class="${btnClass}" 
                                ${btnDisabled}" data-id="${id}">
                            ${btnText}
                        </button>
                    </div>
                </div>
            `;
        }

        if (id === 'mp3player' && upgrades.mp3player.count > 0) {
            showPlayer()
        }
    }
    console.log("%cАЛЁ! ТЫ ЗАЧЕМ СЮДА ЗАЛЕЗ?! ХОЧЕШЬ FAC НАКРУТИТЬ? Я ВСЁ ВИЖУ! \nGET OUT! GET THE FUCK OUT!!!! haha!", "color: red; font-size: 20px; background: yellow;");
}
function renderBuffs() {
    buff_cont.innerHTML = ''
    for (let id in activeBuffs) {
        const buff = activeBuffs[id]
        buff_cont.innerHTML += `
        <img src="${buff.icon}" alt="" height="20" width="20" alt="${buff.name}" title="${buff.name}">
        `
    }
}
function checkWindaActivat() {
    // Проверяем, есть ли хоть одна лицензия в инвентаре
    const hasVista = upgrades.WVL && upgrades.WVL.count > 0;
    const hasWin7 = upgrades.W7L && upgrades.W7L.count > 0;
    const isActivated = hasVista || hasWin7;

    const watermark = document.getElementById('genuine-watermark');

    if (isActivated) {
        // Если лицензия есть — чистим всё
        document.body.classList.remove('not-genuine');
        if (watermark) watermark.remove();
        GAME_CONFIG.incomeMultiplier = 1.0;

        // Бонус: если активировали, можно вернуть обои по умолчанию
        // document.body.style.backgroundImage = "url('ваши_обои.jpg')";
    } else {
        // Если лицензии нет — запускаем пиратский режим
        // Проверка !watermark нужна, чтобы не плодить надписи при каждом рендере
        if (!watermark) {
            triggerPirateEvent();
        }
    }
}

// 2. ИНИЦИАЛИЗАЦИЯ КАТЕГОРИЙ (только наполнение селекта)
function initCategoriesInInverntory() {
    const select = document.getElementById("category-select");
    if (!select) return;

    // Сохраняем текущий выбор, чтобы он не слетал при обновлении
    const currentValue = select.value || 'all';

    const categories = new Set();
    for (let id in upgrades) {
        categories.add(upgrades[id].category || upgrades[id].type);
    }

    // Всегда добавляем категорию 'sale', даже если в upgrades её пока нет (для будущего)
    categories.add('sale');

    select.innerHTML = ''; // Чистим старое

    // Проходимся по словарю, чтобы порядок всегда был одинаковый
    for (let code in CategoryNames) {
        if (code === 'all' || categories.has(code)) {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = CategoryNames[code];
            select.appendChild(option);
        }
    }

    select.value = currentValue; // Возвращаем выбор на место
    select.onchange = () => renderShop();
}

// 3. ИНИЦИАЛИЗАЦИЯ ТАБОВ (вызывается ОДИН РАЗ при старте игры)
function initTabs() {
    const tabs = document.querySelectorAll('menu[role="tablist"] button');

    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetPaneId = btn.getAttribute('aria-controls');

            // Просто перерисовываем всё с ТЕКУЩИМ фильтром, который стоит в селекте
            renderShop();

            console.log(`Перешли в ${targetPaneId}, фильтр остался: ${document.getElementById("category-select")?.value}`);
        });
    });
}
// Запускаем табы один раз! // о
initTabs();
initCategoriesInInverntory();
SberBanks.initLevels()

function renderACHVS() {
    const achvs_shelf = document.getElementById("achvs-grid");
    if (!achvs_shelf) return;


    const achList = achvs;

    achvs_shelf.innerHTML = "";

    for (let id in achList) {
        const item = achList[id];
        const isDone = item.done;

        const statusClass = isDone ? "ach-earned" : "ach-locked";
        const cardStyle = isDone ? "" : "opacity: 0.15; filter: grayscale(1) blur(2px);";

        const nameShow = isDone ? item.name : "???";
        const descShow = isDone ? item.desc : "Заблокировано";

        let targetItem = upgrades[item.itemId];
        let goal = isDone ? item.goal + ' ' + item.itemId : "Secret"

        if (isDone) {
            if (item.type === 'money') {
                goal = item.goal + ` ${GAME_CONFIG.currency}`
            } else if (item.type === 'item' && targetItem && item.goal == 1) {
                goal = "Получите " + targetItem.name
            } else if (item.type === 'item' && targetItem) {
                goal = "Получите " + item.goal + ' штук ' + targetItem.name
            }
        }
        achvs_shelf.innerHTML += `
            <div class="achv ${statusClass}" style="width: 250px; padding: 20px; text-align: center; ${cardStyle}">
                <div class="vista-avatar" style="margin: 0 auto; position: relative; width: 100px; height: 100px;">
                    <img src="${item.img}" class="user-img" style="width: 100px; height: 100px; border-radius: 5px;" alt="icon">
                    <img src="rDGyp.png" class="frame-overlay" style="width: 100px; height: 100px; position: absolute; left: 0; top: 0;" alt="frame">
                </div> 
                <h1 style="color: white; font-size: 18px; margin-top: 15px;">${nameShow}</h1>
                <p style="color: rgba(255,255,255,0.7); font-size: 12px;">${descShow}</p>
                <small>
                <p style="color: rgba(255,255,255,0.7); font-size: 12px;">${goal}</p>
                </small>
            </div>
        `;
    }
    // console.log("Зал Славы отрендерен!"); // ДЕБАЖКАКЛАКПЛОДЛЫЯВОДПАЫЖ ееее бой зал славы работает черт возьми исправно!
}


renderShop()
renderACHVS()

function buyItem(id) {
    let item = upgrades[id]
    if (item.count >= item.limit) return;

    if (SberBanks.money >= Number(item.price)) {
        SberBanks.money -= Number(item.price)
        SberBanks.power += Number(item.power)
        SberBanks.bonus += Number(item.bonus)
        SberBanks.aps += Number(item.aps)
        SberBanks.addXp(Math.floor(Math.log(item.price) * 10))
        item.price *= item.increment
        item.count++
        recalcTI()
        playsound('buy')
        localStorage.setItem(`${GAME_CONFIG.saveKey}_upgrades`, JSON.stringify(upgrades));
        renderShop()
        recalcPowerBonus()
        checkAchievements()
    } else {
        playsound('error')
    }
}

if (savedUpgrades) {
    const loadi = JSON.parse(savedUpgrades)
    for (let item in loadi) {
        if (upgrades[item]) {

            upgrades[item].count = loadi[item].count
            upgrades[item].price = Math.floor(
                upgrades[item].price * Math.pow(upgrades[item].increment, upgrades[item].count)
            );
        }
    }
    renderShop()
}

document.querySelectorAll('.shopperbutton').forEach(button => {
    const item = button.getAttribute('data-id')
    if (upgrades[item]) {
        button.textContent = `Buy: ${upgrades[item].price} ${GAME_CONFIG.currency}`
    }
})

function showAchievement(ach) {
    const toast = document.createElement('div');
    // Используем стандартные классы 7.css для окна
    toast.className = "window glass active";
    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.right = "-350px"; // Прячем за край
    toast.style.width = "250px";
    toast.style.transition = "all 1.2s cubic-bezier(0.075, 0.82, 0.165, 1)";
    toast.style.zIndex = "10000";
    // System Notification
    toast.innerHTML = `
    <div class="title-bar">
        <div class="title-bar-text">ЧЕРТ ВОЗЬМИ ЧУУЕЕЕЕ</div>
        <div class="title-bar-controls">
            <button aria-label="Close" onclick="this.closest('.window').remove()"></button>
        </div>
    </div>
    <div class="window-body has-space">
        <div style="display: flex;">
            <div class="vista-avatar">
                <img src="${ach.img}" class="item-img" style="height: 130px; width: 130px;">
                <img src="rDGyp.png" class="frame-overlay" style="height: 130px;">
            </div>
            
        </div> <p style="margin-bottom: 5px;">Черт возьми! ты получил ачивку: <br> <strong> <h1> ${ach.name}</strong></h1></p>
        <p style="font-size: 11px;">${ach.desc}</p>
        
    </div>
    `;

    document.body.appendChild(toast);
    setTimeout(() => toast.style.right = "20px", 100);
    playsound('ach')
    // Авто-удаление через 5 секунд
    setTimeout(() => {
        toast.style.right = "-350px";
        setTimeout(() => toast.remove(), 600);
    }, 7500);
}

let isMinimezed = localStorage.getItem(`${GAME_CONFIG.saveKey}_mp3Collapsed`) === 'true';
function Minimize_window() {
    const player = document.getElementById("playerwind")

    if (isMinimezed == false) {
        player.style.bottom = "-450px"
        isMinimezed = true
        localStorage.setItem(`${GAME_CONFIG.saveKey}_mp3Collapsed`, isMinimezed)
    } else {
        player.style.bottom = "0px"
        isMinimezed = false
        localStorage.setItem(`${GAME_CONFIG.saveKey}_mp3Collapsed`, isMinimezed)
    }
    localStorage.setItem(`${GAME_CONFIG.saveKey}_mp3Collapsed`, isMinimezed)
}
window.onload = function () {
    const player = document.getElementById("playerwind");
    if (isMinimezed) {
        player.style.bottom = "-450px";
    } else {
        player.style.bottom = "0px";
    }
};



function SetDispToHall(disptype) {
    const hall = document.getElementById("hall-of-achvs")
    if (hall) {
        hall.style.display = disptype
    }
}

document.getElementById('ClickButton').addEventListener('mousedown', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});

async function fetchJok() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke')
        const data = await response.json()

        const jokeTitl = data['setup']
        const jokeitself = data['punchline']

        const joketitle = document.getElementById("joketitl")
        const jokeparag = document.getElementById("jokeparag")

        joketitle.textContent = jokeTitl
        jokeparag.textContent = jokeitself
        document.getElementById('Trollington').showModal()
    } catch (err) {
        console.error("Упс, шутки кончились:", err);
    }
}

function StartRandTime() {
    const min = 180000;
    const max = 780000;
    const TrollTimer = Math.floor(Math.random() * (max - min + 1)) + min;

    setTimeout(() => {
        fetchJok()
        StartRandTime()
    }, TrollTimer);
}

function triggerPirateEvent() {
    // 1. Меняем фон на чёрный
    document.body.classList.add('not-genuine');

    // 2. Спавним ту самую надпись
    const watermark = document.createElement('div');
    watermark.id = 'genuine-watermark';
    watermark.innerHTML = `
        <p>Ваша копия Windows не является подлинной</p>
        <p style="font-size: 0.8em;">Вы, возможно, стали жертвой подделки программного обеспечения.</p>
    `;
    document.body.appendChild(watermark);

    // 3. Дебафф: режем доход в 2 раза
    GAME_CONFIG.incomeMultiplier = 0.5;

    // 4. Озвучка ошибки винды
    if (typeof playsound === 'function') playsound('error');
}


let sequence = "";
let LHMode = false;
let lhInterval;
document.addEventListener('keydown', (e) => {
    sequence += e.key.toLowerCase();
    if (sequence.includes("longhorn")) {
        LHMode = true;
        alert("Welcome to the Future! Активирован режим Longhorn 🐮");
        GAME_CONFIG.IncomeMultiplier = 500000
        document.body.style.filter = "hue-rotate(150deg) contrast(1.2)"; // рофло-эффект смены цвета
        playsound('longhorn')
        playsound('vista')
        lhInterval = setInterval(() => {
            counter.textContent = "КУЧА ФАК!!! дщтпрщкт"
        }, 100);

        setTimeout(() => {
            document.body.style.filter = "hue-rotate(0deg) contrast(1)";
            console.log("Back to 2026... прив кста нах ты читаешь код а а ???аааа,, ?!?!");
            LHMode = false
            clearInterval(lhInterval)
        }, 10000);
        sequence = "";
    } else if (sequence.includes("бак")) {
        alert("ОЙ РЕБЯТА....");
        document.body.style.filter = "hue-rotate(150deg) contrast(1.2)"; // рофло-эффект смены цвета
        playsound('longhorn')
        playsound('bak')
        GAME_CONFIG.IncomeMultiplier = 500

        setTimeout(() => {
            document.body.style.filter = "hue-rotate(0deg) contrast(1)";
            console.log("Было круто, правда?");
        }, 300000);
        sequence = "";
    }
    // Очищаем строку, чтобы не копилась бесконечно
    if (sequence.length > 20) sequence = "";
});

//ОБРЕЗ ЕСЛИ СЛИШКОМ БОГАЧ СКА
// if (SberBanks.bonus >= 900){
//     SberBanks.bonus = SberBanks.bonus / 5
// }

let ticks = setInterval(() => {
    // console.log(GAME_CONFIG.IncomeMultiplier) // дебажка
    renderBuffs()
    updateIncome()

}, 1000);

ticks

function OldPlayerGiveXP() {
    const hasReceivedLegacyXP = localStorage.getItem(`${GAME_CONFIG.saveKey}_legacyXPGiven`) === 'true';
    if (hasReceivedLegacyXP) return;

    let totalXP = 0;

    for (let id in upgrades) {
        const item = upgrades[id];
        const count = item.count || 0;
        if (count <= 0) continue;

        const initialPrice = item.initialPrice || item.price;
        const increment = item.increment || 1.15;

        let currentPrice = initialPrice;
        for (let i = 0; i < count; i++) {
            totalXP += Math.floor(Math.log(currentPrice) * 10);
            currentPrice *= increment;
        }
    }

    if (totalXP < 50) return;

    SberBanks.addXp(totalXP);




    localStorage.setItem(`${GAME_CONFIG.saveKey}_legacyXPGiven`, 'true');
    console.log(`[OldPlayerGiveXP] С;ка твои нищие ${totalXP} XP стоили мне утро. Мразь ты`);
}


// Основная инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {

    // 1. ИНИЦИАЛИЗАЦИЯ ТАБОВ (по канону 7.css)
    const tabList = document.querySelector("[aria-label='Shop Tabs']");
    if (tabList) {
        const tabButtons = tabList.querySelectorAll("[role=tab]");

        const tabHandler = (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("aria-controls");
            const tabContainer = e.target.closest('.tabs');

            tabButtons.forEach(btn => btn.setAttribute("aria-selected", "false"));
            e.target.setAttribute("aria-selected", "true");

            tabContainer.querySelectorAll("[role=tabpanel]").forEach(panel => {
                panel.setAttribute("hidden", "true");
            });

            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.removeAttribute("hidden");

                // --- ЛОГИКА ПЕРЕЕЗДА СЕЛЕКТА ---
                const select = document.getElementById("category-select");
                if (select) {
                    // Находим заголовок <h1> внутри активной панели
                    const title = targetPanel.querySelector("h1");
                    if (title) {
                        // Вставляем селект сразу ПОСЛЕ заголовка h1
                        title.after(select);
                    } else {
                        // Если заголовка нет, просто кидаем в начало панели
                        targetPanel.prepend(select);
                    }
                }
                // Фикс сетки при переключении
                renderShop();
            }
        };

        tabButtons.forEach(btn => {
            btn.addEventListener("mousedown", tabHandler);
            btn.addEventListener("focus", tabHandler);
        });
    }

    // 2. ГЛАВНАЯ КНОПКА (FAC Клик)
    // const clickbutton = document.getElementById('ClickButton');
    if (clickbutton) {
        clickbutton.addEventListener('click', (e) => Click(e));
    }

    if (document.getElementById('Wcall')) {
        document.getElementById('Wcall').addEventListener('click', (e) => callW(e));
    }
    // 4. АЧИВКИ ЗАКРЫТЬ
    const closebtn = document.getElementById('close-ach-btn')
    if (closebtn) {
        closebtn.addEventListener('click', (e) => {
            playsound('ach')
            SetDispToHall('none', e)
        })
    }

    // 5. АЧИВКИ ОТКРЫТЬ
    const open_hallbtn = document.getElementById('open-hall-btn')
    if (open_hallbtn) {

        open_hallbtn.addEventListener('click', (e) => {
            playsound('shimmer')
            SetDispToHall('flex', e)
        })
    }
    // 3. МАГАЗИН (Делегирование кликов)
    const shopContainer = document.querySelector('.shop');
    if (shopContainer) {
        shopContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.shopperbutton');
            if (btn) {
                const id = btn.getAttribute('data-id');
                buyItem(id);
            }
        });
    }

    // 4. ПЛЕЕР (Сворачивание)
    const minBtn = document.getElementById('Minimize_player');
    if (minBtn) {
        minBtn.addEventListener('click', () => Minimize_window());
    }

    // 5. ПЕРВЫЙ РЕНДЕР
    renderShop();
    startRandomBuffs();


    StartRandTime()
    recalcTI()
    recalcPowerBonus()
    OldPlayerGiveXP();

});
