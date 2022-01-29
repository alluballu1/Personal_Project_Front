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
  const data = await axios.post(`/api/projects`, values, config);
  return data.data;
};

const editPost = async (values) => {
  const config = {
    headers: { Authorization: token },
  };
  console.log(config);

  const data = await axios.put(`${url}projects`, values, config);
  return data.data;
};

const deletePost = async (values) => {

  const deletedProject = {
    projectName: values.projectName,
    projectUrl: values.projectUrl,
    projectScreenshotUrl: values.projectScreenshotUrl,
    description: values.description,
    id: values.id,
  };

  //for deleting need to add headers and data separately and in a different order. Remove unwanted variables
  const data = await axios.delete(`${url}projects`, {
    headers: { Authorization: token },
    data: { project: deletedProject },
  });
  return data.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  token,
  setToken: setToken,
  fetchContent,
  fetchMyData,
  newPost,
  editPost,
  deletePost,
};
