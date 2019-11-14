import { 
  UPDATE_MARKDOWN, updateMarkdown,
  CREATE_NEW_FILE, createNewFile,
  SET_NEW_FILE_NAME, setNewFileName,
  SET_FILE_TO_DELETE, setFileToDelete,
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

  it('creates a set file-name-to-delete action', () => {
    expect(setFileToDelete()).toEqual({
      type: SET_FILE_TO_DELETE
    });
  });

  it('creates an update markdown action', () => {
    expect(changeActiveDocument()).toEqual({
      type: CHANGE_ACTIVE_DOCUMENT
    });
  });
});

