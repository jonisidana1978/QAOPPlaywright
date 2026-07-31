// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  workers: 2,
  retries : 2,
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

        baseURL:'https://docs.oracle.com/javase/8/docs/api/',

        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'on',
      },
    },
  ],

  use: {
    headless: true,
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'on',
    
    
  },
});