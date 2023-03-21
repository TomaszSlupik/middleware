import store from "./store/configureStore";
import axios from "axios";
import { getTasks } from "./store/tasks";
import { fetchTasks } from "./store/tasks";

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
store.dispatch(fetchTasks())