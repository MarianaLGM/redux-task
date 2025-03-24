//6 creamos los componentes

import Task from './components/Task';

const App = () => {
  //const task = useSelector((state) => state.task);

  const addNewTask = (newTaskInput) => {
    const newTask = {
    text: newTaskInput,
    completed: false
    };
  setTasks([...state.tasks, newTask]); // Agregamos la nueva tarea al estado de tasks que era donde tenía 3 tareas creadas
} 

  return (
    <>
      <Task addNewTask={addNewTask}/>

    </>
  );
};

export default App;



//comprobar que tengamos instalado "react-redux" y "@reduxjs/toolkit"
//Haz que se que muestre la lista de tareas en `App.jsx`.
//2. Importa las acciones necesarias desde `todoSlice.js`.
//3. Conecta el componente `App.jsx` al estado y a las acciones de Redux.


/*OK 

import { useSelector } from 'react-redux';

const App = () => {
  const task = useSelector((state) => state.task);
  return (
    <>
      <h1>Lista de tareas</h1>
      <ul>
        <li>Title: {task.title}</li>
      </ul>
    </>
  );
};

export default App;
*/