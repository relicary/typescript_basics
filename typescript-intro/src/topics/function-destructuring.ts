export interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation( {tax, products}: TaxCalculationOptions ): [number, number] {

    let total = 0;

    products.forEach( ({ price }) => {
        total += price
    });

    return [total, total * tax];
}