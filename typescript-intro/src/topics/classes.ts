export class Person {
    public name: string;
    public address?: string;

    constructor() {
        this.name='Hal Jordan';
        this.address='Coast City'
    };
}

const greenLantern = new Person();

console.log({ greenLantern });