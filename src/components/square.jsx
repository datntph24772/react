import { useState } from 'react'
import Board from './board';

const Square = ({ value, position, handlePlay}) => {
    const rgb="h-[50px] w-[50px] text-xl text-white border-0 bg-[#fe3630]"
    const [classColor,setClass]=useState("h-[50px] w-[50px] text-xl text-white border-0 bg-[#14bdac]")
    
    const handleSquarePlay = () => {
        if (!value) {
            handlePlay(position)
        }
    }
    return <>
        <button
            onClick={handleSquarePlay}
            className={classColor}>
            {value}
        </button>
    </>
}
export default Square