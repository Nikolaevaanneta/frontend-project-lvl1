import readlineSync, { question } from 'readline-sync';
//import { question } from 'readline-sync';
import { name } from './brain-games.js'

export default function calculator() {
    const min = 1;
    const max = 20;
    let result = '';
    const winResult = `Congratulations, ${name}!`
    const assigment = 'What is the result of the expression?';
    const items = ['+', '-', '*'];

    console.log(assigment);

    for (let i = 1; i < 4; i++) {
        const x = Math.ceil(Math.random() * (max - min)) + min;
        const y = Math.ceil(Math.random() * (max - min)) + min;
        const operator = items[Math.ceil(Math.random() * 2)];
        const exspression = `${x} ${operator} ${y}`;
        const correctAnswer = eval(exspression);
        const question = `Question: ${exspression}`;
        console.log(question);
        const answer = readlineSync.question('Your answer: ');

        if (answer == correctAnswer) {
            result = "Correct!";
            console.log(result);
            continue;
        } else {
            result = `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`;
            console.log(result);
            return;
        }

    }

    console.log(winResult);
}