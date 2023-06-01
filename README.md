# Sort The Numbers - Quiz Game

The numbers quiz game is a web-based game where the user is given 5 random values and needs to sort them in ascending order. The game includes drag and drop functionality to arrange the numbers, a check button to verify the user's answer and a reset-input button to reset the input values. After checking the answer, the user is shown the result, and they have the option to reset the game and try again with new random numbers.

## Components

The quiz game consists of two main components:

1. QuizGame.js: This component handles the main logic and rendering of the quiz game.
2. Result.js: This component displays the result and provides the option to reset the game.

### QuizGame.js

#### Overview

The `QuizGame` component is responsible for rendering the game interface, generating random numbers, handling drag and drop functionality, and checking the user's answer.

#### State Variables

The `QuizGame` component manages the following state variables:

- `numbers`: An array of 5 random numbers.
- `userInput`: An array representing the user's input for each number.
- `sortedNumbers`: An array of the numbers sorted in ascending order.
- `removedInput`: An array of removed elements from the numbers container.
- `isCorrect`: A boolean indicating whether the user's answer is correct or not.
- `showNewComponent`: A boolean indicating whether to show the `Result` component.
- `count`: A counter variable to keep track of the number of attempts.

#### Methods

The `QuizGame` component defines the following methods:

- `generateNumbers()`: Generates 5 random numbers and sorts them in ascending order. It initializes the state variables.
- `handleDragStart(event, number, index)`: Handles the drag start event when a number is dragged. It sets the dragged number as data.
- `handleDragEnter(event, index)`: Handles the drag enter event when a number is dragged over a drop area.
- `handleDragOver(event)`: Handles the drag over event to allow dropping.
- `handleDrop(event, index)`: Handles the drop event when a number is dropped into a drop area. It updates the user input and the remaining numbers.
- `handleInputChange(event, index)`: Handles the change event when the input field is modified.
- `checkAnswer(e)`: Handles the check answer event. It compares the user's input with the sorted numbers and sets the `isCorrect` variable accordingly. It also shows the `Result` component by setting `showNewComponent` to true.
- `resetInput()`: Resets the input values so that the user can undo any mistakes.

#### Rendering

The `QuizGame` component renders the following elements:

- Title: Displaying the game title.
- Inputs: An array of input fields where the user can drag and drop numbers.
- Numbers: An array of draggable numbers that the user can sort.
- Check Answer Button: A button to check the user's answer.
- Reset Input Button: A button to reset the user's answer.
- Result Component: Conditionally rendered based on the `showNewComponent` state variable.

### Result.js

#### Overview

The `Result` component is responsible for displaying the result of the quiz game and providing the option to reset the game.

#### Props

The `Result` component receives the following props:

- `isCorrect`: A boolean indicating whether the user's answer is correct or not.
- `generateNumbers`: A function to generate new random numbers in the `QuizGame` component.

#### Methods

The `Result` component defines the following methods:

- `resetGame()`: Resets the game by generating new random numbers and resetting the state variables.

#### Rendering

The `Result` component renders the following elements:

- Result Message: Displaying a correct or incorrect message based on the `isCorrect` prop.
- Reset Button: A button to reset the game and generate new random numbers.

## How the Game Works

1. When the QuizGame component is mounted, it generates 5 random numbers and sorts them in ascending order.
2. The user can drag and drop the numbers from the "Numbers" section into the fields in the "Inputs" section.
3. Once the user starts filling the input section, the "Reset Input" button is enabled to reset the input fields just in case, the user wants to undo any mistakes.
4. After filling all the fields in the input section, the "Check Answer" button is enabled.
5. When the user clicks the "Check Answer" button, the user's input is compared with the sorted numbers.
6. If the user's input matches the sorted numbers, the `isCorrect` state variable is set to `true`, and the Result component is shown with a `CORRECT !!!` result message.
7. If the user's input does not match the sorted numbers, the `isCorrect` state variable is set to `false`, and the Result component is shown with an `INCORRECT !!!` result message.
8. In the Result component, the user can click the "Reset Game" button to generate new random numbers and reset the game.
9. After resetting the game, the user can play again with different random numbers.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- HTML5: The markup language used for structuring the web pages.
- CSS3: The style sheet language used for designing the web pages.

## Usage

To run the quiz game on your local machine, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the command: `npm install`.
4. Start the development server by running the command: `npm start`.
5. Open your web browser and visit `http://localhost:3000` to access the quiz game.
