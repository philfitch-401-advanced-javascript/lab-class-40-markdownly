import { CHANGE_ACTIVE_DOCUMENT } from '../actions/navigationActions';

export const initialState = {
  files: [
    { fileName: 'file1' }
  ],
  activeDocument: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_ACTIVE_DOCUMENT:
      return { ...state, activeDocument: action.payload };
    default:
      return state;
  }
}
