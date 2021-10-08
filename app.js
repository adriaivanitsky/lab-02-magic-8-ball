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

    // if 4 in the array, then font-size = 0.7rem;
    // else 

    answer.textContent = answers[randomAnswer];
    exampleQuestion.placeholder = exampleQuestions[randomQuestion];

    if(randomAnswer === 4 || randomAnswer === 10){
        answer.style.fontSize = '0.7rem';
        answer.style.marginTop = '50px';
    } else {
        answer.style.fontSize = '0.9rem';
        answer.style.marginTop = '100px';
    }
});

  // answers 4 and 10 are too large! Let's adjust font-size to 0.7rem