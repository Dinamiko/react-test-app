import {sum, multiply} from '../../utils/math';

test('sum', () => {
    expect(sum(1, 2)).toBe(3);
});

test('multiply', () => {
    expect(multiply(1, 2)).toBe(2);
});
