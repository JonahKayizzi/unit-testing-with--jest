class Calculator {
    constructor(number1, number2) {
      this.firstNo = number1;
      this.secondNo = number2;
    };

    add = (number1, number2) => number1 + number2;
    subtract = (number1, number2) => number1 - number2;
    divide = (number1, number2) => number1 / number2;
    multiply = (number1, number2) => number1 * number2;

}

const ourCalc = new Calculator();
const a = 3
const b = 5

describe('addition', () => {
    test('result should be great than or equal to either operands', () => {
       expect(ourCalc.add(a,b)).toBeGreaterThanOrEqual(a); 
     })

});

describe('subtraction', () => {
    test('result should be positive if a is greater than b', () => {
        if(a > b){
            expect(ourCalc.subtract(a,b)).toBeGreaterThan(0)
        }
    })

    test('result should be negative if a is less than b', () => {
        if(a < b){
            expect(ourCalc.subtract(a,b)).toBeLessThan(0)
        }
    })
})

describe('multiplication', () => {
    if(a !== 0 && b !== 0){
        test('either operand should be a factor of the result', () => {
            expect(ourCalc.multiply(a,b) % b).toEqual(0);
        })
    }
})

describe('division', () => {
    test('result is a fractions between 0 & 1 if a is less than b', () => {
        if(a < b){
            expect(Math.abs(ourCalc.divide(a,b))).toBeLessThan(1)
        }
    })

    test('result should be an integer in b is a factor of a', () => {
        if(a % b === 0){
            expect(ourCalc.divide(a,b) - Math.floor(ourCalc.divide(a,b))).toEqual(0);
        }else{
            expect(ourCalc.divide(a,b) - Math.floor(ourCalc.divide(a,b))).not.toEqual(0);
        }
    })

    test('result is 0 if a is 0', () => {
        if(a === 0){
            expect(ourCalc.divide(a,b)).toEqual(0);
        }
    })

})