import { player1, player2 } from './heroes.js'
import {generateLogs} from './utils.js'


class Game{
    start = () => {
        player1.createPlayer()
        player2.createPlayer()
        generateLogs('start', player1, player2);
    }

}

export default Game