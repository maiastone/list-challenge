const assert = require('chai').assert
const { add, getDiffBetween } = require('./scripts.js')

describe('Challenge', () => {
  it('should add 2 to a number', () => {
    let num = 3;
    let answer = 5;
    assert.deepEqual(add(num), answer);
  });
});

describe('getDiffBetween function', () => {
  it('should handle an change to user data', () => {
    const list = [
      {
        id       : 1,
        name     : 'Barbara',
        quantity : 3,
      },
      {
        id       : 2,
        name     : 'Tom',
        quantity : 0,
      },
      {
        id       : 3,
        name     : 'Sam',
        quantity : 1,
      },
    ];
    const updatedList = [
  // barb's name is changing
      {
        id       : 1,
        name     : 'Barb',
        quantity : 3,
      },

      // sam's quantity is changing
      {
        quantity : 8,
        name     : 'Sam',
        id       : 3,
      },

      // tom has been deleted

      // nelson is being added
      {
        name     : 'Nelson',
        id       : 4,
        quantity : 6,
      },
    ];
    const output = [
      {
        type     : 'CHANGE',
        id       : 1,
        name     : 'Barb',
      },
      {
        type     : 'CHANGE',
        id       : 3,
        quantity : 8,
      },
    ];
    assert.deepEqual(getDiffBetween(list, updatedList), output)
  });
});
