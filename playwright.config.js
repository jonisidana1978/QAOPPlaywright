// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },

  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright'],
  ],

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
      },
    },
  ],

  use: {
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});