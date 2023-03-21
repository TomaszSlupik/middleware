import axios from "axios"

const api = store => next => action => {
    if (action.type !== "apiRequest") {
        return next (action)
    }

    const {url, method, data, onSuccess, onError} = action.payload

    axios.request({
        baseURL: "http://localhost:5000/api", 
        url, 
        method, 
        data
    }).then().catch()
}