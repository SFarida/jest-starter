const stringLength = (string) => {
    const strLength = string.length;
    let charCount = 0

    if (strLength >= 1 && strLength <= 10) {
        for (let i = 0; i < string.length; i += 1) {
            charCount += 1
        }
        return charCount;
    } else {
        return false;
    }
}

const reverseString = (string) => {
    const strLength = string.length;
    let reverseStr = '';
    for (let i = strLength - 1; i >= 0; i -= 1) {
        reverseStr = reverseStr + string[i]
    }
    return reverseStr
}

class Calculator {

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    divide(a, b) {
        if(b === 0){
            return false;
        }else{
            return Number((a / b).toFixed(2));
        }
    }

    multiply(a, b) {
        return a * b;
    }
}

describe('String length', () => {
    test('length of "good" is 4', () => {
        expect(stringLength("good")).toBe(4);
    });

    test('length should be between 1 and 10', () => {
        expect(stringLength("not too good")).toBe(false)
    });
    test('reverse string for "good" is "doog"', () => {
        expect(reverseString("good")).toBe("doog")
    });
});

const calc = new Calculator()
describe("Calculator", () => {
    test('addition, 1 + 2 is 3', () => {
        expect(calc.add(1, 2)).toBe(3);
    })
    test('addition, 101 + 2 is 103', () => {
        expect(calc.add(101, 2)).toBe(103);
    })
    test('addition, 10 + 9 is 19', () => {
        expect(calc.add(10, 9)).toBe(19);
    })
    test('subtraction, 1 - 2 is -1', () => {
        expect(calc.subtract(1, 2)).toBe(-1);
    })
    test('subtraction, 101 - 2 is 99', () => {
        expect(calc.subtract(101, 2)).toBe(99);
    })
    test('subtraction, 2 - 1 is 1', () => {
        expect(calc.subtract(2, 1)).toBe(1);
    })
    test('division, 1 / 2 is 0.5', () => {
        expect(calc.divide(1, 2)).toBe(0.50);
    })
    test('division, 101 / 3 is 0.5', () => {
        expect(calc.divide(1, 2)).toBe(0.50);
    })
    test('division, 101 / 0 is not possible', () => {
        expect(calc.divide(101, 0)).toBe(false);
    })
    test('division, 0 / 3 is 0.00', () => {
        expect(calc.divide(0, 3)).toBe(0.00);
    })
    test('multiply, 2 * 3 is 6', () => {
        expect(calc.multiply(2, 3)).toBe(6);
    })
    test('multiply, 101 * 11 is 1111', () => {
        expect(calc.multiply(101, 11)).toBe(1111);
    })
    test('multiply, 0 * 3 is 0', () => {
        expect(calc.multiply(0, 3)).toBe(0);
    })
})


describe('Capotalize first letter in string', () => {
    test('"good" should return "Good"', () => {
        expect(capitalize("good")).toBe("Good");
    });
});

const capitalize = (string) => {
    let firstLetter = string[0];
    firstLetter = firstLetter.toUpperCase();
    return firstLetter + string.slice(1);
}

// module.exports = stringLength;