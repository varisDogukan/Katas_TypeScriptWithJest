import basicOp from './kata8';

describe('basicOp', () => {
  it.each([
    { operation: '+', input1: 4, input2: 7, expected: 11 },
    { operation: '-', input1: 15, input2: 18, expected: -3 },
    { operation: '*', input1: 5, input2: 5, expected: 25 },
    { operation: '/', input1: 49, input2: 7, expected: 7 },
  ])('', ({ expected, input1, input2, operation }) => {
    const actual = basicOp(operation, input1, input2);

    expect(actual).toBe(expected);
  });
});
