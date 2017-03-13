import { Ex2MyAppPage } from './app.po';

describe('ex2-my-app App', function() {
  let page: Ex2MyAppPage;

  beforeEach(() => {
    page = new Ex2MyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
