const $arena = document.querySelector('.arenas.arena1');
// const $button = document.querySelector('.button')
const $form = document.querySelector('.control');


const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];


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
    console.log('this', this)
    const $playerLife = document.querySelector('.player' + this.player + ' .life')
    return $playerLife;
}

function renderHP() {
    console.log('this.renderHP', this.elHP())
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

$form.addEventListener('submit', function (e) {
    e.preventDefault()

    const enemy = enemyAttack();
    console.log(enemy)

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
    console.log(attack)
    checkAttackDef(enemy, attack)
})

function checkAttackDef(enemy, attack) {
    console.log('### enemy: ', enemy)
    console.log('### attack: ', attack)
    if (enemy.def != attack.hit) {
        player2.changeHP(attack.value)
        player2.renderHP(elHP())
    }
    else if (attack.def != enemy.attack) {
        player1.changeHP(enemy.value)
        player1.renderHP(elHP())
    }
    console.log('player1.hp ', player1.hp)
    console.log('player2.hp ', player2.hp)
    if (player2.hp >= attack.hit){
        console.log(1)
        playerWins(player1.name)
    }
    else if (player1.hp >= enemy.hit){
        console.log(2)
        playerWins(player2.name)
    }

}