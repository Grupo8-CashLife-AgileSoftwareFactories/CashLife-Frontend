import { test, expect } from '@playwright/test';

test('Downloading financtial information', async ({ page }) => {
  await page.goto('http://localhost:4200/home');
  await page.getByRole('button', { name: 'Educación Financiera >' }).click();
  await page.getByRole('button', { name: 'Tasa Crediticia >' }).click();
  await page.getByRole('button', { name: 'Descargar material' }).click();
});