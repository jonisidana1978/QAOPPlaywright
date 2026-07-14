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
        baseURL: 'https://docs.oracle.com/javase/8/docs/api/',
        browserName: 'chromium',
        headless: false,
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