// This file has code related to the logic of the computer player
import React from "react";
import { useEffect } from "react";

interface ComputerFileProps {
    rows?: number;
    markedCells?: string[];
}



const ComputerFile:React.FC<ComputerFileProps> = ({rows, markedCells}) => {
    useEffect(() => {
        console.log("Computer Plays");
        console.log(rows, markedCells);
        
    }, [markedCells]);
    return null;
}

export default ComputerFile;