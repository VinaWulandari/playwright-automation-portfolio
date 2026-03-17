const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const data = require('../utils/testData.js');

test.describe('Login Feature', () => {

test('Login berhasil dengan credential valid', async ({ page }) => {

const loginPage = new LoginPage(page);

await loginPage.goto();
// before using utils 
// await loginPage.login('standard_user','secret_sauce');

// after using utils
await loginPage.login(
data.validUser.username,
data.validUser.password
);
await expect(page).toHaveURL(/inventory/);

});


test('Login gagal dengan password salah', async ({ page }) => {

const loginPage = new LoginPage(page);

await loginPage.goto();
await loginPage.login(
data.invalidUser.username,
data.invalidUser.password
);

await expect(page.locator('[data-test="error"]')).toBeVisible();

});


test('Login gagal tanpa username', async ({ page }) => {

const loginPage = new LoginPage(page);

await loginPage.goto();
await loginPage.login(
data.noUsername.username,
data.noUsername.password
);

await expect(page.locator('[data-test="error"]')).toBeVisible();

});


test('Login gagal tanpa password', async ({ page }) => {

const loginPage = new LoginPage(page);

await loginPage.goto();
await loginPage.login(
data.noPassword.username,
data.noPassword.password
);

await expect(page.locator('[data-test="error"]')).toBeVisible();

});

});