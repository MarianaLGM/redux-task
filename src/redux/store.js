//4 creamos el store.js:

import{configureStore} from "@reduxjs/toolkit"//importa las dependencias necesarias para trabajar con Redux.
import todosSlice from "./todosSlice.js"//importa las dependencias necesarias para trabajar con Redux.

// Creamos un estado inicial para la lista de tareas.
// Define una función `reducer` que actualice el estado en función de las acciones recibidas.
export const store= configureStore({
    reducer:{
    task: todosSlice
    }
})