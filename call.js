
const sounds = {
    ach: new Audio('https://archive.org/download/win95sounds/tada.mp3'),
    buy: new Audio('https://github.com/losba78rf2/MYFUNNYWEBSITE/raw/refs/heads/main/roblox-cash-register.mp3'),
    click: new Audio(''),
    error: new Audio('https://archive.org/download/windows98microsoftplus-sounds/w98sounds/CHORD.mp3'),
    shimmer: new Audio('https://dn711100.ca.archive.org/0/items/Boot_Sounds_Compilation/Windows%2098%20-%20Boot.mp3'),
    longhorn: new Audio('https://dn710201.ca.archive.org/0/items/Microsoft_Windows-Longhorn-Reloaded-System-Sounds/Windows-Longhorn-Reloaded-sound-effects/longhorn_reloaded_%5Bwinsounds.com%5D_767/LHR%20Logon.mp3'),
    vista: new Audio('https://archive.org/download/Boot_Sounds_Compilation/Windows%20Vista%20-%20Boot.mp3'),
    rington: new Audio('sounds/c55_asia.mp3')

}

function playsound(SName) { 
    if (sounds[SName]) {
        sounds[SName].currentTime = 0
        sounds[SName].play().catch(e => console.log("Браузер заблокировал звук до первого клика " + e));
    }
}

let wCallCount = 0

// Функция звонка
function callW() {
    wCallCount++

    // вибрация 
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100, 50, 200]) // W W W
    }


    playsound('rington')

    document.body.style.animation = 'shake 0.5s ease'
    setTimeout(() => {
        document.body.style.animation = ''
    }, 500)

    // Сообщение 4н45 
    const messages = [
        "📞 Бро не, давай без этого бро",
        "📞 W не отвечает. Но ты чувствуешь — он знает.",
        "📞 Ало не звони дурак",
        "📞 Трубку взял не W. Это был... *твой внутренний голос*.",
        "📞 «W W W» — эхо разносится по вселенной.",
        `📞 Ты уже звонил ${wCallCount} раз. W начинает нервничать.`,
        "📞 🅆 🅄 🅁 🅁 🅞 🅆",
        "📞 Ошибка: W перегружен запросами. Попробуй через 55 секунд.",
        "📞 Подключение к W... 3%... 5%... отменено. W не хочет.",
        "📞 Ты услышал короткие гудки. Это — благословение.",
        "📞 W: «Не надо.»",
        "воиё пш вцв кв млкьи, ъпл мнлопл юнвбьпёкэ фвнпляэь или",
        "📞 L: АЛО С**КА НЕ ЗВАОНИ СЮДА Я ЩАС УМРУ БЛ№№№№№№№№№№№",
    ]

    // сообзщеапние функция
    setTimeout(() => {
        const log = document.getElementById('w-call-log')
        if (log) {
            const msg = document.createElement('div')
            msg.textContent = messages[wCallCount % messages.length]
            msg.style.opacity = 0
            log.prepend(msg)

            setTimeout(() => msg.style.opacity = 1, 10)
            if (log.children.length > 5) log.lastChild.remove()
        }
    }, 7000);

    if (wCallCount === 5) {
        alert("Ты звонил. Он слышал.")
    }

    if (wCallCount === 55) {
        document.body.style.filter = 'hue-rotate(90deg)'
        setTimeout(() => {
            document.body.style.filter = ''
        }, 3000)
        alert("🌐 W: «...»\n\n(Ты почувствовал, как реальность дрогнула.)")
    }

    if (wCallCount === 56) {
        document.body.style.filter = 'hue-rotate(920deg)'
        setTimeout(() => {
            document.body.style.filter = ''
        }, 3000)
        alert("🌐 W: «Бл№№№№ ты реально даун? Я тебе на автоответчике сказал не звонить с№ка тупой бл;;;; дь ьпьалдаывлдаьыфдва НЕ ЗВОНИ БОЛЬШЕ БЛ№№№№№№№»\n\n(Ты почувствовал, что ты реально тупой тупорылый")
    }

    if (wCallCount === 57) {
        document.body.style.filter = 'hue-rotate(920deg)'
        setTimeout(() => {
            document.body.style.filter = ''
        }, 3000)
        alert("Я ббл№№;№№№ уже дальше писать не собираюсь, это реально все, я врать не буду")
    }


    if (wCallCount === 59) {
        document.body.style.filter = 'hue-rotate(920deg)'
        setTimeout(() => {
            document.body.style.filter = ''
        }, 3000)
        alert("Ты мне не веришь? Ублюдок.")
    }
    if (wCallCount === 60) {
        document.body.style.filter = 'hue-rotate(920deg)'
        setTimeout(() => {
            document.body.style.filter = ''
        }, 3000)
        alert("Ты внатуре издеваешься")
    }

}
