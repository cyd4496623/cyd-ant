import { library } from '@fortawesome/fontawesome-svg-core'
import { /* faCheckSquare, faCoffee */ fas } from '@fortawesome/free-solid-svg-icons'
import '../src/styles/index.scss'

library.add(fas)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}