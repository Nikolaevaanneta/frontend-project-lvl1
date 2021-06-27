#!/usr/bin/env node

import readlineSync from 'readline-sync';
import calculator from './brain-calc.js';
import brainEven from './brain-even.js';
import gcd from './brain-gcd.js';

console.log('Welcome to the Brain Games!');
console.log('May I have your name? ');
export const name = readlineSync.question('');
console.log(`Hello, ${name}!`);

//brainEven();
calculator();
//gcd();