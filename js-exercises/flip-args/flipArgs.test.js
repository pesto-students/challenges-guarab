// write your own test cases

import { flipArgs, flipped } from './flipArgs';

describe('Use flipped method', () => {
  test('should reverse the order of arguments', () => {
    expect(flipped('a','b','c','d')).toBe('d','c','b','a');
  });
});