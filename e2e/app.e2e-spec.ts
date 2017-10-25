import { diablo3profileViewer } from './app.po';

describe('diablo3profileViewer App', () => {
  let page: diablo3profileViewer;

  beforeEach(() => {
    page = new diablo3profileViewer();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
