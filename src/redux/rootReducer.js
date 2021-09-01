import { combineReducers } from 'redux'
import messageReducer from './messagePop/reducers'


const rootReducer = combineReducers({
    message: messageReducer,
})

export default rootReducer