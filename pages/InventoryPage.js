class InventoryPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.title = page.locator('.title');
    this.firstItemAddToCartBtn = page.locator('.inventory_item').first().locator('button');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  // Actions
  async addFirstItemToCart() {
    await this.firstItemAddToCartBtn.click();
  }
}

module.exports = { InventoryPage };