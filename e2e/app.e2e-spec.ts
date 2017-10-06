import { AppPage } from './app.po';

describe('attendees App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display meet our attendees title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Meet our 2017 attendees');
  });
});
