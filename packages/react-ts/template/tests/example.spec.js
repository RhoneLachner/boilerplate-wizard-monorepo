import { test, expect } from '@playwright/test';

test.describe('React Boilerplate App', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');

    // Check the page title
    await expect(page).toHaveTitle('React JS Boilerplate');

    // Check main heading
    await expect(page.locator('h1')).toContainText('Welcome to React JS Boilerplate');

    // Check description text
    await expect(page.locator('text=A modern, production-ready React boilerplate')).toBeVisible();
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
    await expect(page.locator('h1')).toContainText('Welcome to React JS Boilerplate');
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


  test('technology cards are displayed', async ({ page }) => {
    await page.goto('/');

    // Check that all technology cards are visible
    await expect(page.locator('text=React 18')).toBeVisible();
    await expect(page.locator('text=Vite')).toBeVisible();
    await expect(page.locator('text=React Router')).toBeVisible();
    await expect(page.locator('text=Vitest')).toBeVisible();
    await expect(page.locator('text=Playwright')).toBeVisible();
  });
});
