import readlineSync from 'readline-sync';
import brainGames from './brain-games.js';

export const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));
export const getRandomNumberMinMax = (min, max) => {
  const roundMin = Math.ceil(min);
  const roundMax = Math.floor(max);
  return Math.floor(Math.random() * (roundMax - roundMin)) + roundMin;
};

const processRound = (question, correctAnswer) => {
  console.log(`Question: ${question} `);
  const userAnswer = readlineSync.question('Your answer: ');
  // eslint-disable-next-line eqeqeq
  if (userAnswer == correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    return 'failed';
  }
  return 'win';
};

const game = (greeting, currentGameRound) => {
  const numOfRounds = 3;
  const maxNumber = 20;
  const username = brainGames();
  console.log(greeting);
  for (let i = 0; i < numOfRounds; i += 1) {
    const data = currentGameRound(maxNumber);
    const [question, correctAnswer] = data;
    const resultOfRound = processRound(question, correctAnswer);
    if (resultOfRound !== 'win') {
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export default game;
