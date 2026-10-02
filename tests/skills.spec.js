import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('skills category buttons filter cards and All restores the complete list', async ({ page }) => {
  const skills = page.locator('#skills');
  const skillCards = skills.locator('button[aria-pressed]');

  await expect(skillCards).toHaveCount(8);

  for (const category of ['React', 'JavaScript', 'Node.js', 'SQL', 'Git']) {
    await skills.getByRole('button', { name: category, exact: true }).click();
    await expect(skillCards).toHaveCount(1);
  }

  await skills.getByRole('button', { name: 'All', exact: true }).click();
  await expect(skillCards).toHaveCount(8);
});

test('skill cards toggle their selected state with mouse and keyboard', async ({ page }) => {
  const skills = page.locator('#skills');
  const reactTab = skills.getByRole('button', { name: 'React', exact: true });
  await reactTab.click();

  const reactCard = skills.getByRole('button', { name: /React \/ Vite/ });
  await expect(reactCard).toHaveAttribute('aria-pressed', 'false');

  await reactCard.click();
  await expect(reactCard).toHaveAttribute('aria-pressed', 'true');
  await reactCard.click();
  await expect(reactCard).toHaveAttribute('aria-pressed', 'false');

  await reactCard.focus();
  await page.keyboard.press('Enter');
  await expect(reactCard).toHaveAttribute('aria-pressed', 'true');
  await page.keyboard.press('Space');
  await expect(reactCard).toHaveAttribute('aria-pressed', 'false');
});