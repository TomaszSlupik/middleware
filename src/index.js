import store from "./store/configureStore";
import axios from "axios";
import { getTasks } from "./store/tasks";
import { apiCallBegan } from "./store/api";
import { loadTasks } from "./store/tasks";
import { addNewTask } from "./store/tasks";
import { updateCompleted } from "./store/tasks";
import { deleteTask } from "./store/tasks";

// I sposób

// const gettingTasks = async () => {

//     try {
//         const res = await axios.get("http://localhost:5000/api/tasks")
//         console.log(res)
//         store.dispatch(getTasks({tasks: res.data}))
//     }
//     catch (error) {
//             store.dispatch({
//                 type: "SHOW_ERROR", 
//                 payload: {error: error.message}
//             })
//     }

    
// }

// gettingTasks()

// II sposób

store.dispatch(loadTasks())
// store.dispatch(addNewTask({task: "Zadanie ukończone"}))
store.dispatch(updateCompleted({id: 6, completed: true}))
store.dispatch(deleteTask({id: 7}))
store.dispatch(deleteTask({id: 8}))
store.dispatch(deleteTask({id: 9}))