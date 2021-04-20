export const player1 = {
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

export const player2 = {
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

export function changeHP(minus) {
    if (this.hp <= minus)
        this.hp = 0;
    else {
        this.hp -= minus;
    }

}

export function elHP() {

    const $playerLife = document.querySelector('.player' + this.player + ' .life')
    return $playerLife;
}

export function renderHP() {

    this.elHP().style.width = this.hp + '%';
}