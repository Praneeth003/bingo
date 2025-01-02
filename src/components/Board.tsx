import React from "react";

interface BingoBoardProps {
    rows ?: number;
    cellValues : string[];
    onInputChange ?: (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    onMarking ?: (index: number, cellValues: string) => void;
    markedCells ?: string[];
}

const Board: React.FC<BingoBoardProps> = ({ rows, cellValues, onInputChange, onMarking, markedCells }) => {
    const totalCells  = rows ? rows * rows : 0;

    return (
        <>
            <div className="grid-container" style = {{gridTemplateColumns: `repeat(${rows}, 0fr)`}}>
                {cellValues?.map((cellValue, index) => (
                    <input
                    key={index}
                    className={`grid-item ${markedCells?.includes(cellValue) ? "marked" : ""}`}
                    type="text"
                    value={cellValue}
                    onChange={onInputChange ? onInputChange(index): undefined}
                    readOnly={!onInputChange}
                    onClick={() => onMarking ? onMarking(index, cellValue) : undefined}
                    />
                ))}
            </div>

        </>
    );
}

export default Board;