import { test, expect } from '@playwright/test';

test('Visualize market data', async ({ page }) => {
  await page.goto('http://localhost:4200/home');
  await page.getByRole('button', { name: 'Registro de Transacciones >' }).click();
  await page.getByRole('row', { name: 'Mercado S/ 120 Ninguno Ver' }).getByRole('button').click();
});