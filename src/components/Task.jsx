//6 creamos los componentes

import { useSelector, useDispatch } from 'react-redux';
import todosSlice from "../redux/todosSlice"

function Task() {
    const dispatch = useDispatch();
    const title = useSelector((state) => state.tasks);
        return (
        <>
        <h1>Lista Tareas:</h1>
        <form >
                <input
                type="text"
                value={title}
                placeholder="Agregar nueva tarea"
                onChange={(e)=> dispatch(todosSlice (e.target.value))}/>
            <button type="submit">Agregar</button>
        </form>
        
        </>
        );
    }
    
export default Task;
