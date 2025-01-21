import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Board from "../components/Board";
import { autoGenereateBoard, pickBestNumber } from "../ComputerFile";
import { useEffect } from "react";

const PlayPage: React.FC = () => {
    const location = useLocation();
    const cellValues = location.state?.cellValues;
    const rows = location.state?.rows;
    const [markedCells, setMarkedCells] = useState<string[]>([]);
    const [displayBoard, setDisplayBoard] = useState<boolean>(false);
    const [computerCells, setComputerCells] = useState<string[]>([]);
    const [playerTurn, setPlayerTurn] = useState<boolean>(true); 


    function onPlayerMarking(index: number, cellValue: string){
        console.log("Marking from player", cellValue);
        if(markedCells.includes(cellValue)){
            alert("Cell already marked");
            return;
        }
        else{
        setMarkedCells([...markedCells, cellValue]);
        setPlayerTurn(false);
        }
    }

    function handleToss(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();
        setComputerCells(autoGenereateBoard(rows));

        const toss: boolean = Math.random() > 0.5;
        if (toss){
            setPlayerTurn(true);
            alert("Player plays first");
        }
        else{
            setPlayerTurn(false);
            alert("Computer plays first");
        }
        setDisplayBoard(true);
        
    }

    useEffect(() => {
        if (!playerTurn){
            const bestCell = pickBestNumber(rows, computerCells, markedCells);
            setMarkedCells([...markedCells, bestCell]);
            setPlayerTurn(true);
        }
    }, [playerTurn]);

    return(
        <>
        {displayBoard ? (
        <Board cellValues = {cellValues} rows = {rows} onMarking = {onPlayerMarking} markedCells = {markedCells}/>
        ) : (
            <button onClick={handleToss}>Toss</button>
        )}  
        </>
    )
}

export default PlayPage;