import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage(){
    const navigate = useNavigate();

    function navigateToPlayPage(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();       
        navigate("/setup");
    }

    return (
    <div className="App">
      <h1 className="text-2xl font-bold underline">Bingo!!</h1>
      <p>Introduction to Bingo Game</p>
      <button onClick={navigateToPlayPage}>Start Game</button>
    </div>
  );
}