import addLength from './kata5';

describe('Sample Tests', () => {
  it.each([
    { input: 'apple ban', expected: ['apple 5', 'ban 3'] },
    { input: 'you will win', expected: ['you 3', 'will 4', 'win 3'] },
  ])('should pass basic test', ({ input, expected }) => {
    const actual = addLength(input);

    expect(actual).toEqual(expected);
  });
});
