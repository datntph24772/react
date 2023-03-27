import { useState } from "react"
import Square from './square'

const Board = () => {
    const [status,setStatus]=useState([true,true, true, true, true, true, true, true, true])
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)
    const [back,setBack]=useState()
    const [his,setHis]=useState([true])
    const rgb="h-[50px] w-[50px] text-xl text-white border-0 bg-[#fe3630]"
    const [classColor,setClass]=useState("h-[50px] w-[50px] text-xl text-white border-0 bg-[#14bdac]")
    
    function undo() {
        if(player == true){
            game[back]=null
            setPlayer(false)
            setHis(false)
        }else{
            game[back]=null
            setPlayer(true)
            setHis(false)
        }
    }
    const handlePlay = (position) => {
        console.log(position);
        const newGame = game.map((i, index) => {
            if (index === position) {
                return player ? "X" : "O"
            }
            return i
        })
        setGame(newGame)
        setPlayer(!player)
        setBack(position)
        
    }
    const winList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const checkWinner = () => {
        for (let i = 0; i < winList.length; i++) {
            const [p1, p2, p3] = winList[i]
            if (game[p1] === game[p2] && game[p2] === game[p3] && game[p3] === game[p1]) {
                
                return game[p1]
            }
        }
        return "None"
    }
    
    function reload() {
        setGame([null, null, null, null, null, null, null, null, null])
    }
    
    return <>
        <h2>Winner is: {checkWinner()}</h2>
        <br />
        <div className="grid grid-cols-3 gap-3">
            <Square value={game[0]} position={0} handlePlay={handlePlay} />
            <Square value={game[1]} position={1} handlePlay={handlePlay} />
            <Square value={game[2]} position={2} handlePlay={handlePlay} />
            <Square value={game[3]} position={3} handlePlay={handlePlay} />
            <Square value={game[4]} position={4} handlePlay={handlePlay} />
            <Square value={game[5]} position={5} handlePlay={handlePlay} />
            <Square value={game[6]} position={6} handlePlay={handlePlay} />
            <Square value={game[7]} position={7} handlePlay={handlePlay} />
            <Square value={game[8]} position={8} handlePlay={handlePlay} />
        </div>
        <br />
        <button class="bg-green-400" onClick={undo}>Undo</button>
        <button class=" bg-red-500" onClick={reload}>Reset</button>
    </>
}

export default Board
