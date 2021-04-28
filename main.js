import { player1, player2, changeHP, elHP, renderHP } from './heroes.js'
import { enemyAttack, playerAttack } from './attack.js'
import Game from './game.js'
import {logs} from './const.js'
import {createElement} from './utils.js'

const $arena = document.querySelector('.arenas.arena1');
const $button = document.querySelector('.button')
const $form = document.querySelector('.control');
const $chat = document.querySelector('.chat')

const game = new Game()

game.start()


function playerWins(name) {
    const $loseTitle = createElement('div', 'loseTitle')
    $loseTitle.innerText = name + ' WINS';
    $button.disabled = true;
    $arena.appendChild(createReloadeButton())
    generateLogs('end', player1, player2)
    return $loseTitle;
}

function createReloadeButton() {
    let $divForButton = createElement('div', 'reloadWrap')
    let $button = createElement('button', 'button')
    $button.innerText = "Restart"
    $button.addEventListener('click', function () {
        window.location.pathname='index.html'
    })
    $divForButton.appendChild($button)
    return $divForButton
}

$form.addEventListener('submit', function (e) {
    e.preventDefault()

    const enemy = enemyAttack();


    const player = playerAttack()

    checkAttackDef(enemy, player)
})

function checkAttackDef(enemy, attack) {
    if (enemy.def !== attack.hit) {
        player2.changeHP(attack.value)
        player2.renderHP(elHP.call(player2.player))
        generateLogs('hit', player2, player1, attack.value)
    } else {
        generateLogs('defence', player2, player1)
    }
    if (attack.def !== enemy.attack) {
        player1.changeHP(enemy.value)
        player1.renderHP(elHP.call(player1.player))
        generateLogs('hit', player1, player2, enemy.value)
    } else {
        generateLogs('defence', player1, player2)
    }
    game.getAttack(attack.hit, attack.def)


    if (player1.hp > 0 && player2.hp == 0) {
        $arena.appendChild(playerWins(player1.name))
        generateLogs('win', player1, player2)
    }
    else if (player2.hp > 0 && player1.hp == 0) {
        $arena.appendChild(playerWins(player2.name))
        generateLogs('win', player2, player1)
    }

}



const createRandom = (number) => {

    return Math.floor(Math.random() * number);
}


function generateLogs(type, player1, player2, value) {
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



