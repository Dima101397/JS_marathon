import {logs} from './const.js'

export const createElement = (tag, className) => {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

const $chat = document.querySelector('.chat')

export const generateLogs = (type, player1, player2, value) => {
    const date = new Date()
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    switch (type) {
        case 'start':
            const start = logs[type].replace('[time]', time).replace('[player1]', player1.name).replace('[player2]', player2.name);
            const el = `<p>${start}</p>`
            $chat.insertAdjacentHTML('afterbegin', el)
            break;
        case 'hit':
            const text = logs[type][createRandom(logs['hit'].length)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            const hit_el = `<p>${time} - ${text}. HP -${value}, ${player1.hp}/100</p>`
            $chat.insertAdjacentHTML('afterbegin', hit_el)
            break;
        case 'defence':
            const text_def = logs[type][createRandom(logs['defence'].length)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            const def_el = `<p>${time} - ${text_def}</p>`
            $chat.insertAdjacentHTML('afterbegin', def_el)
            break;
        case 'end':
            const text_end = logs[type][createRandom(logs['end'].length)].replace('[playerLose]', player1.name).replace('[playerWins]', player2.name);
            const end_el = `<p>${time} - ${text_end}</p>`
            $chat.insertAdjacentHTML('afterbegin', end_el)
            break;
    }
}