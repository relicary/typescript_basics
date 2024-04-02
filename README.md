# TypeScript Basics

These notes are based in the trainings given by [Fernando Herrera](https://github.com/Klerith) and his training [Angular de cero a experto](https://cursos.devtalles.com/courses/angular)

## Entorno de pruebas

El primer paso es la creación de un proyecto de [**VITE**](https://www.npmjs.com/package/vite)

```bash
$> npm create vipe
    ? Project name: typescript-intro
    ? Select a framework: Vanilla
    ? Select a variant: TypeScript
$> cd typescript-intro
$> npm install
    ...
$> npm run dev

    VITE v5.1.4  ready in 384 ms
    
        ➜  Local:   http://localhost:5173/
        ➜  Network: use --host to expose
        ➜  press h + enter to show help
```

* El fichero ```package.json``` es una serie de definiciones de cómo es nuestro proyecto. Por ejemplo, el script ```dev``` que se ha ejecutado en el código superior.
* Con la orden ```npm run dev``` se levanta un servidor Vite sobre el que se trabaja.

La utilidad de **ViTE** es que cuando se realiza un cambio en un fichero TS, éste se refresca automáticamente.

## Declaración de tipos

Palabras reservadas

* ```let```
* ```const```

Cómo declarar variables

* Podemos definir el tipo de cada variable.
* Podemos indicar que una variable puede tener más de un tipo.
* Una variable puede ser de un tipo o un valor constante.

## Imports y exports

Al final de cada fichero creado, se añade la línea:

```typescript
export {};
```

Y de ese modo pueden leerse en otros ficheros mediante la cabecera

```typescript
import './topics/basic-types.ts'
```

## Arrays, Objects y Interefaces

Los **arrays** pueden contener elementos de varios tipos diferentes.

```typescript
let skills = ['Bash', 'Counter', 'Healing', true, 123];
```

Pero se puede forzar un único tipo en su declaración

```typescript
let skills: string[] = ['Bash', 'Counter', 'Healing'];
```

Se pueden crear objetos pero no se pueden definir en ellos los tipos de sus campos

```typescript
const strider = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
};
```

Si la declaración de tipos es necesaria, se usan las **interfaces** que es el equivalente a definir un Tipo complejo

```typescript
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
};

// Declaración de una variable tipo Character

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
};
```

## Funciones básicas

Existen las funciones estándar. Cada parámetro puede declararse o inferirse. Por claridad, se suelen especificar tanto los parámetros como el tipo de retorno.

```typescript
function addNumbers(a: number, b: number) : number {
    return a + b;
}

const result: number = addNumbers(1, 2);
```
### Lambdas

Las funciones se pueden declarar también como lambdas

```typescript
const addNumbersArrow = (a: number, b: number) : number => {
    return a + b;
};

const result: number = addNumbersArrow(1, 2);
```

Y aplicar el casting al resultado

```typescript
const addNumbersArrowString = (a: number, b: number) : string => {
    return `${a + b}`;
};

const result: string = addNumbersArrowString(1, 2);
```

### Argumentos de tipo default u opcionales

También pueden declararse los argumentos como opcionales o con valores por defecto.

```typescript
function multiply (firstNumber: number, secondNumber?: number, base: number=2) : number {
    if (secondNumber !== undefined) {
        return firstNumber * secondNumber;
    }
    return firstNumber * base;
}

const result4: number = multiply(5); // 10

const result5: number = multiply(5, 3); // 15
```

### Funciones e interfaces

Las funciones pueden declararse también dentro de una interface.

```typescript
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
};

const strider : Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Heal points ${this.hp}`);
    }
};
```

## Objetos

### Destructuración

La **destructuración** consiste en poder tomar los campos que nos interesan de una interfaz y renombrarlos para facilitar la lectura de los mismos.

```typescript
interface Details {
    author: string;
    year: number;
}

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 255,
    song: "Back In Black",
    details: {
        author: "Angus Young, Malcolm Young, Brian Johnson",
        year: 1980
    }
}

const { song, songDuration:duration, details } = audioPlayer;
const { author } = details;

console.log('Song: ', song);
console.log('Duration: ', duration);
console.log('Author: ', author);
```

#### Arrays

También pueden destructurarse arrays, incluso poniendo valores por defecto o ignorando alguno.

```typescript
const [, vegeta, trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];

console.log("Character 2: ", vegeta); // Character 2: Vegeta
console.log("Character 3: ", trunks); // Character 3: Not found
```

#### Argumentos de función

La destructuración se puede aplicar también a los argumentos de las funciones.

```typescript
function taxCalculation( {tax, products}: TaxCalcultaionOptions ): [number, number] {

    let total = 0;

    products.forEach( ({ price }) => {
        total += price
    });

    return [total, total * tax];
}
```

## Imports & Exports

Es la forma de declarar módulos para que puedan usarlos otros ficheros.

Se realiza desde dos lados:

1. Los elementos de un fichero TS que debe poderse leer, vienen acompañados de la palabra ```export```
2. Los ficheros que usen esos elementos, debe declarar al inicio su disposición con la palabra ```import```

```typescript
export interface Product {
    description: string;
    price: number;
}
```

```typescript
import { Product } from './function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    },
];
```

> **_NOTE:_**  Es una buena práctica que los archivos que sean considerados como "bibliotecas", no tengan código que se ejecute.

## Clases básicas

A diferencia de las interfaces, las clases se componen de propiedades y métodos.

Se pueden de definir de varias maneras en TS.

Por ejemplo, con valores predefinidos

```typescript
export class Person {
    public name: string;
    public address?: string;

    constructor() {
        this.name='Hal Jordan';
        this.address='Coast City'
    };
}
const greenLantern = new Person(); // Hal Jordan, Coast City
```

O sin valores predefinidos en el constructor

```typescript
export class Person {
    public name: string;
    public address?: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    };
}
const greenLantern = new Person('Green Lantern', 'Coast City'); // Green Lantern, Coast City
```

O declarando los campos en el propio constructor

```typescript
export class Person {
    constructor(
        public name: string,
        private address?: string
    ) {};
}
```

### Extend

Las clases pueden extenderse de modo que se heradan los campos.

```typescript
export class Person {
    constructor(
        public name: string,
        private address?: string
    ) {};
}

export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName : string,
    ) {
        super(realName, 'New York');
    }
}
const hero = new Hero('Ironman', 45, 'Tony Stark'); // name: Tony Stark, address: New York, alterEgo: Ironman, age: 45, realName: Tony Stark
```

## Composición

Aunque se habla mucho de la extensión de clases se recomienda **priorizar composición sobre herencia**

La **composición** consiste en añadir la clase de la que se desea extender como un campo más.

```typescript
export class Person {    
    constructor(
        public firstName: string,
        public lastName: string,
        private address?: string 
    ) {};
}

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public person: Person,
    ) {};
}
```

## Generics

En ocasiones, se pueden crear funciones de cuyos argumentos no sepamos el tipo.

Los **genéricos** nos permiten **inferir** de qué tipo es una variable y se declaran con el operador diamante ```<>```. De esta forma, cuando se usa la variable genérica el propio editor infiere si su uso es correcto o no.

```typescript
export function whatsMyType<T>( argument : T ) : T {
    return argument;
}

let amIString = whatsMyType('Hola Mundo');  // (2) ['Hola', 'Mundo']
let amINumber = whatsMyType(100); // 100
let amIArray = whatsMyType([1,2,3,4]); // 1-2-3-4
```

Aunque también se puede especificar el tipo al realizar la llamada de la función mediante el operador `<>`

```typescript
export function whatsMyType<T>( argument : T ) : T {
    return argument;
}

let amIString = whatsMyType<string>('Hola Mundo');
console.log(amIString.split(' '));

let amINumber = whatsMyType<number>(100);
console.log(amINumber.toFixed());

let amIArray = whatsMyType<number[]>([1,2,3,4]);
console.log(amIArray.join('-'));
```

## Optional Chaining

El **optional chaining** se basa en el uso de una sintaxis para comprobar si un elemento es `empty` o `undefined` y evitar un `NullPointerException` o similar.

Para ello se hace uso del carácter `?` que indica que una operación solamente se realiza si el valor existe.

```typescript
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger: Passenger = {
    name: 'John'
}

const printChildren = (passenger: Passenger) => {
    
    const howManyChildren = passenger.children?.length || 0;
    
    console.log( passenger.name,  howManyChildren);
}

printChildren(passenger);
```

En la llamada de la función, el símbolo `?` indica que solamente tiene que usar ```length``` si ```children``` tiene algún contenido. En caso contrario, imprime cero.
