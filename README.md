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