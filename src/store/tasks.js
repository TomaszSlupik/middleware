import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/http"
let id = 0;

const initialState = {
    tasks: [], 
    loading: false, 
    error: null
}

export const fetchTasks = createAsyncThunk('fetchTasks', async (a, {rejectWithValue}) => {
    try {
        const res = await axios.get("/tasks")
        return {tasks: res.data}
    }
    catch (error) {
        return rejectWithValue({error: error.message}) 
    }
    
})

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        // action: function
        getTasks: (state, action) => {
            state.tasks = action.payload.tasks
        },
        addTask: (state, action) => {
            state.tasks.push({
                id: ++id,
                task: action.payload.task,
                completed: false,
            });
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );
            state.tasks.splice(index, 1);
        },
        completedTask: (state, action) => {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );
            state.tasks[index].completed = true;
        },
    },
    extraReducers: {
        [fetchTasks.pending]: (state, action) => {
            state.loading = true
        },
        [fetchTasks.fulfilled]: (state, action) => {
            state.tasks = action.payload.tasks
            state.loading = false
        }, 
        [fetchTasks.rejected]: (state, action) => {
            state.error = action.payload.error
            state.loading = false
        }
    }
});

export const { getTasks, addTask, removeTask, completedTask } = taskSlice.actions;
export default taskSlice.reducer;
