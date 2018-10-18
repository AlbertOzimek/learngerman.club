import { AppPage } from './po/app.po';

describe('learngerman.club', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Der bestimmte Artikel');
  });
});
