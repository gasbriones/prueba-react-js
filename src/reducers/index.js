import { combineReducers } from 'redux'
import dataReducer from './data_reducer';
import languageReducer from './language_reducer'

const reducers = combineReducers({
  data: dataReducer,
  language: languageReducer
});

export default reducers;
