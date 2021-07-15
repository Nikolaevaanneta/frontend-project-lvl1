import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name? ');
  const username = readlineSync.question('');
  console.log(`Hello, ${username}!`);
  return username;
};
