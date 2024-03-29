interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation( {tax, products}: TaxCalculationOptions ): [number, number] {

    let total = 0;

    products.forEach( ({ price }) => {
        total += price
    });

    return [total, total * tax];
}

const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log('Total without taxes: ', total);
console.log('Tax: ', taxTotal);
console.log('Total with taxes: ', total + taxTotal);


export {};