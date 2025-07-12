import { test, expect } from '@playwright/test';

test('Transactions view', async ({ page }) => {
  await page.goto('http://localhost:4200/home');
  await page.getByRole('button', { name: 'Registro de Transacciones >' }).click();
});