import React from "react";
import { useState } from "react";

const PlayPage: React.FC = () => {

    const [row, setRow] = useState<number>();

    const recordInput = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setRow(Number(event.target.value));
    }

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();
        console.log(row);
    }

  return (
    <>
      <h1>Play Bingo</h1>
      <p>Enter a number between 3 to 7</p>
      <input type = "number" value = {row} placeholder="Enter the number of rows" onChange={recordInput}></input>
      <button onClick={handleSubmit}>Fill Board</button>
    </>
  );
}

export default PlayPage;