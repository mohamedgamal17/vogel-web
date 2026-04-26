# Quickstart: Validate Base UI Refactor

## Prerequisites

- Node.js and npm installed
- Angular CLI available through project scripts
- Valid Auth0 environment configuration in `src/environments/environment.ts`

## 1) Install and run

```bash
npm install
npm run start
```

Open `http://localhost:4200`.

## 2) Verify primary user flows

1. Open landing page and review top-level shell, typography, spacing, and CTA states.
2. Open post page through the current app flow and confirm consistent shell/pattern behavior.
3. Confirm visual language consistency between landing and post surfaces only.
4. Confirm existing auth flow behavior is unchanged while updated auth-related copy/labels remain consistent.

## 3) Run quality checks

```bash
npm run lint:all
npm run test
```

Latest automated run status:

- `npm run lint:all`: pass
- `npm run test -- --watch=false`: pass

## 4) Validate edge cases

1. Long text content does not break layout structure.
2. Mobile, tablet, and desktop viewports preserve readability, spacing rhythm, and usable navigation.
3. Session state transitions (including expiry/redirect behavior) remain understandable and stable.
4. API failure states expose retry actions and user feedback; recoverable failures can be retried without full page reload.
5. Accessibility checks show no unresolved WCAG AA violations and document feasible AAA improvements.

## 5) Acceptance checkpoint

- Shared base shell and pattern language are visible across in-scope pages.
- In-scope pages are only landing and post surfaces.
- No auth or API behavior regressions are observed.
- Success criteria in `spec.md` can be evaluated using observed behavior and stakeholder review.

## Verification Notes

- UI retry affordance is implemented in post feed state handling and can be triggered from recoverable load failures.
- Authentication entry flow remains unchanged; copy/label updates are limited to landing CTA wording.
