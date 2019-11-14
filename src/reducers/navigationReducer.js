import {
  CHANGE_ACTIVE_DOCUMENT,
  CREATE_NEW_FILE,
  SET_NEW_FILE_NAME
} from '../actions/navigationActions';
// import { getMarkdown } from '../selectors/documentSelectors';
// import { updateMarkdown } from '../actions/documentActions';

export const initialState = {
  files: [
    { fileName: 'file1', markdown: '' }
  ],
  activeDocument: 'file1',
  newFileName: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_ACTIVE_DOCUMENT:
      return { ...state, activeDocument: action.payload };
    case CREATE_NEW_FILE:
      return { 
        ...state, 
        activeDocument: action.payload, 
        files: [...state.files, { fileName: state.newFileName }] 
      };
    case SET_NEW_FILE_NAME:
      return { ...state, newFileName: action.payload };
    default:
      return state;
  }
}
