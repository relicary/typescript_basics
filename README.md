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

Si la declaración de tipos es necesaria, se usan las interfaces que es el equivalente a definir un Tipo complejo

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