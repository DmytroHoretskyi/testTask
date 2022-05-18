import axios from "axios";

export default axios.create({
    baseURL: 'https://test-task-for-incora.herokuapp.com',
    headers: {
        "Content-type": "application/json",
    },
});
