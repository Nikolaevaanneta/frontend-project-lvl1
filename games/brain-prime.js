import game, { getRandomNumber } from '../src/index.js';

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';
const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
        if (num % i === 0) return false;
    }
    return num > 1;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');
const playRound = (maxNumber) => {
    const question = getRandomNumber(maxNumber);
    const correctAnswer = getCorrectAnswer(question);
    return [question, correctAnswer];
};

const brainPrime = () => {
    game(greeting, playRound);
};

export default brainPrime;