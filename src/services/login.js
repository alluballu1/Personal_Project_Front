import axios from "axios";
const url = process.env.REACT_APP_URL;



const loginFunction = async (credentials) => {
  try {
    const data = await axios
      .post(`/api/login`, credentials)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return data.data;
  } catch (err) {
    console.log(/* err.response.statusText, */ err);
  }
};
const registerFunction = async (credentials)=> {
  try{
    const data = await axios.post(`${url}users`, credentials)
    return data
  }catch(err){
    console.error(err)
  }
}

export default { loginFunction, registerFunction };
