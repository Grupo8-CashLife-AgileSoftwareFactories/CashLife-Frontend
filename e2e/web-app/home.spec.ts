import { expect, test } from '@playwright/test';

test('Landing Pages generates correctly', async ({ page }) => {
  await page.goto('https://cashlife-frontend-cicd.onrender.com');
});