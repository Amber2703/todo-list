import {createStore, combineReducers} from "redux"
import { todoStore } from "./reducer"


const rootReducer = combineReducers({todoStore});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());