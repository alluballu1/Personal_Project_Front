import functions from "../services/content";
import _ from "lodash"
const loggedData = JSON.parse(window.localStorage.getItem("LoggedUserData"));

export const addOne = (value) => {
  return async (dispatch) => {
    const data = await functions.newPost(value);
    data.user = { id: loggedData.user.id };
    dispatch({
      data: data,
      type: "ADD_NEW",
    });
  };
};

export const editPostData = (values) => {
  return async (dispatch) => {
    const data = await functions.editPost(values);
    data.user = { id: loggedData.user.id };
    dispatch({
      type: "EDIT",
      data: data,
    });
  };
};

export const init = () => {
  return async (dispatch) => {
    const data = await functions.fetchContent();
    dispatch({
      type: "FETCH_ALL",
      data: data,
    });
  };
};

export const deleteProject = (value) => {
  return async (dispatch) => {
    await functions.deletePost(value)
    dispatch({
      type: "DELETE",
      data:value
    })
  }
}

const projectReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW":
      return [...state, action.data];
    case "FETCH_ALL":
      return action.data;
    case "EDIT":
      const index = state.map(element => element.id).indexOf(action.data.id)
      const newState = [...state]
      const splice = newState.splice(index,1, action.data)
      return newState;
    case "DELETE":
      const findindex = state.map(element => element.id).indexOf(action.data.id)
      const newStateAfterDeletion = [...state]
      const splicedPart = newStateAfterDeletion.splice(findindex,1)
      return newStateAfterDeletion
    default:
      return state;
  }
};

export default projectReducer;
