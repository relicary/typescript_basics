export class Person {
    public name: string;
    public address?: string;

    constructor(name: string, address?: string) {
        this.name = name;
        this.address = address;
    };
}

const greenLantern = new Person('Green Lantern', 'Coast City');

console.log({ greenLantern });