// import functions and grab DOM elements
import { answers } from ''./answers.js';
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


  const getRandomNumber = (max)=>{
    return Math.floor(Math.random() * max)
  }

  const randomAnswer = getRandomNumber(answers.length);
  console.log(answers[randomAnswer]); 