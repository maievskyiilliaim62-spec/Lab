'use strict';

const isType = (value, type) =>
  value !== undefined && value !== null && value.constructor === type;

const contract =
  (fn, ...types) =>
  (...args) => {
    const resultType = types[types.length - 1];
    const argTypes = types.slice(0, -1);
    for (let i = 0; i < argTypes.length; i++) {
      if (!isType(args[i], argTypes[i])) {
        throw new TypeError(
          `Argument ${i} of ${fn.name} must be ${argTypes[i].name}`,
        );
      }
    }
    const result = fn(...args);
    if (!isType(result, resultType)) {
      throw new TypeError(`Result of ${fn.name} must be ${resultType.name}`);
    }
    return result;
  };

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.dir(addNumbers(2, 3));

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.dir(concatStrings('Hello ', 'world!'));

try {
  addNumbers(2, '3');
} catch (err) {
  console.log(err.message);
}

module.exports = { contract };
