#!/usr/bin/env node

import readlineSync from 'readline-sync';
import brainEven from './brain-even.js';

console.log('Welcome to the Brain Games!');
console.log('May I have your name? ');
export const name = readlineSync.question('');
console.log(`Hello, ${name}!`);

brainEven();