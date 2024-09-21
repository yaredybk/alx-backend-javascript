const assert = require('assert');
const calculateNumber = require('./0-calcul');

const testCases = [
  [1, 3, 4],
  [1, 3.7, 5],
  [1.2, 3.7, 5],
  [1.5, 3.7, 6],
  [1.0, 2.0, 3],
  [1.0, 2.4, 3],
  [1.4, 2.4, 3],
  [1.4, 2.0, 3],
  [1.0, 2.5, 4],
  [2.6, 2.5, 6],
  [2.6, 2.0, 5],
  [2.499999, 3.499999, 5],
];

describe('calculateNumber', () => {
  testCases.forEach(([a, b, c]) => {
    it('floating point whole numbers', () => {
      assert.strictEqual(calculateNumber(a, b), c);
    });
  });
});
