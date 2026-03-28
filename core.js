import { upgrades, achvs, GAME_CONFIG } from './config.js';

const savedUpgrades = localStorage.getItem(`${GAME_CONFIG.saveKey}_upgrades`);
const counter = document.getElementById("count")
const clickbutton = document.getElementById("ClickButton")
const stats = document.getElementById("Stats")
const shop_container = document.getElementById("shop-cont")
const coll_conatiner = document.getElementById("coll-cont")
function checkAchievements() {
    for (let id in achvs) {
        let ach = achvs[id];
        if (ach.done) continue; // Если уже получена, скипаем \\ ШКИП

        let reached = false;
        if (ach.type === 'money' && SberBanks.money >= ach.goal) reached = true;

        if (ach.type === 'item' && upgrades[ach.itemId]){
            if (upgrades[ach.itemId].count >= ach.goal) {
                reached = true;
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
    _mp3Collapsed: localStorage.getItem(`${GAME_CONFIG.saveKey}_mp3Collapsed`) === 'true',

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
    }
};
const sounds = {
    ach: new Audio('https://archive.org/download/win95sounds/tada.mp3'),
    buy: new Audio('https://www.myinstants.com/media/sounds/roblox-cash-register.mp3'),
    click: new Audio(''),
    error: new Audio('https://archive.org/download/windows98microsoftplus-sounds/w98sounds/CHORD.mp3'),
    shimmer: new Audio('https://dn711100.ca.archive.org/0/items/Boot_Sounds_Compilation/Windows%2098%20-%20Boot.mp3')
}

function playsound(SName){ //SoundName
    if (sounds[SName]){
        sounds[SName].currentTime = 0
        sounds[SName].play().catch(e => console.log("Браузер заблокировал звук до первого клика"));
    }
}

SberBanks.applyPlayerPosition();
SberBanks.money = Number(localStorage.getItem(`${GAME_CONFIG.saveKey}_money`) || 0)
SberBanks.power = Number(localStorage.getItem(`${GAME_CONFIG.saveKey}_power`) || 1)
SberBanks.bonus = Number(localStorage.getItem(`${GAME_CONFIG.saveKey}_bonus`) || 1)
SberBanks.aps = Number(localStorage.getItem(`${GAME_CONFIG.saveKey}_AutoMoneys`) || 0)

setInterval(() => {
    if (SberBanks.aps > 3) {
        SberBanks.money += Number(SberBanks.aps) * (Number(SberBanks.power) * Number(SberBanks.bonus))
    } else if (SberBanks.aps > 0) {
        SberBanks.money += Number(SberBanks.aps)
    }
}, 1000);



function Click() {
    SberBanks.money += (Number(SberBanks.power) * Number(SberBanks.bonus))
}
function showPlayer() {
    const mp3player = document.getElementById("playerwind")
    mp3player.style.display = "block"
}

function renderShop() {
    shop_container.innerHTML = ""
    coll_conatiner.innerHTML = ""

    for (let id in upgrades) {
        let item = upgrades[id]
        const isFulled = item.count >= item.limit
        const isAffordable = SberBanks.money >= item.price ? "" : "opacity: 0.5; cursor: not-allowed;";

        let btnText = `Buy: ${item.price} ${GAME_CONFIG.currency} (x${item.count})`;
        let btnClass = "shopperbutton";
        let btnDisabled = "";

        let trollTip = "";
        if (item.count > 100) {
            trollTip = "АЛЁ! ТЫ ОБРУШИШЬ ЭКОНОМИКУ СТРАНЫ! ОСТАНОВИСЬ!";
        } else if (item.count > 50) {
            trollTip = "Нафига тебе столько? Ты чё, перекуп с Горбушки?";
        } else if (item.count > 10) {
            trollTip = "Ого, коллекция растёт... Скоро за квартиру платить нечем будет... Или будешь платить этой же вещью?";
        } else {
            trollTip = `Твой честно заработанный ${item.name}!`; //Вырезанное: было так Твой честно заработанный ${item.name}. Глянец так и прёт!
        }

        if ((isFulled || item.count > 9) && item.increment == 1) {
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
}

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
        
        if (isDone){
            if (item.type === 'money'){
                goal = item.goal + ` ${GAME_CONFIG.currency}`
            } else if (item.type === 'item' && targetItem){
                goal = item.goal + ' ' + " ШТ. " + targetItem.name
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
    console.log("Зал Славы отрендерен!");
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
        item.price *= item.increment
        item.count++

        playsound('buy')
        localStorage.setItem(`${GAME_CONFIG.saveKey}_upgrades`, JSON.stringify(upgrades));
        renderShop()
        checkAchievements()
    } else {
        playsound('error')
    }
}

if (savedUpgrades) {
    const loadi = JSON.parse(savedUpgrades)

    for (let item in loadi) {
        if (upgrades[item]) {
            upgrades[item].price = loadi[item].price
            upgrades[item].count = loadi[item].count
            renderShop()
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
    // 4. АЧИВКИ ЗАКРЫТЬ
    const closebtn = document.getElementById('close-ach-btn')
    if (closebtn){
        closebtn.addEventListener('click', (e) => {
            playsound('ach')
            SetDispToHall('none', e)
        })
    }

    // 5. АЧИВКИ ОТКРЫТЬ
    const open_hallbtn = document.getElementById('open-hall-btn')
    if (open_hallbtn){
        
        open_hallbtn.addEventListener('click', (e) => {
            playsound('shimmer')
            SetDispToHall('flex', e)})
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
});

function SetDispToHall(disptype){
    const hall = document.getElementById("hall-of-achvs")
    if (hall){
        hall.style.display = disptype
    }
}