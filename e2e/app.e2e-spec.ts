import { UnicornPage } from './app.po';

describe('unicorn App', () => {
  let page: UnicornPage;

  beforeEach(() => {
    page = new UnicornPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
