import './style.css'

import './topics/basic-types.ts'
import './topics/object-interface.ts'
import './topics/functions.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
Hello World!
`

console.log('Hello World!');
