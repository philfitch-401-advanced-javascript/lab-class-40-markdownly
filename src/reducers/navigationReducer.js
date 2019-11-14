import {
  CHANGE_ACTIVE_DOCUMENT,
  CREATE_NEW_FILE,
  SET_NEW_FILE_NAME
} from '../actions/navigationActions';
import { UPDATE_MARKDOWN } from '../actions/documentActions';
// import { getMarkdown } from '../selectors/documentSelectors';
// import { updateMarkdown } from '../actions/documentActions';

export const initialState = {
  files: {
    'file1': { fileName: 'file1', markdown: 'goodbye cruel world' }
  },
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
        files: { ...state.files, [state.newFileName]: { fileName: state.newFileName, markdown: 'this is a new file' } }
      };
    case SET_NEW_FILE_NAME:
      return { ...state, newFileName: action.payload };
    case UPDATE_MARKDOWN:
      return { 
        ...state, 
        files: { ...state.files, [state.activeDocument]: { fileName: state.activeDocument, markdown: action.payload } } 
      };
    default:
      return state;
  }
}
