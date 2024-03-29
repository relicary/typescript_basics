function addNumbers(a: number, b: number) : number {
    return a + b;
}

const result: number = addNumbers(1, 2);

const addNumbersArrow = (a: number, b: number) : number => {
    return a + b;
};

const result2: number = addNumbersArrow(1, 2);

const addNumbersArrowString = (a: number, b: number) : string => {
    return `${a + b}`;
};

const result3: string = addNumbersArrowString(1, 2);

function multiply (firstNumber: number, secondNumber?: number, base: number=2) : number {
    if (secondNumber !== undefined) {
        return firstNumber * secondNumber;
    }
    return firstNumber * base;
}

const result4: number = multiply(5);
const result5: number = multiply(5, 3);

console.log({result, result2, result3, result4, result5});

export {};