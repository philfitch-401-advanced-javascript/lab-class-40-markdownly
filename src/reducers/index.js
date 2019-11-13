import { combineReducers } from 'redux';
import documents from './documentReducer';
import navigation from './navigationReducer';

export default combineReducers({
  documents,
  navigation
});
