import { i18n } from '../i18n';

describe('i18n', () => {
  it('should initiate i18n', async () => {
    const t = await i18n;
    expect(t).toBeDefined();
  });

  // TODO: Figure out why this is failing
  // it('should initiate i18n with translations', async () => {
  //   const t = await i18n;
  //   expect(t(translations.feedbackFeature.description).length).toBeGreaterThan(
  //     0,
  //   );
  // });
});
