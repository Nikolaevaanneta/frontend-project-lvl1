import readlineSync, { question } from 'readline-sync';
import { name } from './brain-games.js'

export default function gameProgression() {
    const min = 1;
    const max = 20;
    const arrayLength = 10;
    const progression = [];
    const step = 1 + Math.ceil(Math.random() * max);
    let progressionItem = 1 + Math.ceil(Math.random() * arrayLength);
    let result = '';
    const winResult = `Congratulations, ${name}!`
    const assigment = 'What number is missing in the progression?';

    while (progression.length !== arrayLength) {
        progression.push(progressionItem);
        progressionItem += step;
    }
    const randomIndex = Math.ceil(Math.random() * (arrayLength - min) + min);
    const correctAnswer = progression[randomIndex];
    progression[randomIndex] = "..";
    progression.toString()
        .replace("[", "")
        .replace("]", "")
        .replace(",", "");
    console.log(assigment);

    for (let i = 1; i < 4; i++) {
        const question = `Question: ${progression}`;
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