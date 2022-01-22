import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import projectReducer from "./reducers/contentReducer"


const reducer = combineReducers({
    blogs: projectReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
