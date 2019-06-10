import { combineReducers } from 'redux';
import catsReducer from './cats_reducer'
 
const rootReducer = combineReducers({ catsReducer });
 
export default rootReducer;