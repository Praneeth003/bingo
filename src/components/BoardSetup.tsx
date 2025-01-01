import React from "react";
import Board from "./Board";
import { useNavigate } from "react-router-dom";


interface BingoBoardProps {
    rows ?: number;
    cellValues ?: string[];
}


const BoardSetup: React.FC<BingoBoardProps> = (props) => {
    const rows = props.rows;
    const totalCells  = rows ? rows * rows : 0;
    const [cellValues, setCellValues] = React.useState<string[]>(Array(totalCells).fill(""));
    const navigate = useNavigate();


    const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCellValues = [...cellValues];
        newCellValues[index] = event.target.value;
        setCellValues(newCellValues);
    }

    function onSubmit(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();
        console.log(cellValues);
        // if the cellValues is not filled completely, alert the user
        if (cellValues.includes("")){
            alert("Please fill all the cells");
        }
        // if the cellValues has repetitions, alert the user
        else if (new Set(cellValues).size !== cellValues.length){
            alert("Please fill unique values");
        }
        // if the cellValues contains values less than 1 or greater than rows*rows, alert the user
        else if (cellValues.some((value) => Number(value) < 1 || Number(value) > totalCells)){
            alert(`Please fill values between 1 and ${totalCells}`);
        }
        navigate("/play", {state : {cellValues, rows}});        
    }
    
    const autoGenereateBoard = () => {
        const tempArray = [];
        for (let i = 1; i <= totalCells; i++){
            tempArray.push(i.toString());
        }
        const shuffledArray = tempArray.sort(() => Math.random() - 0.5);
        setCellValues(shuffledArray);
        console.log(shuffledArray);
    }

    return (
        <>
            <h2>Bingo Board</h2>
            <p>Fill the board with values from 1 to {totalCells}</p>
            
            <Board rows = {rows} cellValues = {cellValues} onInputChange = {handleInputChange}/>

            <button onClick={() => setCellValues(Array(totalCells).fill(""))}>Clear Board</button>
            <button onClick = {autoGenereateBoard}>
                Autogenerate Board
            </button> 
            <button onClick={onSubmit}>
                Play
            </button>
        </>
    );
}

export default BoardSetup;