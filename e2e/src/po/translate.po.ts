import { browser, by, element } from 'protractor';

export class TranslatePage {
  navigateTo() {
    return browser.get('/translate');
  }

  getParagraphText() {
    return element(by.css('learngerman-translate-toolbar mat-toolbar span')).getText();
  }
}
