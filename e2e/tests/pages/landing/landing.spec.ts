import { test, expect } from '@playwright/test';

test('Landing view', async ({ page }) => {
  await page.goto('https://cashlife-frontend-cicd.onrender.com');
});