import {createElement} from '../utils.js'

class Player {
    constructor(props) {
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
        this.player = props.player;
        this.selector = `player${this.player}`;
        this.root = props.root;
    }
    changeHP = (minus)=>{
        if (this.hp <= minus)
            this.hp = 0;
        else {
            this.hp -= minus;
        }
    
    }
    
     elHP = () => {
        const $playerLife = document.querySelector(`.${this.selector} .life`)
        return $playerLife;
    }
    
    renderHP = () => {
    
        this.elHP().style.width = this.hp + '%';
    }

    createPlayer = () => {
        const $player = createElement('div', this.selector);
    
        const $progressbar = createElement('div', 'progressbar');
    
        const $life = createElement('div', 'life');
        $life.style.width = this.hp + '%'
    
        const $name = createElement('div', 'name');
        $name.innerText = this.name
    
        $progressbar.appendChild($life)
        $progressbar.appendChild($name)
    
        const $character = createElement('div', 'character');
    
        const $img = createElement('img');
        $img.src = this.img
    
        $character.appendChild($img);
        $player.appendChild($progressbar);
        $player.appendChild($character);
        const $root = document.querySelector(`.${this.root}`)
        $root.appendChild($player)
    
        return $player;
    }
}

export default Player