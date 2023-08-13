import flip from './kata7';

describe('Gravity Flip', () => {
  it.each([
    { direction: 'R', input: [3, 2, 1, 2], expected: [1, 2, 2, 3] },
    { direction: 'L', input: [1, 4, 5, 3, 5], expected: [5, 5, 4, 3, 1] },
  ])(
    'The sorting according to the incoming direction must be the same as the value in expected',
    ({ direction, expected, input }) => {
      const actual = flip(direction, input);

      expect(actual).toEqual(expected);
    },
  );
});
