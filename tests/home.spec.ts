import { test, expect } from '@playwright/test';

test.describe('Home-Seite Online-Shop', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://marina-abr.github.io/StaticCoffee/index.html');
  });

  test('Logo ist sichtbar', async ({ page }) => {
    await expect(page.locator('//*[@id="headlogo"]')).toBeVisible();
  });

  test('Registrieren-Button ist sichtbar', async ({ page }) => {
    await expect(page.locator('//*[@id="reglink"]/a')).toBeVisible();
  });

  test('Login-Button ist sichtbar', async ({ page }) => {
    await expect(page.locator('//*[@id="accountbar"]/a')).toBeVisible();
  });
});
