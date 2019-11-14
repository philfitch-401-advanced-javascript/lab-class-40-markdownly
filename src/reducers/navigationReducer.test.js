import reducer, { initialState } from './navigationReducer';
import {
  UPDATE_MARKDOWN, updateMarkdown,
  SET_NEW_FILE_NAME, setNewFileName,
  CREATE_NEW_FILE, createNewFile,
  CHANGE_ACTIVE_DOCUMENT, changeActiveDocument
} from '../actions/navigationActions';

describe('navigation reducer', () => {
  it('handles unknown action', () => {
    const newState = reducer(undefined, { type: '@@INIT' });
    expect(newState).toEqual(initialState);
  });

  it(`handles the ${UPDATE_MARKDOWN} action`, () => {
    const newText = 'random typing';
    const newState = reducer(initialState, updateMarkdown(newText));
    expect(newState).toEqual({
      ...initialState,
      files: { ...initialState.files, ['file1']: { markdown: newText } }
    });
  });

  it(`handles the ${CREATE_NEW_FILE} action`, () => {
    const newFileName = 'random typing';
    initialState.newFileName = newFileName;
    const newState = reducer(initialState, createNewFile(newFileName));
    expect(newState).toEqual({
      ...initialState,
      activeDocument: newFileName,
      files: { ...initialState.files, [newFileName]: { markdown: 'this is a new file' } }
    });
  });

  it(`handles the ${SET_NEW_FILE_NAME} action`, () => {
    const newFileName = 'random typing';
    const newState = reducer(initialState, setNewFileName(newFileName));
    expect(newState).toEqual({
      ...initialState,
      newFileName: newFileName
    });
  });

  it(`handles the ${CHANGE_ACTIVE_DOCUMENT} action`, () => {
    const newActiveDocument = 'random typing';
    const newState = reducer(initialState, changeActiveDocument(newActiveDocument));
    expect(newState).toEqual({
      ...initialState,
      activeDocument: newActiveDocument
    });
  });
});
