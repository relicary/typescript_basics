import { Product, taxCalculation } from "./function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150.0
    },
    {
        description: 'iPad Air',
        price: 250.0
    }
];

const tax: number = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log('Total without taxes: ', total);
console.log('Tax: ', taxTotal);
console.log('Total with taxes: ', total + taxTotal);

export {};