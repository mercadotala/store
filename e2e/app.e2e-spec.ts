import { MercadotalaPage } from './app.po';

describe('mercadotala App', function() {
  let page: MercadotalaPage;

  beforeEach(() => {
    page = new MercadotalaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
