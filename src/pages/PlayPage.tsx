import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Board from "../components/Board";

export default function PlayPage(){
    const location = useLocation();
    const cellValues = location.state?.cellValues;
    const rows = location.state?.rows;
    const [markedCells, setMarkedCells] = useState<number[]>([]);

    function onMarking(index: number){
        console.log(index);
        setMarkedCells(prev => [...prev, index]);
    }

    return(
        <>
        <Board cellValues = {cellValues} rows = {rows} onMarking = {onMarking} markedCells = {markedCells}/>
        </>
    )
}