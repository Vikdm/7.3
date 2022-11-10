import { login, pass } from "../user";
import { test, expect } from '@playwright/test';


test('Успешная авторизация', async ({ page }) => {

  await page.goto("https://netology.ru/");

  await page.getByRole("link", { name: "Войти" }).click();

  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");

  await page.getByPlaceholder("Email").click();

  await page.getByPlaceholder("Email").fill(login);

  await page.getByPlaceholder("Пароль").click();

  await page.getByPlaceholder("Пароль").fill(pass);

  await page.getByTestId("login-submit-btn").click();

  await page.locator("text=Мои курсы и профессии").isVisible();
});

test("Неуспешная авторизация", async ({ page }) => {
 
  await page.goto("https://netology.ru/");

  await page.getByRole("link", { name: "Войти" }).click();

  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");

  await page.getByPlaceholder("Email").click();

  await page.getByPlaceholder("Email").fill("email@email.netnet");

  await page.getByPlaceholder("Пароль").click();

  await page.getByPlaceholder("Пароль").fill("pass-password");

  await page.getByTestId("login-submit-btn").click();

  await page.getByTestId("login-error-hint").isVisible();
});
