
import content from "../services/content";
import login from "../services/login";
let defaultState = null;


export const loginHandler = (values) => {
  return async (dispatch) => {
    const loginToken = await login.loginFunction(values);
    console.log(loginToken);
    if (loginToken) {
      window.localStorage.setItem("LoggedUserData", JSON.stringify(loginToken));
      content.setToken(loginToken);
      dispatch({
        type: "LOGIN",
        data: values,
      });
    }
  };
};

const loginReducer = (state = defaultState, action) => {
  switch (action) {
    case "LOGIN":
      return action.data;
    default:
      return state;
  }
};

export default loginReducer;
