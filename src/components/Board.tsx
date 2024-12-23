import React from "react";

interface BingoBoardProps {
    rows ?: number;
    cellValues : string[];
    onInputChange: (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Board: React.FC<BingoBoardProps> = ({ rows, cellValues, onInputChange }) => {
    const totalCells  = rows ? rows * rows : 0;

    return (
        <>
            <div className="grid-container" style = {{gridTemplateColumns: `repeat(${rows}, 0fr)`}}>
                {cellValues.map((cellValue, index) => (
                    <input
                    key={index}
                    className="grid-item"
                    type="text"
                    value={cellValue}
                    onChange={onInputChange(index)}
                    />
                ))}
            </div>

        </>
    );
}

export default Board;