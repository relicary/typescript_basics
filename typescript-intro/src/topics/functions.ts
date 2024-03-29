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

console.log({result, result2, result3});

export {};