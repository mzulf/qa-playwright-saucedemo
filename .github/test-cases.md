# Test Cases - SauceDemo E-Commerce

# Test Cases

| Test Case ID | Feature        | Scenario Description                 | Test Steps                                                                                                                                   | Expected Result                                                                 |
|--------------|----------------|--------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| TC-AUTH-01   | Authentication | Login with valid credentials          | 1. Open [SauceDemo](https://www.saucedemo.com)<br>2. Enter username `standard_user`<br>3. Enter password `secret_sauce`<br>4. Click **Login** | Successfully logged in and redirected to the inventory page (`/inventory.html`) |
| TC-AUTH-02   | Authentication | Login with a locked-out user          | 1. Open [SauceDemo](https://www.saucedemo.com)<br>2. Enter username `locked_out_user`<br>3. Enter password `secret_sauce`<br>4. Click **Login** | Error message displayed: *"Epic sadface: Sorry, this user has been locked out."* |
| TC-CART-01   | Shopping Cart  | Add product to cart                   | 1. Login as `standard_user`<br>2. Click **Add to cart** on the first product<br>3. Open the cart icon                                        | Product appears in the shopping cart page                                       |
