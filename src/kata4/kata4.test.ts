import findMultiples from './kata4';

describe('Basic tests', () => {
  it.each([
    { input1: 5, input2: 25, expected: [5, 10, 15, 20, 25] },
    { input1: 1, input2: 2, expected: [1, 2] },
    { input1: 5, input2: 7, expected: [5] },
    { input1: 4, input2: 27, expected: [4, 8, 12, 16, 20, 24] },
    { input1: 11, input2: 54, expected: [11, 22, 33, 44] },
  ])('should pass basic test', ({ input1, input2, expected }) => {
    const actual = findMultiples(input1, input2);

    expect(actual).toEqual(expected);
  });
});
