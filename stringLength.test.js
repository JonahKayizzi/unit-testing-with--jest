const stringLength = require('./stringLength');

test('String length is an integer', () => { 
    expect(typeof stringLength('Jonathan')).toBe('number');
 })

 test('String must be atleast 1 character long and not greater than 10', () => {
    expect(stringLength('Jonathan')).toBeGreaterThanOrEqual(1);
    expect(stringLength('Jonathan')).toBeLessThanOrEqual(10)
 })


