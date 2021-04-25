import Player from "./player/index.js";


export const player1 = new Player({
    player: 1,
    name: "Kitana",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    root: 'arenas'
})

export const player2 = new Player({
    player: 2,
    name: "Scorpion",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    root: 'arenas'

})

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