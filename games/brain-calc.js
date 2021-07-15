import game, { getRandomNumber } from '../src/index.js';

const greeting = 'What is the result of the expression?';

const items = ['+', '-', '*'];
const playRound = (maxNumber) => {
  const x = getRandomNumber(maxNumber);
  const y = getRandomNumber(maxNumber);
  const operator = items[Math.ceil(Math.random() * 2)];
  const question = `${x} ${operator} ${y}`;
  // eslint-disable-next-line no-eval
  const correctAnswer = eval(question);
  const result = [question, correctAnswer];
  return result;
};

const brainCalc = () => {
  game(greeting, playRound);
};

export default brainCalc;
