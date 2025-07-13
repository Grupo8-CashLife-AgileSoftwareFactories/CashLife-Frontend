import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cashlife-frontend-cicd.onrender.com');
  await page.locator('mat-toolbar').getByRole('link', { name: 'Contáctanos' }).click();
});