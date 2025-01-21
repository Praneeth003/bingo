// This file contains the common functions that the computer player will use to play the game. The functions are:

export const autoGenereateBoard = (rows: number) => {
    const tempArray = [];
    for (let i = 1; i <= rows * rows; i++){
        tempArray.push(i.toString());
    }
    const shuffledArray = tempArray.sort(() => Math.random() - 0.5);
    return shuffledArray;
}

