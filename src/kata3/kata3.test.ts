import shortLongShort from './kata3';

describe('Basic tests', () => {
  it.each([
    { input1: '45', input2: '1', expected: '1451' },
    { input1: '13', input2: '200', expected: '1320013' },
    { input1: 'Soon', input2: 'Me', expected: 'MeSoonMe' },
    { input1: 'U', input2: 'False', expected: 'UFalseU' },
  ])('should pass basic test', ({ input1, input2, expected }) => {
    const actual = shortLongShort(input1, input2);

    expect(actual).toBe(expected);
  });
});
