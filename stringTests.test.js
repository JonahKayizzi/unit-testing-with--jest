const stringLength = require('./stringTests');
const reverseString = require('./stringTests');

test('String length is an integer', () => { 
    expect(typeof stringLength('Jonathan')).toBe('number');
 })

 test('String must be atleast 1 character long and not greater than 10', () => {
    expect(stringLength('Jonathan')).toBeGreaterThanOrEqual(1);
    expect(stringLength('Jonathan')).toBeLessThanOrEqual(10)
 })

 test('Reverse string should be same length', () => {
    const ourString = 'Jonathan'
    expect(reverseString(ourString)).toEqual(ourString.length);
 })
