const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/loginPage')
const { InventoryPage } = require('../pages/inventoryPage')
const { CartPage } = require('../pages/cartPage')

test.describe('Checkout Feature', () => {

test('User berhasil checkout', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');

await page.fill('#user-name','standard_user');
await page.fill('#password','secret_sauce');
await page.click('#login-button');

await page.click('#add-to-cart-sauce-labs-backpack');
await page.click('.shopping_cart_link');

await page.click('#checkout');

await page.fill('#first-name','Vina');
await page.fill('#last-name','QA');
await page.fill('#postal-code','12345');

await page.click('#continue');
await page.click('#finish');

await expect(page.locator('.complete-header')).toBeVisible();

});

test('Checkout gagal tanpa isi form', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');

await page.fill('#user-name','standard_user');
await page.fill('#password','secret_sauce');
await page.click('#login-button');

await page.click('#add-to-cart-sauce-labs-backpack');
await page.click('.shopping_cart_link');

await page.click('#checkout');
await page.click('#continue');

await expect(page.locator('[data-test="error"]')).toBeVisible();

});

test('User bisa logout', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');

await page.fill('#user-name','standard_user');
await page.fill('#password','secret_sauce');
await page.click('#login-button');

await page.click('#react-burger-menu-btn');
await page.click('#logout_sidebar_link');

await expect(page).toHaveURL('https://www.saucedemo.com/');

});

});