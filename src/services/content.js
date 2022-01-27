import axios from "axios";
const url = process.env.REACT_APP_URL
let token = null;

const setToken = (newToken) => {
    token = `bearer ${newToken}`;
};

const fetchContent = async () => {
    
    const data = await axios.get(`/api/projects`)
    console.log(url, data.data)
    return data.data
}

const fetchMyData = async () => {
    
    const data = await axios.get(`/api/users/me`)
    console.log(url, data.data)
    return data.data
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { token, setToken, fetchContent, fetchMyData };
