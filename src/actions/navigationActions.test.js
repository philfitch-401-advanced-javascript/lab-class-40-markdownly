import { 
  UPDATE_MARKDOWN, updateMarkdown,
  CREATE_NEW_FILE, createNewFile,
  SET_NEW_FILE_NAME, setNewFileName,
  CHANGE_ACTIVE_DOCUMENT, changeActiveDocument
} from './navigationActions';

describe('navigation actions', () => {
  it('creates an update markdown action', () => {
    expect(updateMarkdown()).toEqual({
      type: UPDATE_MARKDOWN
    });
  });

  it('creates an create new file action', () => {
    expect(createNewFile()).toEqual({
      type: CREATE_NEW_FILE
    });
  });

  it('creates a set file name action', () => {
    expect(setNewFileName()).toEqual({
      type: SET_NEW_FILE_NAME
    });
  });

  it('creates an update markdown action', () => {
    expect(changeActiveDocument()).toEqual({
      type: CHANGE_ACTIVE_DOCUMENT
    });
  });
});

