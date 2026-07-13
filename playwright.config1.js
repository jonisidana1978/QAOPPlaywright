// @ts-check
import { defineConfig } from '@playwright/test';
import { url } from 'node:inspector';

const config = ({
  testDir: './tests',
  timeout: 40 * 1000,
  retries:1,
  //workers:1,

  expect: {
    timeout: 40 * 1000,
  },

  reporter:[ ['list'],              // Console report
    ['html'],              // Playwright HTML report
    ['allure-playwright'] //'html',   // <-- Missing comma here
  ],
 projects:[
  {
    name :'firefox',
    use: {
    browserName: 'firefox',
    headless :false,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  //  viewport:{width:300,height:400},
  }},
  {
    name :'chrome',
    use: {
    browserName: 'chromium',
    headless :false,
    screenshot: 'On',
    video: 'retain-on-failure',
    trace: 'on',
   // viewport:{width:300,height:400},
    //video:'retain-on-failure',
  }
  }
 ]
  
});

module.exports = config