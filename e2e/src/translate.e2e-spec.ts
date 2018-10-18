import {TranslatePage} from './po/translate.po';

describe('translate', () => {
  let page: TranslatePage;

  beforeEach(() => {
    page = new TranslatePage();
  });

  it('should display translate message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Translate');
  });
});
