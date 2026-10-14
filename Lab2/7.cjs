'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Lucius Verus', phone: '+380445554434' },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) {
      return obj.phone;
    }
  }
};

module.exports = { phonebook, findPhoneByName };
