import game, { getRandomNumber, getRandomNumberMinMax } from '../src/index.js';


const greeting = 'What number is missing in the progression?';

const getProgression = (lengthOfProgression, startOfProgression, stepOfProgression) => {
    const progression = [startOfProgression];
    for (let i = 1; i <= lengthOfProgression; i += 1) {
        const previousValue = progression[i - 1];
        progression.push(previousValue + stepOfProgression);
    }
    return progression;
};

const removeRandomElement = (progression, position) => {
    const value = progression[position];
    const newProgression = progression.slice();
    newProgression[position] = '..';
    return [newProgression, value];
};

const playRound = (maxNumber) => {
    const minLengthOfProgression = 5;
    const maxLengthOfProgression = 10;
    const progressionLength = getRandomNumberMinMax(minLengthOfProgression, maxLengthOfProgression);
    const progressionStart = getRandomNumber(maxNumber);
    const progressionStep = getRandomNumber(maxNumber);
    const removedIndex = getRandomNumber(progressionLength);
    const currentProgression = getProgression(progressionLength, progressionStart, progressionStep);
    const [progression, correctValue] = removeRandomElement(currentProgression, removedIndex);
    const question = progression.join(' ');
    const correctAnswer = String(correctValue);
    return [question, correctAnswer];
};

const brainProgression = () => {
    game(greeting, playRound);
};

export default brainProgression;