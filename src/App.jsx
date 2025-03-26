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
