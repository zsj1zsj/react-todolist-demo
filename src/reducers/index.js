import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import formReducer from './formReducer'

export default combineReducers({
  todos: todoReducer,
  form:formReducer
});