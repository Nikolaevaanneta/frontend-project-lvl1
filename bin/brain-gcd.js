import readlineSync, { question } from 'readline-sync';
import { name } from './brain-games.js';

export default function gcd() {

    const min = 1;
    const max = 20;
    let result = 'correct!';
    const winResult = `Congratulations, ${name}!`;
    const assigment = 'Find the greatest common divisor of given numbers.';
    const nod = (x, y) => {
        while (y !== 0) {
            let tmp = x % y;
            x = y;
            y = tmp;
        }
        return x;
    }

    for (let i = 1; i < 4; i++) {
        const x = Math.ceil(Math.random() * (max - min)) + min;
        const y = Math.ceil(Math.random() * (max - min)) + min;
        const question = `Question: ${x} ${y}`;
        console.log(assigment);
        console.log(question);
        const answer = readlineSync.question('Your answer: ');
        let correctAnswer = nod(x, y);
        if (answer == correctAnswer) {
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