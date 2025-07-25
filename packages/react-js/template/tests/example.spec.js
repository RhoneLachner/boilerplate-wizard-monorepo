// 🧙‍♂️💬 All of these example tests can be removed or customized to your liking!

import { test, expect } from '@playwright/test';

test.describe('React JavaScript Boilerplate App', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');

    // Check the page title
    await expect(page).toHaveTitle('Boilerplate Wizard React JS');

    // Check main heading
    await expect(page.locator('h1')).toContainText(
      'BOILERPLATE WIZARD - React & JavaScript'
    );

    // Check description text
    await expect(
      page.locator('text=A minimal React foundation with essential tools')
    ).toBeVisible();
  });

  test('navigation works correctly', async ({ page }) => {
    await page.goto('/');

    // Test About page navigation
    await page.click('text=About');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About This Boilerplate');

    // Test Home page navigation
    await page.click('text=Home');
    await expect(page).toHaveURL('/');
    await expect(page.locator('h1')).toContainText(
      'BOILERPLATE WIZARD - React & JavaScript'
    );
  });

  test('active navigation state is correct', async ({ page }) => {
    await page.goto('/');

    // Check that Home link is active
    const homeLink = page.locator('nav a[href="/"]');
    await expect(homeLink).toHaveClass(/bg-blue-600/);

    // Navigate to About and check active state
    await page.click('text=About');
    const aboutLink = page.locator('nav a[href="/about"]');
    await expect(aboutLink).toHaveClass(/bg-blue-600/);
  });
});
