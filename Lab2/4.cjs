'use strict';
const average = (a, b) => (a + b) / 2;
const square = (x) => x * x;
const cube = (x) => x * x * x;
const calculate = () => {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    const sq = square(i);
    const cb = cube(i);
    const avg = average(sq, cb);
    result.push(avg);
  }
  return result;
};

module.exports = { average, square, cube, calculate };
