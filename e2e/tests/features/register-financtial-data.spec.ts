import { test, expect } from '@playwright/test';

test('Register financtial data', async ({ page }) => {
  await page.goto('http://localhost:4200/home');
  await page.getByRole('button', { name: 'Registro de Datos Financieros' }).click();
  await page.getByRole('spinbutton', { name: 'S/' }).click();
  await page.getByRole('spinbutton', { name: 'S/' }).fill('550');
  await page.locator('div').filter({ hasText: /^Mis ingresos son:S\/De forma:MensualSemanalDiario$/ }).getByRole('combobox').selectOption('Semanal');
  await page.getByText('De forma:MensualSemanalDiario').click();
  await page.locator('div').filter({ hasText: '← AtrásRegistro de' }).first().click();
});