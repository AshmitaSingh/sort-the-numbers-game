import React from "react";
import confetti from "../../assets/confetti1.png";
import wrong from "../../assets/cancel.png";
import "animate.css";
import "./Result.css";

function Result({ isCorrect, generateNumbers }) {
  const resetGame = () => {
    // Reset the game to generate new numbers
    generateNumbers();
  };

  return (
    <div className="container">
      <div>
        {isCorrect ? (
          <div className="main">
            <img
              className="animate__animated animate__bounceIn confetti"
              src={confetti}
              alt="confetti"
            />
            <p className="animate__animated animate__bounceIn result correct">
              CORRECT !!!
            </p>
            <img
              className="animate__animated animate__bounceIn confetti"
              src={confetti}
              alt="confetti"
            />
          </div>
        ) : (
          <div className="main">
            <img
              className="animate__animated animate__rotateIn wrong"
              src={wrong}
              alt="wrong"
            />
            <p className="animate__animated animate__shakeX result incorrect">
              INCORRECT !!!
            </p>
            <img
              className="animate__animated animate__rotateIn wrong"
              src={wrong}
              alt="wrong"
            />
          </div>
        )}
      </div>
      <button className="reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default Result;
