import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    todos : [

    ]
}

const tasksSlice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        addTask : (state, action) => {
            let addingTask = action.payload;
            addingTask.id = Date.now();
            state.todos.push(addingTask)
        },
        deleteTasks : (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload)
            if(index!== -1){
                state.todos.splice(index, 1)
            }
        },
        updateTasks : (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id)
            if(index!== -1){
                state.todos[index] = action.payload
            }
        }
    }
})

export const {addTask, deleteTasks, updateTasks} = tasksSlice.actions;

export default tasksSlice.reducer;