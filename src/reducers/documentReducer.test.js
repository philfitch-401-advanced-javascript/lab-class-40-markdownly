import reducer, { initialState } from './documentReducer';
import { UPDATE_MARKDOWN, updateMarkdown } from '../actions/documentActions';

describe('document reducer', () => {
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
