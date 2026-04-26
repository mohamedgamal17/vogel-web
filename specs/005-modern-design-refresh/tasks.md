# Tasks: Modern Design Refresh

**Input**: Design documents from `/specs/005-modern-design-refresh/`  
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Automated tests are not explicitly requested as TDD tasks in the specification; this task list focuses on implementation plus validation checkpoints from `quickstart.md`.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Baseline setup for full-scope modernization execution

- [X] T001 Confirm current feature references in `specs/005-modern-design-refresh/spec.md`, `specs/005-modern-design-refresh/plan.md`, and `specs/005-modern-design-refresh/contracts/modern-design-contract.md`
- [X] T002 Confirm plan pointer is active in `.cursor/rules/specify-rules.mdc`
- [X] T003 [P] Create modernization tracking table for all pages in `specs/005-modern-design-refresh/quickstart.md`
- [X] T004 [P] Define shared validation checklist entries for coverage/accessibility/performance in `specs/005-modern-design-refresh/checklists/requirements.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared styling and architecture prerequisites that block all user stories

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Establish updated global color/typography/spacing tokens in `src/styles/design-tokens.css`
- [X] T006 Update Material bridge token mapping for new semantic theme values in `src/material-theme.scss`
- [X] T007 [P] Align app-level utility token exposure with the redesign token set in `src/styles.css`
- [X] T008 [P] Audit root routing lazy-load references for unchanged feature route boundaries in `src/app/app.routes.ts`
- [X] T009 Create page modernization coverage artifact from existing routes in `specs/005-modern-design-refresh/data-model.md`
- [X] T010 Verify auth/API stability constraints and scope exclusions are recorded in `specs/005-modern-design-refresh/contracts/modern-design-contract.md`

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Consistent Modern Visual Experience (Priority: P1) 🎯 MVP

**Goal**: Deliver a unified modern visual system across all existing application pages and shared component surfaces

**Independent Test**: Navigate all pages in `landing`, `home`, `auth`, `posts`, and `profile`; confirm consistent color system, hierarchy, and component-state styling without behavior regressions

### Implementation for User Story 1

- [X] T011 [US1] Modernize landing page shell and section spacing in `src/app/features/landing/pages/landing-page/landing-page.scss`
- [X] T012 [P] [US1] Modernize landing hero/header presentation in `src/app/features/landing/components/landing-hero/landing-hero.scss` and `src/app/features/landing/components/landing-header/landing-header.scss`
- [X] T013 [P] [US1] Modernize landing section cards/CTA/footer styling in `src/app/features/landing/components/landing-feature-highlights/landing-feature-highlights.html`, `src/app/features/landing/components/landing-how-it-works/landing-how-it-works.html`, `src/app/features/landing/components/landing-final-cta/landing-final-cta.scss`, and `src/app/features/landing/components/landing-footer/landing-footer.html`
- [X] T014 [US1] Modernize home page layout styling with unified hierarchy in `src/app/features/home/pages/home-page/home-page.scss`
- [X] T015 [P] [US1] Modernize home shared chrome components in `src/app/features/home/components/home-topbar/home-topbar.scss`, `src/app/features/home/components/home-sidebar-nav/home-sidebar-nav.scss`, and `src/app/features/home/components/home-right-rail/home-right-rail.scss`
- [X] T016 [P] [US1] Modernize quick actions and feed-adjacent UI in `src/app/features/home/components/home-quick-actions-fab/home-quick-actions-fab.scss` and `src/app/features/home/pages/home-page/home-page.html`
- [X] T017 [US1] Modernize sign-in experience visual shell and typography in `src/app/features/auth/pages/sign-in-page/sign-in-page.scss` and `src/app/features/auth/pages/sign-in-page/sign-in-page.html`
- [X] T018 [US1] Modernize post feed container and list styling in `src/app/features/posts/components/post-feed-list/post-feed-list.scss` and `src/app/features/posts/components/post-feed-list/post-feed-list.html`
- [X] T019 [P] [US1] Modernize post card/composer/comment surfaces in `src/app/features/posts/components/post/post.scss`, `src/app/features/posts/components/post-composer-panel/post-composer-panel.scss`, and `src/app/features/posts/components/post-comment-item/post-comment-item.scss`
- [X] T020 [P] [US1] Modernize profile preview presentation in `src/app/features/profile/pages/profile-preview-page/profile-preview-page.scss`
- [X] T021 [US1] Update shared component style profile tracking for modified surfaces in `specs/005-modern-design-refresh/data-model.md`
- [X] T022 [US1] Validate full-page modernization coverage and mark updated pages in `specs/005-modern-design-refresh/quickstart.md`

**Checkpoint**: User Story 1 delivers full-page modernized UI consistency and is independently verifiable

---

## Phase 4: User Story 2 - Accessible Color and Readability Improvements (Priority: P2)

**Goal**: Enforce WCAG 2.1 AA readability and visible focus states across redesigned pages and interactive controls

**Independent Test**: Run keyboard-only navigation and contrast checks across redesigned pages and verify accessible state visibility (default/hover/focus/disabled)

### Implementation for User Story 2

- [X] T023 [US2] Introduce accessible contrast and focus token set updates in `src/styles/design-tokens.css`
- [X] T024 [US2] Apply global focus-visible and interaction-state behavior in `src/styles.css`
- [X] T025 [P] [US2] Apply accessible focus state styles for landing interactive elements in `src/app/features/landing/components/landing-header/landing-header.scss` and `src/app/features/landing/components/landing-final-cta/landing-final-cta.scss`
- [X] T026 [P] [US2] Apply accessible state/readability improvements for home controls in `src/app/features/home/components/home-topbar/home-topbar.scss` and `src/app/features/home/components/home-sidebar-nav/home-sidebar-nav.scss`
- [X] T027 [P] [US2] Apply accessible state/readability improvements for posts controls in `src/app/features/posts/components/post/post.scss` and `src/app/features/posts/components/post-composer-panel/post-composer-panel.scss`
- [X] T028 [US2] Apply accessible state/readability improvements for auth/profile pages in `src/app/features/auth/pages/sign-in-page/sign-in-page.scss` and `src/app/features/profile/pages/profile-preview-page/profile-preview-page.scss`
- [X] T029 [US2] Record WCAG 2.1 AA verification outcomes and unresolved issues (if any) in `specs/005-modern-design-refresh/quickstart.md`
- [X] T030 [US2] Update accessibility contract evidence for redesign scope in `specs/005-modern-design-refresh/contracts/modern-design-contract.md`

**Checkpoint**: User Story 2 delivers measurable accessibility/readability improvements independent of stakeholder-presentation polish

---

## Phase 5: User Story 3 - Stronger First Impression for Stakeholders (Priority: P3)

**Goal**: Deliver polished visual presentation quality and measurable stakeholder sign-off readiness

**Independent Test**: Conduct structured walkthrough of modernized pages and capture sign-off outcomes for coherence, professionalism, and perceived modernity

### Implementation for User Story 3

- [X] T031 [US3] Refine hierarchy/elevation polish for cross-page visual coherence in `src/material-theme.scss`
- [X] T032 [P] [US3] Refine surface-level polish details for landing and home hero/navigation emphasis in `src/app/features/landing/pages/landing-page/landing-page.scss` and `src/app/features/home/pages/home-page/home-page.scss`
- [X] T033 [P] [US3] Refine surface-level polish details for posts and profile showcase areas in `src/app/features/posts/components/post-feed-list/post-feed-list.scss` and `src/app/features/profile/pages/profile-preview-page/profile-preview-page.scss`
- [X] T034 [US3] Capture stakeholder review script and scoring criteria in `specs/005-modern-design-refresh/quickstart.md`
- [X] T035 [US3] Record stakeholder sign-off evidence against SC-002 and SC-004 in `specs/005-modern-design-refresh/spec.md`

**Checkpoint**: User Story 3 delivers presentation-grade polish and stakeholder-ready validation evidence

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final cross-story hardening and release-readiness checks

- [X] T036 [P] Reconcile token usage drift and remove deprecated styling references in `src/styles/design-tokens.css` and `src/material-theme.scss`
- [X] T037 Re-run quality commands and document results in `specs/005-modern-design-refresh/quickstart.md`
- [ ] T038 Validate page-transition performance target evidence (95% <=2s) and log findings in `specs/005-modern-design-refresh/quickstart.md`
- [X] T039 Re-verify auth/API non-regression expectations and update confirmation notes in `specs/005-modern-design-refresh/contracts/modern-design-contract.md`
- [X] T040 Update completion statuses for all modernization entities in `specs/005-modern-design-refresh/data-model.md`
- [X] T041 Final constitution alignment re-check for architecture/data-access/design-token rules in `specs/005-modern-design-refresh/plan.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies - starts immediately
- **Phase 2 (Foundational)**: Depends on Phase 1 - blocks all user stories
- **Phase 3 (US1)**: Depends on Phase 2 - MVP delivery
- **Phase 4 (US2)**: Depends on Phase 2 and integrates with US1 styling outputs
- **Phase 5 (US3)**: Depends on US1 baseline and benefits from US2 accessibility refinements
- **Phase 6 (Polish)**: Depends on completion of selected user stories

### User Story Dependencies

- **US1 (P1)**: No dependencies on other stories after foundational phase; can ship as MVP
- **US2 (P2)**: Builds on US1 modernized surfaces but remains independently testable for accessibility outcomes
- **US3 (P3)**: Builds on US1/US2 outputs for stakeholder polish and sign-off evidence

### Within Each User Story

- Base page/shell updates before component-level refinements
- Visual token or global state updates before page-level accessibility checks
- Story validation evidence tasks complete before checkpoint declaration

### Parallel Opportunities

- Phase 1 tasks marked `[P]` can run in parallel
- Phase 2 tasks marked `[P]` can run in parallel
- In US1, tasks T012/T013, T015/T016, and T019/T020 can run in parallel
- In US2, tasks T025/T026/T027 can run in parallel
- In US3, tasks T032/T033 can run in parallel

---

## Parallel Example: User Story 1

```bash
# Parallel landing visual refinements
Task: "T012 [US1] Modernize landing hero/header presentation in src/app/features/landing/components/landing-hero/landing-hero.scss and src/app/features/landing/components/landing-header/landing-header.scss"
Task: "T013 [US1] Modernize landing section cards/CTA/footer styling in src/app/features/landing/components/landing-feature-highlights/landing-feature-highlights.html, src/app/features/landing/components/landing-how-it-works/landing-how-it-works.html, src/app/features/landing/components/landing-final-cta/landing-final-cta.scss, and src/app/features/landing/components/landing-footer/landing-footer.html"

# Parallel cross-feature surface refinements
Task: "T015 [US1] Modernize home shared chrome components in src/app/features/home/components/home-topbar/home-topbar.scss, src/app/features/home/components/home-sidebar-nav/home-sidebar-nav.scss, and src/app/features/home/components/home-right-rail/home-right-rail.scss"
Task: "T019 [US1] Modernize post card/composer/comment surfaces in src/app/features/posts/components/post/post.scss, src/app/features/posts/components/post-composer-panel/post-composer-panel.scss, and src/app/features/posts/components/post-comment-item/post-comment-item.scss"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 and Phase 2
2. Complete Phase 3 (US1)
3. Validate full-page consistency using US1 independent test criteria
4. Demo MVP modernization baseline

### Incremental Delivery

1. Foundation complete (Phases 1-2)
2. Deliver US1 for full-page visual consistency
3. Deliver US2 for accessibility/readability enforcement
4. Deliver US3 for stakeholder-first polish and sign-off
5. Complete cross-cutting polish tasks

### Parallel Team Strategy

1. Team aligns on shared tokens/material bridge updates (Phase 2)
2. Split by feature area during US1/US2:
   - Developer A: landing + auth
   - Developer B: home + profile
   - Developer C: posts + cross-cutting styles
3. Consolidate validation and sign-off evidence in Phase 6

---

## Notes

- [P] tasks are scoped to different files to reduce merge conflicts
- User story labels maintain traceability back to `spec.md`
- Each story has explicit independent verification criteria
- Keep auth/API behavior stable while modernizing visuals
- Dark theme remains out of scope for this feature
