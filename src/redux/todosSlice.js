//Define las acciones necesarias para agregar una tarea y eliminar una tarea.
// Exporta las acciones para poder utilizarlas en otros archivos.

//5 creamos el userSlice

import {createSlice} from "@reduxjs/toolkit"

//estado inicial, como hacíamos con el useState

const initialState={
    tasks: [],
    taskId: 0, //parte en cero y se va sumando uno conforme añadimos taask
}
//configuración de la porción del slice


export const userSlice =createSlice({
    name:"task", //siempre tiene que ser name para crear un Slice
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.taskId += 1;  // Incrementa el ID de cada tarea en 1
            state.tasks.push({ text: action.payload, id: state.taskId }); 
        },
        deleteTask: (state, action)=>{//cambio de estado en diferentes componentes
            state.tasks= state.tasks.filter(task => task.id !==action.payload);
        },
    },
});

    export const{addTask, deleteTask}=userSlice.actions
    export default userSlice.reducer;


