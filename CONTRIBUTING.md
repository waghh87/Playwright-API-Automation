# Contributing

Thank you for considering contributing to this project! We welcome bug reports, feature requests, and pull requests.

## How to contribute

1. Fork the repository and create a branch for your change: `git checkout -b my-feature`.
2. Make changes in a clear, focused way. Keep commits small and descriptive.
3. Update or add tests for new functionality where applicable.
4. Open a pull request with a clear title and description explaining the change and why it's needed.

## Development workflow

- Install dependencies: `npm install`
- Run tests: `npx playwright test`
- Generate Allure report locally: `npm run allure-report` (this will run tests and attempt to generate and open the Allure report)

## Code style

- Keep code readable and consistent with existing files.
- Use descriptive variable and function names.
- Add or update documentation when introducing new behavior.

## Pull request guidelines

- Provide a clear description and context for your change.
- Link to related issues (if any).
- Include tests or a manual test plan for the change.
- Ensure CI passes (Playwright job) before requesting review.

## Reporting issues

- Use the issue tracker to report bugs or suggest improvements.
- Include steps to reproduce, expected vs actual behavior, and any logs or screenshots if helpful.

Thanks again — contributions keep the project healthy and growing! 💡