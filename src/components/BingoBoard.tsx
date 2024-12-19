import React from "react";

interface BingoBoardProps {
    rows ?: number;
}

const BingoBoard: React.FC<BingoBoardProps> = ({ rows }) => {
    const totalCells  = rows ? rows * rows : 0;
    const [cellValues, setCellValues] = React.useState<string[]>(Array(totalCells).fill(""));
    
    function handleInputChange(index: number, value: any): void {
        console.log(index, value);
        const newCellValues = [...cellValues];
        newCellValues[index] = value;
        setCellValues(newCellValues);         
    }

    return (
        <div>
            <h2>Bingo Board</h2>
            <p>Number of rows: {rows}</p>
            <div className="grid-container" style = {{gridTemplateColumns: `repeat(${rows}, 0fr)`}}>
                {cellValues.map((cellValue, index) => (
                    <input
                    key={index}
                    className="grid-item"
                    type="text"
                    value={cellValue}
                    onChange={(event) => handleInputChange(index, event.target.value)}
                    />
                ))}
        </div>
        </div>
    );
}

export default BingoBoard;