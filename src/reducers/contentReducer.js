import functions from "../services/content"
const loggedData = JSON.parse(window.localStorage.getItem("LoggedUserData"))
export const addOne = (value) => {
  return async (dispatch) => {
    console.log(value);
    const data = await functions.newPost(value)
    data.user = {id:loggedData.user.id}
    console.log(data)
    dispatch({
      data: data,
      type: "ADD_NEW",
    });
  };
};

export const init = () => {
  return async (dispatch) => {
    const data = await functions.fetchContent()
    dispatch({
      type: "FETCH_ALL",
      data:data
    })
  }
}

const projectReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW":
      return [...state, action.data]
    case "FETCH_ALL":
      return action.data
    default:
      return state;
  }
};

export default projectReducer;
