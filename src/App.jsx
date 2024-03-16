import { useState, Component} from "react";
import "./App.css";
import FlashCard from "./Components/flashcard";

function App() {
  return (
    <div>
      <div className="title">
        <h1>Guess The Celebrity</h1>
        <h3>How many can you guess in a row?</h3>
      </div>
      <FlashCard></FlashCard>
    </div>
  );
};

export default App;
