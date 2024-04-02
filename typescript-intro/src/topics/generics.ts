export function whatsMyType<T>( argument : T ) : T {
    return argument;
}

let amIString = whatsMyType('Hola Mundo');
console.log(amIString.split(' '));

let amINumber = whatsMyType(100);
console.log(amINumber.toFixed());

let amIArray = whatsMyType([1,2,3,4]);
console.log(amIArray.join('-'));