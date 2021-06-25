import readlineSync, { question } from 'readline-sync';
import { name } from './brain-games.js';

export default function gcd() {
    const min = 1;
    const max = 20;
    const x = Math.ceil(Math.random() * (max - min)) + min;
    const y = Math.ceil(Math.random() * (max - min)) + min;

    let correctAnswer;
    let result;
    const question = "Question: " + x + "" + y;
    const assigment = 'Find the greatest common divisor of given numbers.';



    console.log(assigment);
    console.log(question);
    const answer = readlineSync.question('Your answer: ');


}