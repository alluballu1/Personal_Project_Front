let defaultState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]

export const addOne = () => {
    return async (dispatch) => {
        console.log("Hallo")
        dispatch({
            type: "ADD_NEW"
        })
    }
}

const projectReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_NEW":
            const test = state.concat(state.length + 1)
            console.log(state)
            return test
        default:
            return state
    }
}

export default projectReducer