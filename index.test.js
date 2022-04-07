const stringLenght = require('./index');

test('properly compare the string length', () => {
  expect(stringLenght('codin')).toBe(5);
});

