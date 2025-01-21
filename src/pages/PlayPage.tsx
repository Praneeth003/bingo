import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Board from "../components/Board";
import { autoGenereateBoard } from "../ComputerFile";

const PlayPage: React.FC = () => {
    const location = useLocation();
    const cellValues = location.state?.cellValues;
    const rows = location.state?.rows;
    const [markedCells, setMarkedCells] = useState<string[]>([]);
    const [displayBoard, setDisplayBoard] = useState<boolean>(false);

    let playerPlaysFirst: boolean = true;
    let isComputerPlayerInitialized: boolean = false;

    function onMarking(index: number, cellValue: string){
        console.log("Marking from player", index, cellValue);
        setMarkedCells([...markedCells, cellValue]);
        
    }

    function handleToss(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();
        const toss: boolean = Math.random() > 0.5;
        if (toss){
            playerPlaysFirst = true;
            isComputerPlayerInitialized = true;
            alert("Player plays first");
        }
        else{
            playerPlaysFirst = false;
            isComputerPlayerInitialized = true;
            alert("Computer plays first");
        }
        setDisplayBoard(true);
        // autoGenereateBoard(cellValues, rows, playerPlaysFirst, isComputerPlayerInitialized);
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