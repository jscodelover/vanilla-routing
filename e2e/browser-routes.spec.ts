import { expect, test, type Page } from '@playwright/test';

const baseBrowserRouteURL = 'http://localhost:3000';

test.beforeEach(async ({ page }) => {
  await page.goto(baseBrowserRouteURL);
});

async function gotoAboutPage(page: Page) {
  await page.getByRole('link', { name: 'About', exact: true }).click();
}

test.describe('BrowserRoute', () => {
  test('Initial page route', async ({ page }) => {
    const locator = page.locator('h2');
    await expect(locator).toHaveText('HOME PAGE');
  });

  test('Anchor link', async ({ page }) => {
    await gotoAboutPage(page);
    await expect(page).toHaveURL(`${baseBrowserRouteURL}/about`);
  });

  test('Check the go method', async ({ page }) => {
    await gotoAboutPage(page);
    await page.getByRole('button').click();
    await expect(page).toHaveURL(/about\/*/);
  });

  test('Back via button click', async ({ page }) => {
    await page
      .getByRole('link')
      .filter({ hasText: /About me/i })
      .click();
    await page.getByRole('button').filter({ hasText: 'Go back' }).click();
    await expect(page).toHaveURL(baseBrowserRouteURL);
  });

  test('nested route using link with params', async ({ page }) => {
    await page.getByRole('link').filter({ hasText: /CSS/ }).click();
    const subPathHeadingLocator = page.locator('h3');
    const pathHeadingLocator = page.locator('h2');
    await expect(page).toHaveURL(/learn\/css/);
    await expect(pathHeadingLocator).toHaveText(/LEARN/);
    await expect(subPathHeadingLocator).toHaveText(/CSS/);
  });

  test('search for the nested route', async ({ page }) => {
    await page.goto(`${baseBrowserRouteURL}/learn/js`);
    await expect(page).toHaveURL(/learn\/js/);
  });

  test('Replace path', async ({ page }) => {
    // JS -> Library Publishing -> Replace CSS -> Browser Back -> JS
    await page.goto(`${baseBrowserRouteURL}/learn/js`);
    await expect(page).toHaveURL(/learn\/js/);
    await page.getByRole('link', { name: 'Library publishing' }).click();
    await expect(page).toHaveURL(/learn\/js\/library-publishing/);
    await expect(page.locator('h4')).toHaveText(
      /Learning JS library publishing/
    );
    await page.getByRole('button', { name: /Replace with css page/i }).click();
    await expect(page).toHaveURL(/learn\/css/);
    await page.goBack();
    await expect(page).toHaveURL(/learn\/js/);
    await expect(page.locator('h3')).toHaveText(/JS/);
  });

  test('Forward via button click', async ({ page }) => {
    // HOME -> ABOUT -> JS -> Browser Back -> landing on ABOUT -> use forward button -> JS
    await page
      .getByRole('link')
      .filter({ hasText: /About me/i })
      .click();
    await expect(page.locator('h2')).toHaveText(/About Page/i);
    await page.getByRole('link').filter({ hasText: /JS/ }).click();
    await expect(page.locator('h3')).toHaveText(/js/i);
    await page.goBack();
    await expect(page.locator('h2')).toHaveText(/About Page/i);
    await page.getByRole('button', { name: /Go Forward/i }).click();
    await expect(page.locator('h3')).toHaveText(/js/i);
  });

  test('404 page', async ({ page }) => {
    await page.goto(`${baseBrowserRouteURL}/path-doesnot-exist`);
    expect(page.getByText(/Page not Found/i)).toBeTruthy();
  });

  test('search for nested 404 page', async ({ page }) => {
    await page.goto(`${baseBrowserRouteURL}/learn/js/test`);
    await expect(page.getByText(/Learning JS/i)).toBeVisible();
    await expect(page.getByText(/Page not Found/i)).toBeVisible();
  });

  test('click the nested 404 page', async ({ page }) => {
    await page.getByRole('link', { name: 'Library Creation' }).click();
    await expect(page.getByText(/Learning JS/i)).toBeVisible();
    await expect(page.getByText(/Page not Found/i)).toBeVisible();
  });
});
