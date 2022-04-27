import reverseString from '../src/reverseStr';

test('reverseString: Empty string', () => {
    expect(reverseString('')).toBe('');
});

test('reverseString: Normal characters', () => {
    expect(reverseString('courgette')).toBe('ettegruoc');
});

test('reverseString: Other normal characters', () => {
    expect(reverseString('Vietnam')).toBe('manteiV');
});