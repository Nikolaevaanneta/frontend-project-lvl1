import game, { getRandomNumber } from '../src/index.js';

const greeting = 'Find the greatest common divisor of given numbers.';
const nod = (x, y) => {
  while (y !== 0) {
    const tmp = x % y;
    // eslint-disable-next-line no-param-reassign
    x = y;
    // eslint-disable-next-line no-param-reassign
    y = tmp;
  }
  return x;
};

const playRound = (maxNumber) => {
  const x = getRandomNumber(maxNumber);
  const y = getRandomNumber(maxNumber);
  const question = `Question: ${x} ${y}`;
  const correctAnswer = nod(x, y);
  const result = [question, correctAnswer];
  return result;
};

const gcd = () => {
  game(greeting, playRound);
};

export default gcd;
