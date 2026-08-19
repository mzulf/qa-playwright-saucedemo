const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.describe('Authentication Feature', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('TC-AUTH-01: Successful login with valid credentials', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.title).toHaveText('Products');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('TC-AUTH-02: Failed login with locked out user', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
  });
});