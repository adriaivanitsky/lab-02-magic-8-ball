// import functions and grab DOM elements
import { answers } from './answers.js';

const exampleQuestion = document.getElementById('example-question');
const button = document.getElementById('button');
const answer = document.getElementById('answer');
// initialize global state
const getRandomNumber = (max)=>{
  return Math.floor(Math.random() * max);
}

// set event listeners 
button.addEventListener('click', ()=>{
  const randomAnswer = getRandomNumber(answers.length);
  console.log(answers[randomAnswer]); //get the value of the answer
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
