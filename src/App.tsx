import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PlayPage from "./pages/SetupPage";
import SetupPage from "./pages/SetupPage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/setup" element={<SetupPage />} />
      <Route path="/play" element={<PlayPage />} />
    </Routes>
    </BrowserRouter>
  )
  
}
  
export default App;
