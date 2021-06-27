import readlineSync from 'readline-sync';
import { name } from './brain-games.js';
//import * as game from 'src/index.js';

export default function brainEven() {
    const min = 1;
    const max = 20;

    let result = "";
    let correctAnswer = "no";
    const winReuslt = `Congratulations, ${name}!`;
    const assignment = 'Answer "yes" if the number is even, otherwise answer "no".';

    console.log(assignment);

    for (let i = 1; i < 4; i++) {
        let num = Math.ceil(Math.random() * (max - min)) + min;
        let question = "Question: " + num;
        console.log(question);
        const answer = readlineSync.question('Your answer: ');

        if (num % 2 === 0 && answer === "yes" || num % 2 != 0 && answer === "no") {
            result = "Correct!";
            console.log(result);
            continue;
        } else {
            correctAnswer = "yes";
            result = answer + " is wrong answer ;(. Correct answer was " + correctAnswer +
                ".\nLet is try again, " + name + "!";
            console.log(result);
            return;
        }

    }
    console.log(winReuslt);
}