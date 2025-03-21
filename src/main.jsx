import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"//1 importamos {Provider}
import {store} from "./redux/store.js"//3 importamos {store}


//2 lo inlcluímos aquí <Provider store={store}> </Provider>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)



//En el archivo principal de tu aplicación `main.jsx`, importa el store de Redux desde `store.js`.
//Envuelve tu aplicación con el componente `Provider` de Redux, pasándole el store como prop.
// Utiliza el componente `App.jsx` en tu aplicación para mostrar la lista de tareas.
