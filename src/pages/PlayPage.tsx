import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Board from "../components/Board";
import ComputerFile from "../ComputerFile";

const PlayPage: React.FC = () => {
    const location = useLocation();
    const cellValues = location.state?.cellValues;
    const rows = location.state?.rows;
    const [markedCells, setMarkedCells] = useState<string[]>([]);

    function onMarking(index: number, cellValue: string){
        console.log("Marking from player", index, cellValue);
        setMarkedCells([...markedCells, cellValue]);
    }

    return(
        <>
        <Board cellValues = {cellValues} rows = {rows} onMarking = {onMarking} markedCells = {markedCells}/>
        <ComputerFile rows = {rows} markedCells = {markedCells}/>
        </>
    )
}

export default PlayPage;