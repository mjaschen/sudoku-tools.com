import { KillerCage } from '../src/killercage.js';

describe('KillerCage', () => {
  it('should return the triangular number for 9', () => {
    const killercage = new KillerCage(9);
    const result = killercage.getSum();
    expect(result).toBe(45);
  });
  it('should return the triangular number for 6', () => {
    const killercage = new KillerCage(6);
    const result = killercage.getSum();
    expect(result).toBe(21);
  });
});
