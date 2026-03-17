const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/loginPage')
const { InventoryPage } = require('../pages/inventoryPage')

test('User bisa tambah produk ke cart', async ({ page }) => {

const loginPage = new LoginPage(page)
const inventoryPage = new InventoryPage(page)

await loginPage.goto()

await loginPage.login(
'standard_user',
'secret_sauce'
)

await inventoryPage.addItemToCart()

await inventoryPage.goToCart()

await expect(page).toHaveURL(/cart/)

})