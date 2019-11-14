import {
  CHANGE_ACTIVE_DOCUMENT,
  CREATE_NEW_FILE,
  SET_NEW_FILE_NAME,
  SET_FILE_TO_DELETE,
  UPDATE_MARKDOWN,
  DELETE_FILE
} from '../actions/navigationActions';

export const initialState = {
  files: { 'file1': { markdown: 'your markdown here' } },
  activeDocument: 'file1',
  newFileName: '',
  fileToDelete: 'file1',
};

let newFiles;

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_ACTIVE_DOCUMENT:
      return { ...state, activeDocument: action.payload };
    case CREATE_NEW_FILE:
      return {
        ...state,
        activeDocument: state.newFileName,
        files: { ...state.files, [state.newFileName]: { markdown: 'this is a new file' } }
      };
    case SET_NEW_FILE_NAME:
      return { ...state, newFileName: action.payload };
    case SET_FILE_TO_DELETE:
      return { ...state, fileToDelete: action.payload };
    case UPDATE_MARKDOWN:
      return { 
        ...state, 
        files: { ...state.files, [state.activeDocument]: { markdown: action.payload } } 
      };
    case DELETE_FILE:
      if(Object.keys(state.files).length <= 1) {
        alert('Please, do not delete your only file. Where will you put your markdown?.');
        return state;
      }
      newFiles = Object.entries(state.files)
        .filter(([key]) => key !== state.fileToDelete)
        .reduce((obj, [key, value]) => {
          obj[key] = value;
          return obj;
        }, {});

      return {
        ...state,
        files: newFiles,
        activeDocument: state.activeDocument === state.fileToDelete ? Object.keys(newFiles)[0] : state.activeDocument,
      };
    default:
      return state;
  }
}
