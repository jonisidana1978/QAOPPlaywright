// @ts-check
import { defineConfig } from '@playwright/test';

const config = ({
  testDir: './tests',
  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },

  reporter:[ ['list'],              // Console report
    ['html'],              // Playwright HTML report
    ['allure-playwright'] //'html',   // <-- Missing comma here
  ],
  use: {
    browserName: 'chromium',
    headless :false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  }
  
});

module.exports = config