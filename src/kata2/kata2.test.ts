import distinct from './kata2';

describe('solution', () => {
  it('should handle array with one number', () => {
    expect(distinct([1])).toEqual([1]);
  });

  it('should handle array with two numbers but no duplicates', () => {
    expect(distinct([1, 2])).toEqual([1, 2]);
  });

  it('should handle array with two numbers and a duplicate', () => {
    expect(distinct([1, 1, 2])).toEqual([1, 2]);
  });
});
