import { NgSocialPage } from './app.po';

describe('ng-social App', () => {
  let page: NgSocialPage;

  beforeEach(() => {
    page = new NgSocialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
