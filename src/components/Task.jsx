//6 creamos los componentes

import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask} from "../redux/todosSlice";
import {useState} from "react";


function Task() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);
    const [newTask, setNewTask] = useState('');  // Maneja el estado de la nueva tarea

    // Este es el manejador para cuando el usuario escribe en el input
    const handleChange = (e) => {
        setNewTask(e.target.value);  // Actualiza el estado con el valor ingresado
    };

    //AÑADIR
    const handleClick = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            dispatch(addTask(newTask));  // Despacha la acción para agregar la tarea
            setNewTask('');  // Limpia el campo después de agregar la tarea
        }
    };

    //ELIMINAR
    const handleDelete = (id) => {
        dispatch(deleteTask(id));  // Despacha accción para eliminar la tarea por su id
    };



        return (
        <>
        <h1>Lista Tareas:</h1>
        <form onSubmit={handleClick}>
                <input 
                type="text"
                value={newTask}
                placeholder="Agregar nueva tarea"
                onChange={handleChange}
                />
            <button type="submit">Agregar</button>
        </form>
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.text} {/*me muestra la tarea que meto en el input*/}
                    <button onClick={() => handleDelete(task.id)}>X</button>{/*X al lado de cada tarea para eliminar*/}
                </li>
            ))}
        </ul>
        </>
    );
}
export default Task;


