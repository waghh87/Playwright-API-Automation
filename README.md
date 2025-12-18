# Playwright API Automation ✅

Automated API tests for the Petstore Swagger UI documentation (https://petstore.swagger.io/).
This project covers API collections for **Pet**, **Store**, and **User** and demonstrates typical API operations, file uploads, validation patterns, and Allure reporting.

---

## 🚀 Quick Start

Prerequisites
- Node.js (16+ recommended)
- npm (Windows tested)

Install dependencies

```bash
npm install
```

Run tests (default)

```bash
npx playwright test
```

Run tests and generate Allure report

```bash
npm run allure-report
```

Clean previous Allure results

```bash
npm run remove-result
```

---

## 🔧 Project Structure

| Path | Purpose |
| --- | --- |
| `playwright.config.js`, `playwright.config.ts` | Playwright configuration files and project settings |
| `tests/` | Main API test specs (e.g., `pet_collection.spec.js`, `Store_collection.spec.js`, `User_collection.spec.js`) |
| `e2e/` | Example TypeScript specs and seeds (`example.spec.ts`, `seed.spec.ts`) |
| `specs/` | Documentation/extra specs (`README.md`) |
| `allure-results/` | Allure raw results (generated at test time) |
| `allure-report/`, `allure-project/` | Generated Allure HTML report / example project files |
| `playwright-report/` | Playwright HTML report output |
| `test-results/` | Other test artifacts and outputs |

---

## 🧪 What the tests cover

- CRUD operations for **Pet**, **Store**, and **User** collections (GET, POST, PUT, DELETE)
- File/image upload flow for pet image uploads
- Response validation using `.json()` and `.text()` helpers
- Conditional validation examples and example patterns for robust API checks
- Allure integration for richer reports and attachments

---

## ⚙️ Configuration & Scripts

Important npm scripts from `package.json`:

- `npm run remove-result` — remove `allure-results` directory (Windows `rmdir /s /q`) 
- `npm run allure-report` — run Playwright tests (Chromium), generate an Allure report, then open it

You can run specific tests or files, for example:

```bash
npx playwright test tests/pet_collection.spec.js
```

Or run a single test by title:

```bash
npx playwright test -g "should create a pet"
```

---

## 📋 Notes & Tips

- Allure results are stored in `allure-results/` and the generated report is in `allure-report/`.
- If you add tests that generate attachments, Allure will pick them up automatically.
- Use `--project` to run tests in a specific browser profile if configured in `playwright.config.*`.

---

## 📸 Examples & Allure Snapshot

- **Allure snapshot (local preview):** `docs/allure-snapshot.html` — open this file after generating a report locally to view an embedded preview of `allure-report/index.html`.
- **Screenshot preview:** `docs/screenshots/allure-sample.svg`
- **Detailed test examples:** `docs/test-examples.md` — copyable snippets (GET/POST/PUT/DELETE, file upload, `.json()`/`.text()`, conditional checks).

---

## Contributing

Thanks for considering a contribution! Please follow the guidelines in `CONTRIBUTING.md` for reporting issues, proposing changes, and submitting pull requests. At minimum:

- Open an issue to discuss significant changes before submitting a PR.
- Create clear, focused commits and a descriptive PR title + description.
- Add tests or documentation changes for new features.

---

## License

This project is provided as-is. Update `package.json` to include author/license metadata as needed.

