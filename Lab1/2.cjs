'use strict';

const inc = (num) => {
  if (num && typeof num === 'object') {
    num.n++;
  }
};

const obj = { n: 5 };
inc(obj);
console.dir(obj);

module.exports = { inc };
