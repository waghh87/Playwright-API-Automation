# Environment Setup Guide

## File Upload Configuration

The pet image upload test requires the `IMAGE_PATH` environment variable to be set.

### Windows

```cmd
set IMAGE_PATH=C:\path\to\your\image.png
npx playwright test tests/pet_collection.spec.js -g "Upload an image"
```

### macOS / Linux

```bash
export IMAGE_PATH=/path/to/your/image.png
npx playwright test tests/pet_collection.spec.js -g "Upload an image"
```

### Example

```bash
# Save an image file somewhere on your system, then:
export IMAGE_PATH=~/Downloads/my-pet.png
npx playwright test pet_collection.spec.js -g "Upload an image"
```

## Test Execution

### Run All Tests

```bash
npm run allure-report
```

### Run Specific Collection

```bash
npx playwright test tests/pet_collection.spec.js
npx playwright test tests/Store_collection.spec.js
npx playwright test tests/User_collection.spec.js
```

### Run with Specific Browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Known Issues Fixed

1. **File Path Handling**: Upload test now uses `IMAGE_PATH` env var instead of hardcoded path
2. **User Update URL**: Fixed invalid URL from `/v2/user/[]` to `/v2/user/Gotu96`
3. **Header Case Sensitivity**: Fixed `content-Type` → `content-type` in response header checks
4. **Response Parsing**: Added safe parsing for all user endpoints to handle both JSON and text responses
