import greet from './kata1';

describe("Jenny's greeting function", () => {
  it.each([
    { input: 'Jim', expected: 'Hello, Jim!' },
    { input: 'Jane', expected: 'Hello, Jane!' },
    { input: 'Simon', expected: 'Hello, Simon!' },
  ])('should greet some people normally', ({ input, expected }) => {
    const actual = greet(input);

    expect(actual).toBe(expected);
  });

  it('should greet Johnny a little bit more special', () => {
    const actual = greet('Johnny');

    expect(actual).toBe('Hello, my love!');
  });
});
