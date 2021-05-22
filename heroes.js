import Player from "./player/index.js";
import Game from "./game.js"
import {createRandom} from "./utils.js"

const game = new Game();
// const players = await game.getPlayers();
// console.log(players);
const p1 = JSON.parse(localStorage.getItem('player1'));

const p2 = await game.getOnePlayer().then();


export let player1 = new Player({
    ...p1,
    player: 1,
    root: 'arenas'
})

export let player2 = new Player({
    ...p2,
    player: 2,
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