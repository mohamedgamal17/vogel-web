# Implementation Plan: Modern Design Refresh

**Branch**: `005-modern-design-refresh` | **Date**: 2026-04-26 | **Spec**: [`specs/005-modern-design-refresh/spec.md`](./spec.md)
**Input**: Feature specification from `/specs/005-modern-design-refresh/spec.md`

## Summary

Modernize the full application visual design across all existing pages by unifying colors, spacing,
typography, component states, and page hierarchy into a consistent token-driven system. The plan
preserves existing route behavior, auth flow behavior, and API contracts, while enforcing WCAG 2.1 AA
accessibility and a measurable UI transition responsiveness target.

## Technical Context

**Language/Version**: TypeScript (Angular 21)  
**Primary Dependencies**: Angular Router, Angular Material, Tailwind CSS v4, Auth0 Angular SDK  
**Storage**: N/A (visual redesign only; no new persistence model)  
**Testing**: `ng test`, ESLint (`npm run lint`), token policy checks (`npm run lint:tokens`), workflow/regression and accessibility validation  
**Target Platform**: Modern web browsers (mobile, tablet, desktop)  
**Project Type**: Single-project Angular SPA  
**Performance Goals**: 95% of measured page transitions show fully updated UI state in <=2 seconds under standard user conditions  
**Constraints**: Full existing-page scope; light theme only; dark theme deferred; WCAG 2.1 AA contrast/focus compliance; no auth behavior change; no backend contract changes  
**Scale/Scope**: All existing feature pages (`landing`, `home`, `auth`, `profile`, `posts`) plus shared UI/layout and token/theme layers

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Feature-first architecture is preserved (feature routes remain lazy-loaded from `app.routes.ts` to feature `*.routes.ts` files)
- [x] Data-access boundaries are respected (visual refresh only; page/service/component orchestration boundaries unchanged)
- [x] Base UI strategy uses app design tokens and avoids ad-hoc third-party token leakage (`src/styles/design-tokens.css` and `src/material-theme.scss` remain token bridge sources)
- [x] Auth and API contract stability assumptions are documented with clear scope boundaries (auth/API behavior unchanged by this plan)
- [x] Independent story delivery and measurable validation strategy are defined (spec stories and SC-001..SC-006 drive validation)

## Project Structure

### Documentation (this feature)

```text
specs/005-modern-design-refresh/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── app.routes.ts
│   ├── core/
│   ├── features/
│   │   ├── auth/
│   │   ├── home/
│   │   ├── landing/
│   │   ├── posts/
│   │   └── profile/
│   ├── layout/
│   ├── layouts/
│   └── shared/
├── styles/
│   └── design-tokens.css
├── styles.css
└── material-theme.scss
```

**Structure Decision**: Keep the existing Angular SPA feature structure and apply modernization
changes in-place across all existing feature pages and shared UI styling layers, without introducing
new app partitions or route topology changes.

## Phase 0: Research Output

- Confirmed token-first modernization approach is required and should anchor styling changes through
  app design tokens and the centralized Material bridge.
- Confirmed full-page scope (all existing pages) and light-theme-only delivery for this feature.
- Confirmed accessibility acceptance baseline is WCAG 2.1 AA with explicit focus visibility.
- Confirmed performance objective for perceived page-transition readiness (95% <=2 seconds target).
- Confirmed auth and backend contract behaviors are preserved as non-negotiable constraints.

## Phase 1: Design & Contracts

- Defined data entities for token system, page coverage, component state behavior, and rollout status.
- Defined a UI modernization contract for scope, accessibility, performance, and non-regression.
- Authored quickstart validation sequence for linting, tests, accessibility checks, and stakeholder sign-off.
- Updated agent context in `.cursor/rules/specify-rules.mdc` to reference this plan.

## Post-Design Constitution Check

- [x] Feature-first architecture preserved after design (no route-entry pattern changes)
- [x] Data-access boundaries preserved after design (no service ownership leakage into presentational components)
- [x] Token-first design strategy preserved in planned implementation artifacts
- [x] Auth/API stability constraints encoded in contract and quickstart validations
- [x] Measurable validation remains aligned with success criteria and story independence
- [x] Final implementation pass confirms the same architecture/data-access/token/auth constraints remain intact

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
