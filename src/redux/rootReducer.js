import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import userMessageReducer from './UserMessage/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  userMessageReducer,
});

export default rootReducer;
