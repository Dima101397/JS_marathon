// export { player1, player2, changeHP, elHP, renderHP } from './heroes.js'
// export {enemyAttack, playerAttack} from './attack.js'

const $arena = document.querySelector('.arenas.arena1');
const $button = document.querySelector('.button')
const $form = document.querySelector('.control');
const $chat = document.querySelector('.chat')


const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};


const player1 = {
    player: 1,
    name: "Kitana",
    hp: 100,
    img: "image",
    weapon: ["Katana", "Chto-to"],
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    attack: function () {
        console.log(this.name + ' fight');
    },
    changeHP,
    elHP,
    renderHP
}


const player2 = {
    player: 2,
    name: "Scorpion",
    hp: 100,
    img: "image",
    weapon: ["Axe", "Chto-to"],
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    attack: function () {
        console.log(this.name + ' fight');
    },
    changeHP,
    elHP,
    renderHP
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(player) {
    const $player = createElement('div', 'player' + player.player);

    const $progressbar = createElement('div', 'progressbar');

    const $life = createElement('div', 'life');
    $life.style.width = player.hp + '%'

    const $name = createElement('div', 'name');
    $name.innerText = player.name

    $progressbar.appendChild($life)
    $progressbar.appendChild($name)

    const $character = createElement('div', 'character');

    const $img = createElement('img');
    $img.src = player.img

    $character.appendChild($img);
    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}


$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));



// function changeHP(player) {
//     let a = Math.ceil(Math.random() * 20);
//     player.changeHP(a);
//     let elem = player.elHP();
//     player.renderHP(elem)
// const $playerLife = document.querySelector('.player' + player.player + ' .life')
// player.hp -= Math.ceil(Math.random() * 20);

// if (player.hp <= 0) {
//     player.hp = 0;
//     // $arena.appendChild(playerLose(player.name))

// }
// $playerLife.style.width = player.hp + '%';
// }

function changeHP(minus) {
    if (this.hp <= minus)
        this.hp = 0;
    else {
        this.hp -= minus;
    }

}
function elHP() {

    const $playerLife = document.querySelector('.player' + this.player + ' .life')
    return $playerLife;
}

function renderHP() {

    this.elHP().style.width = this.hp + '%';
}

// $button.addEventListener('click', function () {
//     changeHP(player1);
//     changeHP(player2);
//     if (player1.hp > 0 && player2.hp == 0) {
//         $arena.appendChild(playerWins(player1.name))

//     }
//     else if (player2.hp > 0 && player1.hp == 0) {
//         $arena.appendChild(playerWins(player2.name))

//     }
// })

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
        window.location.reload()
    })
    $divForButton.appendChild($button)
    return $divForButton
}

function getRandom(number) {
    return Math.ceil(Math.random() * number);
}

function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1]
    const def = ATTACK[getRandom(3) - 1]

    return {
        value: getRandom(HIT[hit]),
        hit,
        def
    }
}

function playerAttack() {
    const attack = {}
    for (let item of $form) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value
        }
        if (item.checked && item.name === 'defence') {
            attack.def = item.value
        }

        item.checked = false;
    }

    return attack
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
        player2.renderHP(elHP())
        generateLogs('hit', player2, player1, attack.value)
    } else {
        generateLogs('defence', player2, player1)
    }
    if (attack.def !== enemy.attack) {
        player1.changeHP(enemy.value)
        player1.renderHP(elHP())
        generateLogs('hit', player1, player2, enemy.value)
    } else {
        generateLogs('defence', player1, player2)
    }


    if (player1.hp > 0 && player2.hp == 0) {
        $arena.appendChild(playerWins(player1.name))
        generateLogs('win', player1, player2)
    }
    else if (player2.hp > 0 && player1.hp == 0) {
        $arena.appendChild(playerWins(player2.name))
        generateLogs('win', player2, player1)
    }

}

const createRandom = (number) =>  Math.floor(Math.random() * number);

function generateLogs(type, player1, player2, value) {
    // const text = logs[type][0].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
    // console.log(text)
    // const el = `<p>${text}</p>`
    // $chat.insertAdjacentHTML('afterbegin', el)
    const date = new Date()
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    switch (type) {
        case 'start':
            const start = logs[type].replace('[time]', time).replace('[player1]', player1.name).replace('[player2]', player2.name);
            const el = `<p>${start}</p>`
            $chat.insertAdjacentHTML('afterbegin', el)
            break;
        case 'hit':
            const text = logs[type][createRandom(logs[type].lenght)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            const hit_el = `<p>${time} - ${text}. HP -${value}, ${player1.hp}/100</p>`
            $chat.insertAdjacentHTML('afterbegin', hit_el)
            break;
        case 'defence':
            const text_def = logs[type][createRandom(logs[type].lenght)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            const def_el = `<p>${time} - ${text_def}</p>`
            $chat.insertAdjacentHTML('afterbegin', def_el)
            break;
        case 'end':
            const text_end = logs[type][createRandom(logs[type].lenght)].replace('[playerLose]', player1.name).replace('[playerWins]', player2.name);
            const end_el = `<p>${time} - ${text_end}</p>`
            $chat.insertAdjacentHTML('afterbegin', end_el)
            break;
    }
}

generateLogs('start', player1, player2);

