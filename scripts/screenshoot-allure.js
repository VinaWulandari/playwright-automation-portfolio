// scripts/screenshot-allure.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve('allure-report/index.html'));
  await page.screenshot({ path: 'docs/allure-summary.png', fullPage: true });
  await browser.close();
})();