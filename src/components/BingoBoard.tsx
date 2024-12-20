import React from "react";

interface BingoBoardProps {
    rows ?: number;
}

const BingoBoard: React.FC<BingoBoardProps> = ({ rows }) => {
    const totalCells  = rows ? rows * rows : 0;
    const [cellValues, setCellValues] = React.useState<string[]>(Array(totalCells).fill(""));

    const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCellValues = [...cellValues];
        newCellValues[index] = event.target.value;
        setCellValues(newCellValues);
    }

    const onSubmit = () => {
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
            <div className="grid-container" style = {{gridTemplateColumns: `repeat(${rows}, 0fr)`}}>
                {cellValues.map((cellValue, index) => (
                    <input
                    key={index}
                    className="grid-item"
                    type="text"
                    value={cellValue}
                    onChange = {handleInputChange(index)}
                    />
                ))}
            </div>

            <button onClick={() => setCellValues(Array(totalCells).fill(""))}>Clear Board</button>
            <button onClick = {autoGenereateBoard}
            >
                Autogenerate Board
            </button>
            <button onClick={onSubmit}>
                Play
            </button>
        </>
    );
}

export default BingoBoard;