# Quickstart: Validate Modern Design Refresh

## Prerequisites

- Node.js and npm installed
- Project dependencies installed
- Valid environment configuration for existing auth flow

## 1) Install and run the app

```bash
npm install
npm run start
```

Open `http://localhost:4200`.

## 2) Validate full-scope redesign coverage

1. Visit all existing pages across `landing`, `home`, `auth`, `posts`, and `profile`.
2. Confirm each page uses the updated visual language (colors, typography, spacing, hierarchy).
3. Confirm legacy color styling is no longer visible on in-scope pages.
4. Confirm light theme behavior is coherent across all pages.

## 3) Validate accessibility acceptance

1. Check text/background contrast across primary and secondary content regions.
2. Navigate interactive controls with keyboard only and confirm visible focus indicators.
3. Verify interactive states (hover/focus/active/disabled) remain readable and distinct.
4. Record pass/fail results against WCAG 2.1 AA expectations.

## 4) Validate behavior and performance constraints

1. Run top core workflows and confirm no auth flow behavior changes.
2. Confirm no backend/API behavior regressions in existing user tasks.
3. Measure page-transition readiness in core workflows and verify >=95% complete in <=2 seconds
   under standard user conditions.

## 5) Run automated quality checks

```bash
npm run lint:all
npm run test
```

## 6) Acceptance checkpoint

- All existing pages have updated modern visual design.
- Accessibility validation passes WCAG 2.1 AA contrast and focus visibility checks.
- Performance target is met (>=95% transitions <=2 seconds).
- Auth flow and API contract behavior remain unchanged.
- Stakeholder design review confirms modern, cohesive appearance.
