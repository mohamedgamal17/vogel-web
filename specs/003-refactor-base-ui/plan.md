# Implementation Plan: Base UI Refactor

**Branch**: `003-refactor-base-ui` | **Date**: 2026-04-26 | **Spec**: [`specs/003-refactor-base-ui/spec.md`](./spec.md)
**Input**: Feature specification from `/specs/003-refactor-base-ui/spec.md`

## Summary

Refactor the base UI for `landing` and `post` surfaces only, creating a consistent visual language,
layout shell, and reusable page-level patterns while preserving existing auth flow behavior.
This plan also includes UI-level retry affordances for API failures, tablet-specific responsive
optimization, and accessibility enforcement (WCAG AA required, AAA where feasible).

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript (Angular 21)  
**Primary Dependencies**: Angular Router, Angular Material, Tailwind CSS v4, Auth0 Angular SDK  
**Storage**: N/A (no new persistence introduced in this refactor)  
**Testing**: `ng test`, ESLint, design-token lint (`npm run lint:tokens`), responsive/accessibility regression checks  
**Target Platform**: Modern web browsers across mobile, tablet, and desktop  
**Project Type**: Single-project Angular SPA  
**Performance Goals**: Preserve existing interaction responsiveness while improving consistency; UI retries recover at least 95% of recoverable failures in validation  
**Constraints**: Scope limited to landing + post surfaces; auth flow unchanged (copy refresh allowed); no backend contract changes; token-first styles; WCAG AA required with AAA improvements where feasible  
**Scale/Scope**: Two in-scope surfaces (`landing`, `post`) with cross-viewport coverage (mobile, tablet, desktop)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Feature-first architecture is preserved (feature routing remains lazy-loaded; no root-route sprawl)
- [x] Data-access boundaries are respected (pages orchestrate, services call APIs, components remain presentational)
- [x] Base UI strategy uses app design tokens and avoids ad-hoc third-party token leakage
- [x] Auth and API contract stability assumptions are documented with clear scope boundaries
- [x] Independent story delivery and measurable validation strategy are defined

## Project Structure

### Documentation (this feature)

```text
specs/003-refactor-base-ui/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
src/
├── app/
│   ├── core/
│   ├── features/
│   │   ├── landing/
│   │   └── posts/
│   ├── layouts/
│   └── shared/
├── styles/
│   └── design-tokens.css
└── material-theme.scss
```

**Structure Decision**: Keep the current feature-based Angular structure and apply refactor changes
to in-scope feature surfaces (`landing`, `posts`) plus shared layout/token/theme files that define
base UI behavior.

## Phase 0: Research Output

- Confirmed the app already uses lazy-loaded feature routes from `app.routes.ts`.
- Confirmed Auth0 behavior is configured centrally and must remain functionally unchanged.
- Confirmed design tokens and Material token bridge are present and can anchor the refactor.
- Added clarified constraints: scope strictly landing + post surfaces; tablet optimization included;
  API failure states include UI retry; accessibility baseline is WCAG AA with AAA where feasible.

## Phase 1: Design & Contracts

- Updated data model to capture explicit viewport coverage, accessibility target, and retry behavior.
- Updated contract to encode scope boundaries, retry expectations, and accessibility acceptance.
- Updated quickstart validation checklist to test clarified behavior and success metrics directly.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
