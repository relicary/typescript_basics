export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'John'
}

const passenger2: Passenger = {
    name: 'Jane',
    children: ['Leonard', 'Sheldon']
}

const printChildren = (passenger: Passenger) : number => {
    
    if(!passenger.children)
        return 0;

    return passenger.children!.length;

}

console.log(passenger1.name, printChildren(passenger1));
console.log(passenger2.name, printChildren(passenger2));