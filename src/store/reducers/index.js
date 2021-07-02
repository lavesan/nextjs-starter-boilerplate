import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';

export default combineReducers({
  authState: authReducer,
  uiState: uiReducer,
});