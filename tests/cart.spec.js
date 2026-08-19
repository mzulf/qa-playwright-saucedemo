const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.describe('Shopping Cart Feature', () => {
  test('TC-CART-01: Should add item to cart successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addFirstItemToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');
  });
});