import content from "../services/content"

let defaultState = null

export const loginHandler = (values) => {
    return async (dispatch) => {
        const loginToken = values.username + values.password
        window.localStorage.setItem("LoggedUserData", loginToken)
        content.setToken(loginToken)
        dispatch(
            {
                type: "LOGIN",
                data: loginToken
            }
        )
    }
}


const loginReducer = (state = defaultState, action) => {
    switch (action) {
        case "LOGIN":
            console.log(action.data)
            return action.data
        default:
            return state
    }
}

export default loginReducer