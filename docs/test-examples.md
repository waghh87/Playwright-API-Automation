# Test Examples — Playwright API

This document contains short, copyable examples demonstrating common API test patterns used in this project.

## Example: Create a Pet (POST)

```js
const { test, expect } = require('@playwright/test');

test('create pet', async ({ request }) => {
  const payload = { id: 12345, name: 'fluffy', photoUrls: [] };
  const response = await request.post('/v2/pet', { data: payload });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.id).toBe(payload.id);
});
```

## Example: Get a Pet (GET)

```js
test('get pet by id', async ({ request }) => {
  const response = await request.get('/v2/pet/12345');
  expect(response.status()).toBe(200);
  const json = await response.json();
  expect(json.name).toBe('fluffy');
});
```

## Example: Update a Pet (PUT)

```js
test('update pet', async ({ request }) => {
  const payload = { id: 12345, name: 'fluffy-updated' };
  const response = await request.put('/v2/pet', { data: payload });
  expect(response.status()).toBe(200);
  const json = await response.json();
  expect(json.name).toBe('fluffy-updated');
});
```

## Example: Delete a Pet (DELETE)

```js
test('delete pet', async ({ request }) => {
  const response = await request.delete('/v2/pet/12345');
  expect(response.status()).toBe(200);
});
```

## Example: Upload an image (multipart/form-data)

```js
const fs = require('fs');

test('upload pet image', async ({ request }) => {
  const fileBuffer = fs.readFileSync('tests/image_upload_file.txt');
  const response = await request.post('/v2/pet/12345/uploadImage', {
    multipart: {
      file: {
        name: 'file',
        mimeType: 'text/plain',
        buffer: fileBuffer
      },
      additionalMetadata: 'some info'
    }
  });
  expect(response.status()).toBe(200);
});
```

## Working with responses: `.json()` and `.text()`

- Use `await response.json()` to parse JSON responses and inspect fields.
- Use `await response.text()` to get raw text when verifying plain text responses or error messages.

## Conditional validation example

```js
test('conditional validation example', async ({ request }) => {
  const response = await request.get('/v2/store/inventory');
  expect(response.status()).toBe(200);
  const body = await response.json();
  if (body && body.available && body.available > 0) {
    // Additional checks when inventory exists
    expect(body.available).toBeGreaterThanOrEqual(0);
  } else {
    // A fallback assertion
    expect(typeof body).toBe('object');
  }
});
```

## Running a single test or test file

- Run a single test file: `npx playwright test tests/pet_collection.spec.js`
- Run a single test by title: `npx playwright test -g "should create a pet"`

---

These examples are lightweight — adapt them to your project's conventions, and add any shared helpers or fixtures for repeated patterns.