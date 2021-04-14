const $arena = document.querySelector('.arenas.arena1');
const $button = document.querySelector('.button')


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
    changeHP: minusHP,
    elHP: elHP,
    renderHP: renderHP
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
    changeHP: minusHP,
    elHP: elHP,
    renderHP: renderHP
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

function changeHP(player) {
    let a = Math.ceil(Math.random() * 20);
    player.changeHP(a);
    let elem = player.elHP();
    player.renderHP(elem)
    // const $playerLife = document.querySelector('.player' + player.player + ' .life')
    // player.hp -= Math.ceil(Math.random() * 20);

    // if (player.hp <= 0) {
    //     player.hp = 0;
    //     // $arena.appendChild(playerLose(player.name))

    // }
    // $playerLife.style.width = player.hp + '%';
}

function minusHP(minus) {
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

function renderHP(element) {
    element.style.width = this.hp + '%';
}

$button.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);
    if (player1.hp > 0 && player2.hp == 0) {
        $arena.appendChild(playerWins(player1.name))

    }
    else if (player2.hp > 0 && player1.hp == 0) {
        $arena.appendChild(playerWins(player2.name))

    }
})

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
