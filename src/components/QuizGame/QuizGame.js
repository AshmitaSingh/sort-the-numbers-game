import React, { useEffect, useRef, useState } from "react";
import Result from "../Result/Result";
import "./QuizGame.css";
import "animate.css";
import { v4 as uuid } from "uuid";

function QuizGame() {
  const [numbers, setNumbers] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [removedInput, setRemovedInput] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showNewComponent, setShowNewComponent] = useState(false);
  const [count, setCount] = useState(0);
  const dragItem = useRef();
  const dragOverItem = useRef();

  useEffect(() => {
    // calls generateNumbers() method on the first render
    generateNumbers();
  }, []);

  const generateNumbers = () => {
    // Generate 5 random numbers
    const randomNumbers = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 100)
    );
    const nums = [...randomNumbers];
    // Sort the numbers in ascending order
    const sortNumbers = nums.sort((a, b) => a - b);

    setNumbers(randomNumbers);
    setSortedNumbers(sortNumbers);
    setUserInput(Array.from({ length: 5 }, () => ""));
    setRemovedInput([]);
    setIsCorrect(false);
    setShowNewComponent(false);
    setCount(0);
  };

  const handleDragStart = (event, number, index) => {
    dragItem.current = index;
    // Set the dragged number as data
    event.dataTransfer.setData("text/plain", number);
  };

  const handleDragEnter = (event, index) => {
    dragOverItem.current = index;
  };

  const handleDragOver = (event) => {
    // Allow dropping
    event.preventDefault();
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    // Get the dropped number from data and update the user input
    const droppedNumber = event.dataTransfer.getData("text/plain");
    const updatedUserInput = [...userInput];
    const updatedNumbers = [...numbers];
    if (droppedNumber !== null && droppedNumber !== "" && !isNaN(droppedNumber)) {
      updatedUserInput[index] = droppedNumber;
      const deletedInput = parseInt(updatedNumbers.splice(dragItem.current, 1));
    console.log("Deleted Element: ", deletedInput);
      if (deletedInput !== null && deletedInput !== "" && !isNaN(deletedInput)) {
        setRemovedInput([...removedInput, deletedInput]);
      }
    setNumbers(updatedNumbers);
    setUserInput(updatedUserInput);
    setCount(count + 1);
    }

    dragItem.current = null;
    dragOverItem.current = null;
    
  };

  const handleInputChange = (event, index) => {
    event.preventDefault();
    // Update the user input when the value is changed directly in the input field
    const updatedUserInput = [...userInput];
    updatedUserInput[index] = event.target.value;

    setUserInput(updatedUserInput);
  };

  const checkAnswer = (e) => {
    // To disable the button on click
    e.currentTarget.disabled = true;

    const newUserInput = userInput.map((ele) => parseInt(ele));
    const isCorrectAnswer = newUserInput.join(",") === sortedNumbers.join(",");
    setIsCorrect(isCorrectAnswer);
    setShowNewComponent(true);
  };

  const resetInput = () => {
    // Resets the input values so that the user can undo any mistakes
    setUserInput(Array.from({ length: 5 }, () => ""));
    setNumbers([...numbers, ...removedInput]);
    setRemovedInput([]);
    setCount(0);
    console.log("Inputs Array: " , userInput);
    console.log("Numbers Array: " , numbers);
    console.log("Removed Input Array: " , removedInput);
  };

  return (
    <div className="quiz-game">
      <h1 className="animate__animated animate__fadeInDown title">
        Arrange the values in Ascending Order
      </h1>
      <div className="inputs-container">
        {userInput.map((input, index) => (
          <div className="" key={uuid()}>
            <input
              readOnly
              key={index}
              type="text"
              value={input}
              placeholder="👇"
              onChange={(event) => handleInputChange(event, index)}
              draggable
              onDragEnter={(event) => handleDragEnter(event, index)}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, index)}
            />
          </div>
        ))}
      </div>
      <div className="numbers-container">
        {numbers.map((number, index) => (
          <div
            key={uuid()}
            className="number"
            draggable
            onDragStart={(event) => handleDragStart(event, number, index)}
          >
            {number}
          </div>
        ))}
      </div>
      <div className="buttons-container">
        <button
          className="check-answer"
          onClick={checkAnswer}
          disabled={count < 5}
        >
          Check Answer
        </button>
        <button
          className="check-answer"
          onClick={resetInput}
          disabled={(showNewComponent || count === 0) && "disabled"}
        >
          Reset Input
        </button>
        {showNewComponent && (
          <Result isCorrect={isCorrect} generateNumbers={generateNumbers} />
        )}
      </div>
    </div>
  );
}

export default QuizGame;
