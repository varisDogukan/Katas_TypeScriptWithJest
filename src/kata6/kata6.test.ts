import pipeFix from './kata6';

describe('Lario and Muigi Pipe Problem', () => {
  it.each([
    { input: [1, 2, 3, 5, 6, 8, 9], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { input: [1, 2, 3, 12], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    { input: [6, 9], expected: [6, 7, 8, 9] },
    { input: [-1, 4], expected: [-1, 0, 1, 2, 3, 4] },
    { input: [1, 2, 3], expected: [1, 2, 3] },
    { input: [2], expected: [2] },
  ])(
    'Values between two numbers should return an array in increments of 1.',
    ({ input, expected }) => {
      const actual = pipeFix(input);

      expect(actual).toEqual(expected);
    },
  );
});
