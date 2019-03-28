import catsReducer  from './cats_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cats: catsReducer
});

export default rootReducer;