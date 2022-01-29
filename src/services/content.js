import axios from "axios";
const url = process.env.REACT_APP_URL;
let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken.token}`;
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

const newPost = async (values) => {
  const config = {
    headers: { Authorization: token },
  };
  const data = await axios.post(`${url}projects`, values, config);
  return data.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { token, setToken:setToken, fetchContent, fetchMyData, newPost };
