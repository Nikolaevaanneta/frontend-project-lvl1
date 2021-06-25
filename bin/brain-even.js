import readlineSync, { question } from 'readline-sync';
import { name } from './brain-games.js';
//import * as game from 'src/index.js';

export default function brainEven() {
    const min = 1;
    const max = 20;
    const num = Math.ceil(Math.random() * (max - min)) + min;
    let result = "";
    let correctAnswer = "no";
    const question = "Question: " + num;
    const assigment = 'Answer "yes" if the number is even, otherwise answer "no".';



    console.log(assigment);
    console.log(question);
    const answer = readlineSync.question('Your answer: ');


    for (let i = 1; i < 4; i++) {
        if (num % 2 === 0 && answer === "yes" || num % 2 != 0 && answer === "no") {
            result = "Correct!";

        } else {
            correctAnswer = "yes";
            result = `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`;
        }
    }

    console.log(result);
}