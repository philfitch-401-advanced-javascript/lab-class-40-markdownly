import { UPDATE_MARKDOWN, updateMarkdown } from './documentActions';

describe('document actions', () => {
  it('creates an update markdown action', () => {
    expect(updateMarkdown()).toEqual({
      type: UPDATE_MARKDOWN
    });
  });
});
