const groupDivider = require('../groupDivider');
test('CASE#1: ', () => {
    expect(groupDivider()).toBe('C')
})

test('CASE#1: Positive Number as Input => ', () => {
    // const romanconverter = numberConverter(1234);
    expect(numberConverter(101)).toBe('CI')
})