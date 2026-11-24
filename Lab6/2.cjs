'use strict';

const compose = (...fns) => {
  const handlers = { error: [] };
  const composed = (x) => {
    try {
      let result = x;
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
      return result;
    } catch (err) {
      for (const handler of handlers.error) {
        handler(err);
      }
      return undefined;
    }
  };
  composed.on = (name, handler) => {
    if (handlers[name]) {
      handlers[name].push(handler);
    }
    return composed;
  };
  return composed;
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;
const fail = () => {
  throw new Error('Something went wrong');
};

const f1 = compose(inc, twice, cube);
console.log(f1(5));

const f2 = compose(inc, inc);
console.log(f2(7));

const f3 = compose(inc, fail, cube);
f3.on('error', (e) => {
  console.log(e.message);
});
console.log(f3(5));

module.exports = { compose };
