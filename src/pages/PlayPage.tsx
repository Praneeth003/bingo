import React from "react";
import { useLocation } from "react-router-dom";
import Board from "../components/Board";

export default function PlayPage(){
    const location = useLocation();
    const cellValues = location.state?.cellValues;
    const rows = location.state?.rows;

    function onMarking(index: number){
        console.log(index);
    }

    return(
        <>
        <Board cellValues = {cellValues} rows = {rows} onMarking = {onMarking}/>
        </>
    )
}