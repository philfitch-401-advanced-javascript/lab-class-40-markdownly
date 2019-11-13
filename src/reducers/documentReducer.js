import { UPDATE_MARKDOWN } from '../actions/documentActions';

const initialState = {
  markdown: '# Hi there'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
}
