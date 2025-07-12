import { test, expect } from '@playwright/test';

test('User Profile view', async ({ page }) => {
  await page.goto('http://localhost:4200/home');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('button', { name: ' Usuario' }).click();
});