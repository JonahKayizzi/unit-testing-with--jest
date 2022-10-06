const sum = require('./sum');

// toBe
/*
test('adds 1 + 2 to equal 3', () => {
    expect (sum(1,2)).toBe(3);
 });
 */
/*
//toEqual
 test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
 });
*/
 //not.toBe
/*
 test('adding positive numbers is not zero', () => {
    for(let a = 1; a < 10; a++){
        for(let b = 1; b < 10; b++){
            expect (a+b).not.toBe(0)
        }
    }
 })
*/
 //toBeNull
 //tobeUndefined
 //toBeDefined
 //toBeTruthy
 //toBeFalsy
/*
 test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
 }); */

 //numbers
 /*
 test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

  });
*/
  //toBeCloseTo() for floating points

  //Strings with regular expressions
  //toMatch()
/*
  test('there is no stop in Christopher', () => { 
    expect('Christopher').toMatch(/stop/);
   });
*/
   // arrays and iterables
   //toContain()

   //Exceptions
   //toThrow()

   function complileAndroidCode () {
    throw new Error ('you are using the wrong JDK')
   }

   test('compling android', () => {
    expect(() => complileAndroidCode()).toThrow(Error);
   })