// @ts-check
import { defineConfig } from '@playwright/test';

const config = ({
  testDir: './tests',
  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },

  reporter: 'html',   // <-- Missing comma here
// playwright.config.js
module.exports = {
  reporter: [
    ['line'],
    ['allure-playwright']
  ],
},
  use: {
    browserName: 'chromium',
    headless :false
  }
  
});

module.exports = config