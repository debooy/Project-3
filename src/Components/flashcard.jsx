import React, { Component, useState } from "react";
import CardQuestions from "./flashcard-questions.json";
import "./flashcard.css";

const FlashCard = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    const currentQuestion =
      CardQuestions["flashcard-questions"][currentQuestionIndex];
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowMessage(true);
    setUserAnswer("");
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setShowMessage(false);
    setIsFlipped(false);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, CardQuestions["flashcard-questions"].length - 1)
    );
    setShowMessage(false);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(
      Math.random() * CardQuestions["flashcard-questions"].length
    );
    setCurrentQuestionIndex(randomIndex);
    setShowMessage(false);
    setIsFlipped(false);
  };

  const currentQuestion =
    CardQuestions["flashcard-questions"][currentQuestionIndex];

  return (
    <div>
      <div
        className={`flashcard ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        {isFlipped ? (
          <div className="flashcard-back">
            <p>{currentQuestion.answer}</p>
          </div>
        ) : (
          <div className="flashcard-front">
            <h3>{currentQuestion.question}</h3>
          </div>
        )}
      </div>
      <form onSubmit={handleAnswerSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      {showMessage && (
        <p>{isCorrect ? "Correct!" : "Wrong answer. Try again."}</p>
      )}
      <div>
        <button className="flashcard-button" onClick={handlePrevious}>
          Previous
        </button>
        <button className="flashcard-button" onClick={handleNext}>
          Next
        </button>
        <button className="flashcard-button" onClick={handleRandom}>Random</button>
      </div>
    </div>
  );
};

export default FlashCard;
