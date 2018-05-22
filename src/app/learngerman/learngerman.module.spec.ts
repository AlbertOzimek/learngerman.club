import { LearngermanModule } from './learngerman.module';

describe('LearngermanModule', () => {
  let learngermanModule: LearngermanModule;

  beforeEach(() => {
    learngermanModule = new LearngermanModule();
  });

  it('should create an instance', () => {
    expect(learngermanModule).toBeTruthy();
  });
});
