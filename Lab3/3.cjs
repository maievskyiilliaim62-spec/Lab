'use strict';

const ipToInt = (ip = '127.0.0.1') =>
  ip
    .split('.')
    .reduce((acc, byte, index) => acc + (Number(byte) << ((3 - index) * 8)), 0);

console.log(ipToInt('127.0.0.1'));
console.log(ipToInt('10.0.0.1'));
console.log(ipToInt('192.168.1.10'));
console.log(ipToInt('165.225.133.150'));
console.log(ipToInt('0.0.0.0'));
console.log(ipToInt('8.8.8.8'));

module.exports = { ipToInt };
