// This file has code related to the logic of the computer player
import React from "react";
import { useEffect } from "react";

interface ComputerFileProps {
    rows: number;
    markedCells?: string[];
}


const generateBoard = (rows: number): string[] => {
    const tempArray = [];
    for (let i = 1; i <= rows * rows; i++){
        tempArray.push(i.toString());
    }
    const shuffledArray = tempArray.sort(() => Math.random() - 0.5);
    return shuffledArray;
}

const ComputerFile:React.FC<ComputerFileProps> = ({rows, markedCells}) => {
    const [initialized, setInitialized] = React.useState<boolean>(false);
    const [computerBoard, setComputerBoard] = React.useState<string[]>([]);

    useEffect(() => {
        if (!initialized){
            console.log("Initialized Computer Player");
            setComputerBoard(generateBoard(rows));
            setInitialized(true);
            
        }
    }, [initialized, rows]);

    useEffect(() => {
        console.log("Computer Plays");
        console.log(rows, markedCells);  
    }, [markedCells]);
    return null;
}

export default ComputerFile;