import { GAME_CONFIG, upgrades } from "./config.js"

export const activeBuffs = {

}


// duration is in milliseconds
export const buffs = {
    Tulpans: {
        name : 'Тюльпаны расцвели!',
        icon : 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-10/501/636/711/010/111/600022032099b0.jpg',
        duration : 15000, powermult: 2, 
        requires: 'PSPTUL',
        incomemult: 2.5,
        bonus: 1,
        aps: 20,
        vibration : false,
        weight: 5
    },

    WMode: {
        name : 'W!',
        icon : 'https://nextgame.net/upload/dev2fun.imagecompress/webp/iblock/03b/aksessuary-ustroystvo-rumble-pak-dlya-ds-lite-dsl-for-nintendo-ds.webp',
        duration : 15000, powermult: 1.5,
        requires: null,
        incomemult: 5,
        bonus: 1,
        aps: 0,
        vibration : false,
        weight: 5
    },

    RMode: {
        name : 'Feel the rubmle!',
        icon : 'https://nextgame.net/upload/dev2fun.imagecompress/webp/iblock/03b/aksessuary-ustroystvo-rumble-pak-dlya-ds-lite-dsl-for-nintendo-ds.webp',
        duration : 15000, powermult: 1.5, 
        requires: 'NDSRP',
        incomemult: 1.5,
        bonus: 1,
        aps: 0,
        vibration : true,
        weight: 5
    },
}

export function updateIncome(){
    let multip = 1
    const now = Date.now()
    for (const key in activeBuffs){
        const buff = activeBuffs[key]
        if (now < buff.endTime){
            multip += (buff.incomemult - 1)
        } else {
            removeBuff(key)
        }
    }
    GAME_CONFIG.IncomeMultiplier = multip
}

export function activateBuff(key) {
    const buff = buffs[key];
    
    // Добавлена проверка hasRequiredItems(buff)
    if (!buff || activeBuffs[key] || !hasRequiredItems(buff)) {
        return false;
    }

    const now = Date.now();
    activeBuffs[key] = {
        key,
        name: buff.name,
        icon : buff.icon,
        incomemult: buff.incomemult,
        powermult: buff.powermult,
        bonus: buff.bonus,
        aps: buff.aps,
        vibration: buff.vibration,
        endTime: now + buff.duration
    };

    if (typeof updateIncome === 'function') updateIncome();
    return true;
}

function hasRequiredItems(buff) {
    if (!buff.requires) return true;

    // Это превратит и строку 'PSPTUL', и массив ['PSPTUL'] в массив
    const requirements = [].concat(buff.requires);

    return requirements.every(reqId => {
        const item = upgrades[reqId];
        // Проверяем, что предмет существует в базе и куплен (count > 0)
        return item && item.count > 0;
    });
}



export function removeBuff(key){
    delete activeBuffs[key]
    updateIncome()
}