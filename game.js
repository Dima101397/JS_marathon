import { player1, player2 } from './heroes.js'
import {generateLogs} from './utils.js'


class Game{
    start = () => {
        player1.createPlayer()
        player2.createPlayer()
        generateLogs('start', player1, player2);
        // const $form = document.querySelector('.control');
        // $form.addEventListener('submit', function (e) {
        //     e.preventDefault()
        
        //     const enemy = enemyAttack();
        
        
        //     const player = playerAttack()
        
        //     checkAttackDef(enemy, player)
        // })
    }
    getAllPlayers = async () =>{
        const players = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res=>res.json())
        return players;
    }

    getOnePlayer = async () =>{
        const player = fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/choose').then(res=>res.json())
        return player
    }

    getAttack = async (hit,defence) =>{
        const attack = fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
            method: 'POST',
            body: JSON.stringify({
                hit,
                defence,
            })
        }).then(res=>res.json());
    }

}

export default Game