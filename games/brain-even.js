import game, { getRandomNumber } from '../src/index.js';

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const playRound = (maxNumber) => {
    const number = getRandomNumber(maxNumber);
    const correctAnswer = getCorrectAnswer(number);
    return [number, correctAnswer];
};

const brainEven = () => {
    game(greeting, playRound);
};

export default brainEven;