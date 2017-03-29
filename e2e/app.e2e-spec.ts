import { DaycareListingsPage } from './app.po';

describe('daycare-listings App', () => {
  let page: DaycareListingsPage;

  beforeEach(() => {
    page = new DaycareListingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
