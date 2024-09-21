const assert = require('assert');
const calculateNumber = require('./1-calcul');

const testCases = [
  [1, 3, 'SUM', 4],
  [1, 3.7, 'SUM', 5],
  [1.2, 3.7, 'SUM', 5],
  [1.5, 3.7, 'SUM', 6],
  [1.0, 2.0, 'SUM', 3],
  [1.0, 2.4, 'SUM', 3],
  [1.4, 2.4, 'SUM', 3],
  [1.4, 2.0, 'SUM', 3],
  [1.0, 2.5, 'SUM', 4],
  [2.6, 2.5, 'SUM', 6],
  [2.6, 2.0, 'SUM', 5],
  [2.499999, 3.499999, 'SUM', 5],
  [1, 3, 'SUBTRACT', 2],
  [1, 3.7, 'SUBTRACT', 3],
  [1.2, 3.7, 'SUBTRACT', 3],
  [1.5, 3.7, 'SUBTRACT', 2],
  [1.0, 2.0, 'SUBTRACT', 1],
  [1.0, 2.4, 'SUBTRACT', 1],
  [1.4, 2.4, 'SUBTRACT', 1],
  [1.4, 2.0, 'SUBTRACT', 1],
  [1.0, 2.5, 'SUBTRACT', 2],
  [2.6, 2.5, 'SUBTRACT', 0],
  [2.6, 2.0, 'SUBTRACT', -1],
  [2.499999, 3.499999, 'SUBTRACT', 1],
  [3, 1, 'DIVIDE', 3],
  [3.7, 1, 'DIVIDE', 4],
  [3.7, 1.2, 'DIVIDE', 4],
  [3.7, 1.5, 'DIVIDE', 2],
  [2.0, 1.0, 'DIVIDE', 2],
  [2.4, 1.0, 'DIVIDE', 2],
  [2.4, 1.4, 'DIVIDE', 2],
  [2.0, 1.4, 'DIVIDE', 2],
  [2.5, 1.0, 'DIVIDE', 3],
  [2.5, 2.6, 'DIVIDE', 1],
  [2.6, 2, 'DIVIDE', 1.5],
  [3.499999, 2.499999, 'DIVIDE', 1.5],
  [2.0, 0, 'DIVIDE', 'Error'],
];

describe('calculateNumber', () => {
  testCases.forEach(([a, b, c, d]) => {
    it(`test ${a}, ${b}, ${c}:`, () => {
      assert.strictEqual(calculateNumber(c, a, b), d);
    });
  });
});
