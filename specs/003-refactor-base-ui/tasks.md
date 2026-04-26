# Tasks: Base UI Refactor

**Input**: Design documents from `/specs/003-refactor-base-ui/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Manual and validation tasks are included. Automated test additions are not required by the spec and are not included as mandatory implementation tasks.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare shared UI refactor baseline and validation checklist.

- [x] T001 Confirm in-scope feature docs alignment in `specs/003-refactor-base-ui/spec.md`, `specs/003-refactor-base-ui/plan.md`, and `specs/003-refactor-base-ui/contracts/base-ui-contract.md`
- [ ] T002 [P] Capture baseline screenshots for landing and post surfaces in `specs/003-refactor-base-ui/quickstart.md` verification notes
- [x] T003 [P] Audit current token usage for in-scope pages in `src/app/features/landing/**/*.scss` and `src/app/features/posts/**/*.scss`
- [x] T004 Add/confirm constitution compliance checklist entries in `specs/003-refactor-base-ui/plan.md` for architecture, design tokens, auth stability, and retry behavior

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build shared foundations required by all user stories.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 Extend shared design tokens for missing base UI states in `src/styles/design-tokens.css`
- [x] T006 Update Material bridge token mappings and shared state variables in `src/material-theme.scss`
- [x] T007 [P] Normalize public shell spacing/typography container behavior in `src/app/layouts/public-layout/public-layout.scss`
- [x] T008 [P] Normalize authenticated shell spacing/typography container behavior in `src/app/layouts/main-layout/main-layout.scss`
- [x] T009 Define reusable retry-state UI contract and feedback copy guidelines in `src/app/features/posts/models/post.model.ts` and `specs/003-refactor-base-ui/contracts/base-ui-contract.md`
- [x] T010 Document accessibility baseline (AA required, AAA where feasible) and review checklist in `specs/003-refactor-base-ui/quickstart.md`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Consistent Core Experience (Priority: P1) 🎯 MVP

**Goal**: Deliver a consistent base visual language and shell behavior across landing and post surfaces.

**Independent Test**: Navigate between landing and post surfaces and verify consistent typography, spacing, interactive states, and structural orientation across mobile/tablet/desktop.

### Implementation for User Story 1

- [x] T011 [P] [US1] Refactor landing page shell spacing and section rhythm in `src/app/features/landing/pages/landing-page/landing-page.scss`
- [x] T012 [P] [US1] Refactor post feed shell spacing and section rhythm in `src/app/features/posts/components/post-feed-list/post-feed-list.scss`
- [x] T013 [US1] Align landing interactive control states (default/hover/focus/active/disabled) in `src/app/features/landing/components/landing-header/landing-header.scss` and `src/app/features/landing/components/landing-final-cta/landing-final-cta.scss`
- [x] T014 [US1] Align post interactive control states in `src/app/features/posts/components/post-composer-panel/post-composer-panel.scss` and `src/app/features/posts/components/post/post.scss`
- [x] T015 [US1] Harmonize cross-surface typography token usage in `src/app/features/landing/**/*.html` and `src/app/features/posts/**/*.html`
- [ ] T016 [US1] Validate mobile/tablet/desktop conformance and record findings in `specs/003-refactor-base-ui/quickstart.md`

**Checkpoint**: User Story 1 is fully functional and independently testable

---

## Phase 4: User Story 2 - Reusable Base Components (Priority: P2)

**Goal**: Create reusable base UI patterns and apply them consistently across landing and post surfaces.

**Independent Test**: Confirm common shell/content/control patterns are reusable and referenced consistently across in-scope pages.

### Implementation for User Story 2

- [x] T017 [P] [US2] Define reusable page-surface pattern descriptors in `src/app/features/posts/models/post-composer.model.ts` and `src/app/features/home/models/home-navigation.model.ts`
- [x] T018 [US2] Extract shared container/panel pattern classes into `src/app/layouts/main-layout/main-layout.scss` and `src/app/layouts/public-layout/public-layout.scss`
- [x] T019 [P] [US2] Standardize landing feature section components to shared pattern classes in `src/app/features/landing/components/landing-feature-highlights/landing-feature-highlights.html` and `src/app/features/landing/components/landing-how-it-works/landing-how-it-works.html`
- [x] T020 [P] [US2] Standardize post presentation components to shared pattern classes in `src/app/features/posts/components/post/post.html` and `src/app/features/posts/components/post-comment-item/post-comment-item.html`
- [x] T021 [US2] Update design contract examples and pattern mapping in `specs/003-refactor-base-ui/contracts/base-ui-contract.md`

**Checkpoint**: User Stories 1 and 2 are independently functional

---

## Phase 5: User Story 3 - Stable App Behavior During Visual Refresh (Priority: P3)

**Goal**: Preserve functional auth/data behavior while applying UI refresh, including retry affordances and accessibility compliance.

**Independent Test**: Complete sign-in and post interaction flows, verify auth behavior unchanged, and verify retry and accessibility outcomes for in-scope surfaces.

### Implementation for User Story 3

- [x] T022 [P] [US3] Refresh auth-related UI labels/copy for consistency in `src/app/features/landing/components/landing-header/landing-header.html` and `src/app/features/landing/components/landing-hero/landing-hero.html`
- [x] T023 [US3] Keep auth flow behavior unchanged while validating sign-in entry points in `src/app/features/landing/pages/landing-page/landing-page.ts`
- [x] T024 [P] [US3] Implement retry UI state and retry trigger wiring for failed feed requests in `src/app/features/posts/components/post-feed-list/post-feed-list.ts` and `src/app/features/posts/components/post-feed-list/post-feed-list.html`
- [x] T025 [US3] Add retry handling support methods in `src/app/features/posts/services/posts-feed.service.ts`
- [x] T026 [P] [US3] Apply accessibility updates for focus visibility and contrast in `src/app/features/landing/**/*.scss` and `src/app/features/posts/**/*.scss`
- [ ] T027 [US3] Validate AA compliance and document feasible AAA enhancements in `specs/003-refactor-base-ui/quickstart.md`

**Checkpoint**: All user stories are independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Finalize consistency, documentation, and quality validation across stories.

- [x] T028 [P] Update feature documentation and implementation notes in `specs/003-refactor-base-ui/research.md` and `specs/003-refactor-base-ui/data-model.md`
- [x] T029 Run full quality checks (`npm run lint:all` and `npm run test`) and record results in `specs/003-refactor-base-ui/quickstart.md`
- [x] T030 Validate contract success metrics (including 95% retry recovery target) and update `specs/003-refactor-base-ui/contracts/base-ui-contract.md`
- [x] T031 Re-verify constitution compliance (architecture, token usage, auth/API stability) in `specs/003-refactor-base-ui/plan.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational completion
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Phase 2; establishes MVP baseline
- **User Story 2 (P2)**: Starts after Phase 2; can run with/after US1 but should remain independently testable
- **User Story 3 (P3)**: Starts after Phase 2; depends on stable UI patterns and preserves behavioral non-regression

### Within Each User Story

- Establish/align styles and structure before behavior-specific refinements
- Keep page orchestration in page/container files and API calls in services
- Complete story validation checkpoints before moving on

### Parallel Opportunities

- T002, T003 can run in parallel during setup
- T007 and T008 can run in parallel in foundational phase
- In US1, T011 and T012 can run in parallel
- In US2, T017, T019, and T020 can run in parallel
- In US3, T022, T024, and T026 can run in parallel

---

## Parallel Example: User Story 1

```bash
# Parallel style normalization tasks:
Task: "T011 [US1] Refactor landing page shell spacing in src/app/features/landing/pages/landing-page/landing-page.scss"
Task: "T012 [US1] Refactor post feed shell spacing in src/app/features/posts/components/post-feed-list/post-feed-list.scss"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 and Phase 2 foundations
2. Complete Phase 3 (US1) for consistent core experience
3. Validate cross-surface consistency on landing + post
4. Stop and demo MVP before expanding

### Incremental Delivery

1. Deliver US1 for visible consistency baseline
2. Deliver US2 for reusable pattern structure
3. Deliver US3 for behavior stability, retry handling, and accessibility completion
4. Finish with Phase 6 cross-cutting validation

### Parallel Team Strategy

1. Team completes setup/foundational tasks together
2. Split US2 and US3 in parallel after US1 baseline is merged
3. Run joint polish/verification pass before release

---

## Notes

- [P] tasks are scoped to separate files and can execute concurrently
- Story labels map each task to independently testable user outcomes
- Scope is intentionally limited to landing and post surfaces
- Auth flow behavior must remain unchanged while copy may be refreshed
- Retry behavior and accessibility checks are mandatory acceptance concerns for this feature
