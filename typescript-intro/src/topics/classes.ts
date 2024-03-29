export class Person {
    
    constructor(
        public name: string,
        private address?: string 
    ) {

    };
}

const superhero = new Person('Clark Kent', 'Metropolis');

console.log({ superhero });