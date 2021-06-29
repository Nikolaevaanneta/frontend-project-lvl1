#!/usr/bin/env node

import readlineSync from 'readline-sync';
import calculator from './brain-calc.js';
import brainEven from './brain-even.js';
import gcd from './brain-gcd.js';
import gameProgression from './brain-progression.js';
import brainPrime from './brain-prime.js';

console.log('Welcome to the Brain Games!');
const text = readlineSync.question('Выберите игру: ');
console.log('May I have your name? ');
export const name = readlineSync.question('');
console.log(`Hello, ${name}!`);
switch (text) {
    case ('brain-even'):
        brainEven();
        break;
    case ('brain-calc'):
        calculator();
        break;
    case ('brain-gcd'):
        gcd();
        break;
    case ('brain-progression'):
        gameProgression();
        break;
    case ('brain-prime'):
        brainPrime();
        break;
}