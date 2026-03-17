const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/loginPage')
const { InventoryPage } = require('../pages/inventoryPage')
const { login } = require('../utils/helper')
const data = require('../utils/testData.js')

test.describe('Cart Feature', () => {

test.beforeEach(async ({ page }) => {
const loginPage = new LoginPage(page)

await loginPage.goto()

await loginPage.login(
data.validUser.username,
data.validUser.password
)
})


test('User bisa add product ke cart', async ({ page }) => {
// before using foreach login
// await login(page,'standard_user','secret_sauce')
// await page.click('#add-to-cart-sauce-labs-backpack')
// await expect(page.locator('.shopping_cart_badge')).toHaveText('1')

//after using foreach login
await page.click('#add-to-cart-sauce-labs-backpack')
await expect(page.locator('.shopping_cart_badge')).toHaveText('1')

})

test('User bisa remove produk dari cart', async ({ page }) => {

await page.click('#add-to-cart-sauce-labs-backpack');
await page.click('#remove-sauce-labs-backpack');

await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);

})

test('User bisa membuka halaman cart', async ({ page }) => {
await page.click('#add-to-cart-sauce-labs-backpack');
await page.click('.shopping_cart_link');

await expect(page).toHaveURL(/cart/);

});
});
