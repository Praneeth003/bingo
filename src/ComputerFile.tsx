// This file has code to the logic of the computer player
import React from "react";
import { useEffect } from "react";
import Board from "./components/Board";

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
    const [computerMarkedCells, setComputerMarkedCells] = React.useState<string[]>([]);

    // Function to mark the cells as marked 
    const onMarking = (cellValue: string): void => {
        setComputerMarkedCells([...computerMarkedCells, cellValue]);
    }

    useEffect(() => {
        if (!initialized){
            console.log("Computer received rows:", rows);
            console.log("Initialized Computer Player");
            setComputerBoard(generateBoard(rows));
            setInitialized(true);       
        }
    }, [initialized]);

    // Logging the Computer Board
    useEffect(() => {
        console.log("Computer Board is:", computerBoard);  
    }, [computerBoard]);


    // Checking for the changes in the markedCells
    useEffect(() => {
        if (initialized){
            console.log("Computer received markedCells:", markedCells);
            // Mark the cells in the computer board

        }
    }, [markedCells]);

    return null;
}

export default ComputerFile;