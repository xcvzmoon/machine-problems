import { sumParts } from './sum-parts';
import { getTotalAverageEarnings } from './bottle-collector';

const sumPartsTest: number[][] = [
  [0, 1, 3, 6, 10],
  [1, 2, 3, 4, 5, 6],
  [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358],
];

sumPartsTest.forEach((item) => console.log(sumParts(item)));

console.log(getTotalAverageEarnings(100, ['8 ABMRB 24.50']));
