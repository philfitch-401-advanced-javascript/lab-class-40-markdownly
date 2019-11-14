export const CHANGE_ACTIVE_DOCUMENT = 'CHANGE_ACTIVE_DOCUMENT';
export const changeActiveDocument = payload => ({
  type: CHANGE_ACTIVE_DOCUMENT,
  payload: payload
});

export const SET_NEW_FILE_NAME = 'SET_NEW_FILE_NAME';
export const setNewFileName = payload => ({
  type: SET_NEW_FILE_NAME,
  payload: payload
});

export const CREATE_NEW_FILE = 'CREATE_NEW_FILE';
export const createNewFile = payload => ({
  type: CREATE_NEW_FILE,
  payload: payload
});
