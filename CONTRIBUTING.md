# Contributing to SkateUp

Thanks for your interest in contributing! This document covers small contributor guidelines to make collaboration smooth.

## Getting started

1. Fork the repository and create a branch from `main`.
   - Branch naming: `feature/short-desc`, `fix/short-desc`, or `docs/short-desc`.
2. Install dependencies and run the dev server:

```bash
npm run install-frontend
npm run dev
```

3. Make small, focused commits with clear messages. Follow the commit convention: `type: short description` (e.g. `fix: button focus state`, `docs: update README`).

## Pull requests

- Open a PR from your branch to `main` with a clear title and short description of your change.
- Include screenshots or gifs for visual changes.
- Mention any manual steps required to test the change (seed data, env vars).
- Use the available issue templates (if any) and link related issues in the PR body.

## Code style

- Keep components small and focused.
- Prefer semantic HTML elements (`main`, `aside`, `nav`, `header`, `footer`, `article`) for accessibility.
- Keep CSS scoped and organized in `frontend/app/app.css`. For larger components, consider CSS modules or utility approaches.
- Use ES6+ syntax (const/let, arrow functions, template strings). Keep code readable and comment non-obvious logic.

## Tests

- If you add behavior that benefits from unit tests, include a small test using Jest + React Testing Library (if the project adds these dev deps).
- Keep tests fast and focused (render + one interaction expectation).

## Data and seeding

- See `docs/DEVELOPER.md` for instructions to run the app and seed Supabase using `supabase/seed.sql`.
- For PRs that depend on seeded data, note this clearly in the PR description and provide exact SQL snippets or steps.

## Security & secrets

- Do not commit environment variables or secrets. `frontend/.env` is listed in `.gitignore` already.
- Use `frontend/.env.example` to show required environment variable names.

## Review checklist (for contributors)

Before requesting review, ensure:

- The app builds and any new UI has no obvious accessibility regressions.
- You added or updated documentation if the change impacts developer setup.
- Tests were added for key behaviors where practical.

---

If you'd like, I can also add a PR template and a simple GitHub Actions workflow to run lint/tests on PRs. Would you like me to add those next?
