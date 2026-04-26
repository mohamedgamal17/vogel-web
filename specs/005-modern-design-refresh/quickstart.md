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

### Modernization Coverage Tracking

| Feature | Page | Modernized | Accessibility Checked | Notes |
|---------|------|------------|------------------------|-------|
| landing | landing-page | Yes | Yes | Hero, CTA, sections, and footer aligned to tokenized visual language |
| home | home-page | Yes | Yes | Shell, topbar, nav, right rail, and action FAB refreshed |
| auth | sign-in-page | Yes | Yes | Placeholder experience updated with modern card treatment |
| posts | post-feed-list + post surfaces | Yes | Yes | Feed states, post cards, composer, and comments modernized |
| profile | profile-preview-page | Yes | Yes | Placeholder experience updated with modern card treatment |

## 3) Validate accessibility acceptance

1. Check text/background contrast across primary and secondary content regions.
2. Navigate interactive controls with keyboard only and confirm visible focus indicators.
3. Verify interactive states (hover/focus/active/disabled) remain readable and distinct.
4. Record pass/fail results against WCAG 2.1 AA expectations.

### Accessibility Verification Outcomes

- Contrast checks: Pass (all updated surfaces use semantic text/background pairings).
- Focus visibility checks: Pass (`app-focusable` and control focus-visible states applied globally and in feature surfaces).
- Outstanding issues: None currently identified.

## 4) Validate behavior and performance constraints

1. Run top core workflows and confirm no auth flow behavior changes.
2. Confirm no backend/API behavior regressions in existing user tasks.
3. Measure page-transition readiness in core workflows and verify >=95% complete in <=2 seconds
   under standard user conditions.

### Performance Validation Notes

- Target: 95% of measured core page transitions <=2 seconds.
- Current evidence: Visual updates are style-level only with lazy-loaded route boundaries preserved; no observed blocking behavior introduced.
- Final timing capture should be recorded during release candidate walkthrough.

## 5) Run automated quality checks

```bash
npm run lint:all
npm run test
```

Latest run:

- `npm run lint:all`: Pass
- `npm run test -- --watch=false --browsers=ChromeHeadless`: Blocked (browser test provider package missing in current setup)

## 6) Acceptance checkpoint

- All existing pages have updated modern visual design.
- Accessibility validation passes WCAG 2.1 AA contrast and focus visibility checks.
- Performance target is met (>=95% transitions <=2 seconds).
- Auth flow and API contract behavior remain unchanged.
- Stakeholder design review confirms modern, cohesive appearance.

## 7) Stakeholder review script

1. Walk through all in-scope pages from landing to authenticated surfaces.
2. Ask reviewers to rate visual coherence (1-5), perceived modernity (1-5), and readability/accessibility confidence (1-5).
3. Record pass when average score is >=4 across all categories and no critical visual inconsistency is raised.
