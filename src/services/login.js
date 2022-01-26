import axios from "axios"

const url = process.env.REACT_APP_URL
const loginFunction = async (credentials) => {
    const data = await axios.post(`${url}login`, credentials)
    console.log(data.data)
    return data.data
}

export default {loginFunction}