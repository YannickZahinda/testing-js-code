const capitalize = require("./index4")

test('Should capitalize the first letter', ()=>{
    expect(capitalize('proper')).toBe('Proper');
})