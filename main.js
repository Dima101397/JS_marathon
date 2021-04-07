const player1 = {
    name: "Kitana",
    hp: 100,
    img: "image",
    weapon: ["Katana", "Chto-to"],
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    attack: function () {
        console.log(this.name + ' fight');
    }
}


const player2 = {
    name: "Scorpion",
    hp: 100,
    img: "image",
    weapon: ["Axe", "Chto-to"],
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    attack: function () {
        console.log(this.name + ' fight');
    }

}

function createPlayer(className, player) {
    const $arena = document.querySelector('.arenas.arena1');
    for (let i = 0; i < 1; i++) {
        const $player = document.createElement('div');
        $player.classList.add(className)
        const $progressbar = document.createElement('div');
        $progressbar.classList.add('progressbar');
        const $life = document.createElement('div');
        $life.classList.add('life');
        $life.style.width = player.hp + '%'
        const $name = document.createElement('div');
        $name.classList.add('name')
        $name.innerText = player.name
        $progressbar.appendChild($life)
        $progressbar.appendChild($name)
        const $character = document.createElement('div');
        $character.classList.add('character');
        const $img = document.createElement('img');
        $img.src = player.img
        $character.appendChild($img);
        $player.appendChild($progressbar);
        $player.appendChild($character);
        $arena.appendChild($player)
    }

}

createPlayer('player1', player1);
createPlayer('player2', player2);