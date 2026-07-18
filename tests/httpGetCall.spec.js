const { test, expect } = require('@playwright/test');

test('make an HTTP GET request with Playwright', async ({ request }) => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  const response = await request.get(url);

  await expect(response).toBeOK();
  await expect(response.status()).toBe(200);

  const responseBody = await response.json();

  await expect(responseBody).toHaveProperty('id', 1);
  await expect(responseBody).toHaveProperty('userId');
  await expect(responseBody).toHaveProperty('title');

  console.log('GET response body:', responseBody);
});
