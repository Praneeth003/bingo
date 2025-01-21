import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Board from "../components/Board";
import { autoGenereateBoard, pickBestNumber } from "../ComputerFile";

const PlayPage: React.FC = () => {
    const location = useLocation();
    const cellValues = location.state?.cellValues;
    const rows = location.state?.rows;
    const [markedCells, setMarkedCells] = useState<string[]>([]);
    const [displayBoard, setDisplayBoard] = useState<boolean>(false);
    const [computerCells, setComputerCells] = useState<string[]>([]);

    let playerPlaysFirst: boolean = true;

    function onMarking(index: number, cellValue: string){
        console.log("Marking from player", cellValue);
        setMarkedCells([...markedCells, cellValue]);
        
    }

    function handleToss(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();
        setComputerCells(autoGenereateBoard(rows));

        const toss: boolean = Math.random() > 0.5;
        if (toss){
            playerPlaysFirst = true;
            alert("Player plays first");
        }
        else{
            playerPlaysFirst = false;
            alert("Computer plays first");
            let computerMove: string | null = pickBestNumber(rows, cellValues, markedCells);
            console.log("Computer move", computerMove);
            setMarkedCells([...markedCells, computerMove]);
        }
        setDisplayBoard(true);
        
    }

    return(
        <>
        {displayBoard ? (
        <Board cellValues = {cellValues} rows = {rows} onMarking = {onMarking} markedCells = {markedCells}/>
        ) : (
            <button onClick={handleToss}>Toss</button>
        )}  
        </>
    )
}

export default PlayPage;