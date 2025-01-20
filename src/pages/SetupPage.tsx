import React, { useState } from "react";
import BoardSetup from "../components/BoardSetup";

const SetupPage: React.FC = () => {
    const [row, setRow] = useState<number>(0);
    const [displayBoardSetup, setDisplayBoardSetup] = useState<boolean>(false);

    const recordInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setRow(Number(event.target.value));
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        console.log(row);
        setDisplayBoardSetup(true); 
    }

    return (
        <>
            {displayBoardSetup ? (
                <BoardSetup rows={row} /> // Display only the BingoBoard component
            ) : (
                <>
                    <h1>Play Bingo</h1>
                    <p>Enter a number between 3 to 7</p>
                    <input type="number" value={row} placeholder="Enter the number of rows" onChange={recordInput}></input>
                    <button onClick={handleSubmit}>Fill Board</button>
                </>
            )}
        </>
    );
}

export default SetupPage;