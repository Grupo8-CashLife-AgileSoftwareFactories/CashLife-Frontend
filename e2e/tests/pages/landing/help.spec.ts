import { test, expect } from '@playwright/test';

test('Help landing view', async ({ page }) => {
  await page.goto('https://cashlife-frontend-cicd.onrender.com');
  await page.getByRole('list').getByRole('link', { name: 'Ayuda' }).click();
});