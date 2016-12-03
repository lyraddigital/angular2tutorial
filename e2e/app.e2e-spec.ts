import { Angular2tutorialPage } from './app.po'; 

describe('angular2tutorial App', function() {
  let page: Angular2tutorialPage;

  beforeEach(() => {
    page = new Angular2tutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
