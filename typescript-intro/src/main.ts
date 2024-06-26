import './style.css'

import './topics/basic-types.ts'
import './topics/object-interface.ts'
import './topics/functions.ts'
import './topics/nested_example.ts'
import './topics/basic-destructuring.ts'
import './topics/function-destructuring.ts'
import './topics/import-export.ts'
import './topics/classes.ts'
import './topics/generics.ts'
import './topics/optional-chaining.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
Hello World!
`

console.log('Hello World!');
