export const CHANGE_ACTIVE_DOCUMENT = 'CHANGE_ACTIVE_DOCUMENT';
export const changeActiveDocument = payload => ({
  type: CHANGE_ACTIVE_DOCUMENT,
  payload: payload,
});
export const SET_NEW_FILE_NAME = 'SET_NEW_FILE_NAME';
export const setNewFileName = payload => ({
  type: SET_NEW_FILE_NAME,
  payload: payload,
});

export const SET_FILE_TO_DELETE = 'SET_FILE_TO_DELETE';
export const setFileToDelete = payload => ({
  type: SET_FILE_TO_DELETE,
  payload: payload
});

export const CREATE_NEW_FILE = 'CREATE_NEW_FILE';
export const createNewFile = () => ({
  type: CREATE_NEW_FILE,
});

export const DELETE_FILE = 'DELETE_FILE';
export const deleteFile = () => ({
  type: DELETE_FILE,
});

export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = payload => ({
  type: UPDATE_MARKDOWN,
  payload: payload,
});
