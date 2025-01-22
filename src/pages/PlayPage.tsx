import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Board from "../components/Board";
import { autoGenereateBoard, pickBestNumber, calculateScore } from "../logic";
import { useEffect } from "react";

const PlayPage: React.FC = () => {
    const location = useLocation();
    const playerCells = location.state?.cellValues;
    const rows = location.state?.rows;
    const [markedCells, setMarkedCells] = useState<string[]>([]);
    const [displayBoard, setDisplayBoard] = useState<boolean>(false);
    const [computerCells, setComputerCells] = useState<string[]>([]);
    const [playerTurn, setPlayerTurn] = useState<boolean>(true); 
    const [playerScore, setPlayerScore] = useState<number>(0);
    const [computerScore, setComputerScore] = useState<number>(0);


    function onPlayerMarking(index: number, cellValue: string){
        console.log("Marking from player", cellValue);
        if(markedCells.includes(cellValue)){
            alert("Cell already marked");
            return;
        }
        else{
        setMarkedCells([...markedCells, cellValue]);

        if(playerScore === rows && computerScore === rows){
            alert("Game Over, It's a Draw");
            return;
        }
        else{
        if(playerScore === rows){
            alert("Player Wins");
            return;
        }
        if(computerScore === rows){
            alert("Computer Wins");
            return;
        }
    }
    setPlayerTurn(false);
        }
    }

    function handleToss(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();
        setComputerCells(autoGenereateBoard(rows));
        console.log("Computer cells", computerCells);

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

    // Pick the best cell for Computer Player to mark on its turn
    useEffect(() => {
        if (!playerTurn){
            const bestCell = pickBestNumber(rows, computerCells, markedCells);
            setMarkedCells([...markedCells, bestCell]);
            alert("Computer marked " + bestCell);

           
            if(playerScore === rows && computerScore === rows){
                alert("Game Over!! It's a Draw");
                return;
            }
            else {
                if(computerScore === rows){
                alert("Computer Wins"); 
                return;         
            }
            if(playerScore === rows){
                alert("Player Wins");
                return;
            }
        }
        setPlayerTurn(true);
           
    }
    }, [playerTurn]);

    // Calculate the score of the player and computer
    useEffect(() => {
        if (playerTurn){
            setPlayerScore(calculateScore(playerCells, markedCells, rows));
        }
        else{
            setComputerScore(calculateScore(computerCells, markedCells, rows));
        }
    }, [markedCells]);

    return(
        <>
        {displayBoard ? (
        <>
        <Board cellValues = {playerCells} rows = {rows} onMarking = {onPlayerMarking} markedCells = {markedCells}/>
        <p>Player Score: {playerScore}</p>
        <p>Computer Score: {computerScore}</p>
        </>
        ) : (
            <button onClick={handleToss}>Toss</button>
        )}  
        </>
    )
}

export default PlayPage;