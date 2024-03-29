export class Person {
    
    constructor(
        public firstName: string,
        public lastName: string,
        private address?: string 
    ) {

    };
}

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public person: Person
    ) {

    };
}

const tony = new Person('Tony', 'Stark', 'New York');
const hero = new Hero('Ironman', 45, tony);

console.log({ hero });