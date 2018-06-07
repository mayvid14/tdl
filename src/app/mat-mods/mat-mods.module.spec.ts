import { MatModsModule } from './mat-mods.module';

describe('MatModsModule', () => {
  let matModsModule: MatModsModule;

  beforeEach(() => {
    matModsModule = new MatModsModule();
  });

  it('should create an instance', () => {
    expect(matModsModule).toBeTruthy();
  });
});
