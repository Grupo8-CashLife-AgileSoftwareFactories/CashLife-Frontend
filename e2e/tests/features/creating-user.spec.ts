import { test, expect } from '@playwright/test';

test('creating a new user', async ({ page }) => {
  await page.goto('http://localhost:4200/landing');
  await page.getByRole('button', { name: 'Crear cuenta' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('david');
  await page.locator('#mat-select-value-0').click();
  await page.getByText('Usuario').click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('david');
  await page.getByText('check_box_outline_blank').click();
  await page.getByRole('button', { name: 'Crear cuenta' }).click();
});