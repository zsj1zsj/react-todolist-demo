import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import formReducer from './formReducer'
import formSlice from '../slices/formSlice';

export default combineReducers({
  todos: todoReducer,
  form: formReducer
});