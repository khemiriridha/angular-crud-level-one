import { AngularCrudLevelOnePage } from './app.po';

describe('angular-crud-level-one App', function() {
  let page: AngularCrudLevelOnePage;

  beforeEach(() => {
    page = new AngularCrudLevelOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
