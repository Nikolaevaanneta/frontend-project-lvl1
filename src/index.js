import { name } from './brain-games.js';

export default function game() {
    const min = 1;
    const max = 20;
    const num = Math.ceil(Math.random() * (max - min)) + min;
    let result = `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`;
    let correctAnswer = "";
    let question = "Question: ";
    const winReuslt = `Congratulations, ${name}!`;
    const assigment = 'Answer "yes" if the number is even, otherwise answer "no".';

    const game = () => {
        for (let i = 1; i < 4; i++) {
            if (answer == correctAnswer) {
                result = "Correct!";
                console.log(result);
                continue;

            } else {
                return result;
            }
        }
        console.log(winResult);
    }
}