import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"/* 
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from 'redux-persist' */
import projectReducer from "./reducers/contentReducer"
import loginReducer from "./reducers/loginReducer"
import notificationReducer from "./reducers/notificationReducer"

/* const persistConfig = {
    key: 'root',
    storage,
}
   */

//Might re-enable persistant store at some point, probably not. 

const reducer = combineReducers({
    content: projectReducer,
    login: loginReducer,
    notification: notificationReducer
})
/* 
const persistedReducer = persistReducer(persistConfig, reducer) */


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
/* let persistor = persistStore(store) */

export default {store, /* persistor */}
