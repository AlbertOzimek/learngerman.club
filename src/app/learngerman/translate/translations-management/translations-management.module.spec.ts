import { TranslationsManagementModule } from './translations-management.module';

describe('TranslationsManagementModule', () => {
  let translationsManagementModule: TranslationsManagementModule;

  beforeEach(() => {
    translationsManagementModule = new TranslationsManagementModule();
  });

  it('should create an instance', () => {
    expect(translationsManagementModule).toBeTruthy();
  });
});
