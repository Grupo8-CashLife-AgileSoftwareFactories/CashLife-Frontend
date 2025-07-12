import { expect, test } from '@playwright/test';

test('Landing Pages generates correctly', async ({ page }) => {
  await page.goto('http://localhost:4200/landing');
});