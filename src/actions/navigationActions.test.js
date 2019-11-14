import { UPDATE_MARKDOWN, updateMarkdown } from './navigationActions';

describe('navigation actions', () => {
  it('creates an update markdown action', () => {
    expect(updateMarkdown()).toEqual({
      type: UPDATE_MARKDOWN
    });
  });
});

