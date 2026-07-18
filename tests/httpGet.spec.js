const { test, expect } = require('@playwright/test');

test('make an HTTP GET request with Playwright', async ({ request }) => {
  // Define the target endpoint
  const url = 'https://jsonplaceholder.typicode.com/posts/1';

  // Send the GET request
  const response = await request.get(url);

  // Verify the response status
  await expect(response).toBeOK();
  await expect(response.status()).toBe(200);

  // Parse the JSON response body
  const responseBody = await response.json();

  // Validate response data from the public test API
  await expect(responseBody).toHaveProperty('id', 1);
  await expect(responseBody).toHaveProperty('userId');
  await expect(responseBody).toHaveProperty('title');

  console.log('GET response body:', responseBody);
});
