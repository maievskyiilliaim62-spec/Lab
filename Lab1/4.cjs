'use strict';

const items = [
  true,
  'hello',
  5,
  12,
  -200,
  false,
  false,
  'word',
  null,
  undefined,
  42n,
  Symbol('id'),
  { a: 1 },
  () => {},
];

const dynamicTypeCounts = {};

for (const item of items) {
  const type = typeof item;
  dynamicTypeCounts[type] = (dynamicTypeCounts[type] || 0) + 1;
}

console.dir(dynamicTypeCounts);

module.exports = { dynamicTypeCounts };
