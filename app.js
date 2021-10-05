// import functions and grab DOM elements
import { answers } from './answers.js';
import { exampleQuestions } from './questions.js';

const exampleQuestion = document.getElementById('example-question');
const button = document.getElementById('button');
const answer = document.getElementById('answer');
// initialize global state
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
};

// set event listeners 
button.addEventListener('click', () => {
    const randomAnswer = getRandomNumber(answers.length);
    const randomQuestion = getRandomNumber(exampleQuestions.length);
    answer.textContent = answers[randomAnswer];
    exampleQuestion.placeholder = exampleQuestions[randomQuestion];

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
