interface Address {
    street: string;
    country: string;
    city: string;
}

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}


export {};