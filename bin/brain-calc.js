import readlineSync, { question } from 'readline-sync';
import { name } from './brain-games.js'

export default function calculator() {
    const min = 1;
    const max = 20;
    const x = Math.ceil(Math.random() * (max - min)) + min;
    const y = Math.ceil(Math.random() * (max - min)) + min;
    const items = ['+', '-', '*'];
    let correctAnswer;
    let result;
    const question = "Question: ";
    const assigment = 'What is the result of the expression?';



    console.log(assigment);
    console.log(question);
    const answer = readlineSync.question('Your answer: ');


    for (let i = 1; i < 4; i++) {
        if (i) {
            result = "Correct!";

        } else {

            result = `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`;
        }
    }

    console.log(result);

}