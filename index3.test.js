const MyCalculator = require('./index3');
let operation = new MyCalculator(8, 2);

test('suposed to provide addition result', () => {
    expect(operation.addition()).toBe(10);
})

test('properly provide multiplication result', () => {
    expect(operation.multiply()).toBe(16);
})

test('properly provide substraction result', () => {
    expect(operation.substrac()).toBe(6);
})

test('properly provide division result', () => {
    expect(operation.divide()).toBe(4)
})