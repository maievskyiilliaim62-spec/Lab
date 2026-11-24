'use strict';

const sum = (...args) => args.reduce((acc, value) => acc + value, 0);

console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));

module.exports = { sum };
