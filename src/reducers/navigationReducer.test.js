import reducer, { initialState } from './navigationReducer';
import { UPDATE_MARKDOWN, updateMarkdown } from '../actions/navigationActions';

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
      markdown: newText
    });
  });

});
