const reversedString = require('./index2');

test('properly return reversed string', () => {
    expect(reversedString('tired')).toBe('derit');
})