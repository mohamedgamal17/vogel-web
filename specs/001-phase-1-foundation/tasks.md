# Tasks: Phase 1 Foundation Experience

**Input**: Design documents from `/specs/001-phase-1-foundation/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Include unit/integration/e2e coverage for risk-prone auth and feed flows.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project setup for Phase 1 delivery scaffolding and test harness alignment

- [x] T001 Confirm feature folder scaffolding and route placeholders in `src/app/features/`
- [x] T002 [P] Add Phase 1 environment API base and auth keys in `src/environments/environment.ts` and `src/environments/environment.development.ts`
- [x] T003 [P] Add shared request/retry constants in `src/app/core/api/api.constants.ts`
- [x] T004 [P] Add test utility mocks for auth/feed API payloads in `tests/unit/mocks/phase1-api.mocks.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core building blocks required before story implementation

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Create additive-safe API response mapper utilities in `src/app/core/api/api-mappers.ts`
- [ ] T006 [P] Implement base API client and typed request wrappers in `src/app/core/api/api.service.ts`
- [ ] T007 [P] Implement auth interceptor token attachment and refresh hooks in `src/app/core/interceptors/auth.interceptor.ts`
- [ ] T008 Implement global API error normalization and retry helpers in `src/app/core/interceptors/error.interceptor.ts`
- [ ] T009 Create shared state primitives for session/feed loading flags in `src/app/shared/models/ui-state.model.ts`
- [ ] T010 Register lazy-loaded feature routes for `auth`, `home`, and `profile` in `src/app/app.routes.ts`
- [ ] T011 Add guard wiring for protected shell routes in `src/app/core/auth/auth.guard.ts` and `src/app/core/auth/non-auth.guard.ts`

**Checkpoint**: Foundation is complete; user stories can now be implemented independently

---

## Phase 3: User Story 1 - Access My Home Experience (Priority: P1) 🎯 MVP

**Goal**: Signed-in users authenticate and reach protected home with durable session continuity

**Independent Test**: Sign in, refresh protected route, and verify session continuity without forced logout

### Tests for User Story 1

- [ ] T012 [P] [US1] Add unit tests for `UserSession` mapper required/optional fields in `tests/unit/core/api/user-session.mapper.spec.ts`
- [ ] T013 [P] [US1] Add integration test for auth guard redirect and protected access in `tests/integration/auth/auth-guard.integration.spec.ts`
- [ ] T014 [US1] Add e2e sign-in and protected refresh continuity test in `tests/e2e/auth/session-continuity.e2e.spec.ts`

### Implementation for User Story 1

- [ ] T015 [P] [US1] Create auth data models for session/profile summary in `src/app/features/auth/models/auth.models.ts`
- [ ] T016 [US1] Implement `AuthApiService` session refresh/profile calls in `src/app/features/auth/data-access/auth-api.service.ts`
- [ ] T017 [US1] Implement `AuthStateService` using Angular Signals in `src/app/features/auth/data-access/auth-state.service.ts`
- [ ] T018 [US1] Implement sign-in container flow in `src/app/features/auth/pages/sign-in-page/sign-in-page.component.ts`
- [ ] T019 [US1] Implement protected shell entry and session bootstrap in `src/app/layout/shell/shell.component.ts`
- [ ] T020 [US1] Enforce authenticated-only access for Phase 1 routes in `src/app/app.routes.ts` and `src/app/core/auth/auth.guard.ts`
- [ ] T021 [US1] Implement silent refresh continuation policy in `src/app/core/auth/session-refresh.service.ts`

**Checkpoint**: US1 is independently functional and validates secure entry + continuity

---

## Phase 4: User Story 2 - View Initial Social Feed (Priority: P2)

**Goal**: Signed-in users see newest-first feed with cursor pagination and bounded retry behavior

**Independent Test**: Load feed, validate newest-first ordering, perform load-more pagination, simulate transient failure and fallback

### Tests for User Story 2

- [ ] T022 [P] [US2] Add unit tests for `FeedItem` mapper and sort behavior in `tests/unit/features/home/feed-mapper.spec.ts`
- [ ] T023 [P] [US2] Add integration tests for feed service retries (3 max) in `tests/integration/home/feed-retry.integration.spec.ts`
- [ ] T024 [US2] Add e2e test for feed load, newest-first order, and load-more flow in `tests/e2e/home/feed-pagination.e2e.spec.ts`

### Implementation for User Story 2

- [ ] T025 [P] [US2] Create feed models (`FeedItem`, `FeedCursorPage`) in `src/app/features/home/models/feed.models.ts`
- [ ] T026 [US2] Implement `HomeFeedApiService` cursor-based endpoint calls in `src/app/features/home/data-access/home-feed-api.service.ts`
- [ ] T027 [US2] Implement `HomeFeedStateService` with Signals for items/cursor/retry state in `src/app/features/home/data-access/home-feed-state.service.ts`
- [ ] T028 [US2] Build feed page container and initial load flow in `src/app/features/home/pages/home-feed-page/home-feed-page.component.ts`
- [ ] T029 [US2] Implement feed list presentational component in `src/app/features/home/components/feed-list/feed-list.component.ts`
- [ ] T030 [US2] Implement load-more trigger and cursor continuation in `src/app/features/home/components/load-more-button/load-more-button.component.ts`
- [ ] T031 [US2] Implement empty state and actionable error state UI in `src/app/features/home/components/feed-state-panel/feed-state-panel.component.ts`
- [ ] T032 [US2] Enforce additive-safe handling for optional/new fields in feed adapters in `src/app/features/home/data-access/feed-adapter.ts`

**Checkpoint**: US2 is independently functional with feed ordering, pagination, and retry/error behavior

---

## Phase 5: User Story 3 - Navigate Core Areas (Priority: P3)

**Goal**: Signed-in users navigate home/profile and sign out with protected-route enforcement

**Independent Test**: Navigate core destinations from shell and validate sign-out invalidates protected access

### Tests for User Story 3

- [ ] T033 [P] [US3] Add unit tests for navigation state and active-route signals in `tests/unit/layout/navigation-state.spec.ts`
- [ ] T034 [P] [US3] Add integration test for sign-out invalidating guards in `tests/integration/auth/signout-guard.integration.spec.ts`
- [ ] T035 [US3] Add e2e test for core navigation and sign-out redirect in `tests/e2e/navigation/core-navigation-signout.e2e.spec.ts`

### Implementation for User Story 3

- [ ] T036 [P] [US3] Implement shell navigation menu model in `src/app/layout/models/shell-nav.models.ts`
- [ ] T037 [US3] Implement shell nav component (home/profile/sign-out) in `src/app/layout/components/shell-nav/shell-nav.component.ts`
- [ ] T038 [US3] Implement profile preview page scaffold in `src/app/features/profile/pages/profile-preview-page/profile-preview-page.component.ts`
- [ ] T039 [US3] Implement sign-out action clearing session state in `src/app/features/auth/data-access/auth-state.service.ts`
- [ ] T040 [US3] Add post-sign-out redirect handling in `src/app/core/auth/auth-routing.service.ts`

**Checkpoint**: US3 is independently functional and session control is complete

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Hardening, documentation, and final validation across stories

- [ ] T041 [P] Add telemetry/logging around auth refresh and feed failures in `src/app/core/observability/client-events.service.ts`
- [ ] T042 Run lint/build/test gates and capture outputs in `specs/001-phase-1-foundation/quickstart.md`
- [ ] T043 [P] Document API additive-field handling decisions in `specs/001-phase-1-foundation/contracts/phase1-api-contract.md`
- [ ] T044 Validate full quickstart scenario and update notes in `specs/001-phase-1-foundation/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; starts immediately
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all stories
- **User Stories (Phases 3-5)**: Depend on Foundational completion; can run in parallel or by priority
- **Polish (Phase 6)**: Depends on completion of desired user stories

### User Story Dependencies

- **US1 (P1)**: Starts after Phase 2; no dependency on US2/US3
- **US2 (P2)**: Starts after Phase 2; independent but integrates with authenticated shell from US1
- **US3 (P3)**: Starts after Phase 2; depends on auth state primitives and route guards

### Within Each User Story

- Tests before implementation
- Models before services
- Services before pages/components wiring
- Integration/E2E validation before phase checkpoint

### Parallel Opportunities

- Setup tasks `T002`, `T003`, `T004` can run together
- Foundational tasks `T006`, `T007` can run together after `T005`
- US1 model/test tasks `T012`, `T013`, `T015` can run in parallel
- US2 model/test tasks `T022`, `T023`, `T025` can run in parallel
- US3 model/test tasks `T033`, `T034`, `T036` can run in parallel
- Polish tasks `T041`, `T043` can run in parallel

---

## Parallel Example: User Story 2

```bash
# Parallel tests
Task: "T022 Add unit tests for feed mapper and sort behavior"
Task: "T023 Add integration tests for feed retry behavior"

# Parallel model + API scaffolding
Task: "T025 Create feed models in src/app/features/home/models/feed.models.ts"
Task: "T026 Implement HomeFeedApiService in src/app/features/home/data-access/home-feed-api.service.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 and Phase 2
2. Deliver US1 (T012-T021)
3. Validate sign-in + continuity as MVP baseline

### Incremental Delivery

1. Deliver US1 (secure entry + session continuity)
2. Deliver US2 (feed read experience)
3. Deliver US3 (navigation + sign-out control)
4. Finish with Phase 6 hardening and quality gates

### Parallel Team Strategy

1. Team completes Setup + Foundational together
2. Assign engineers by story after Phase 2
3. Rejoin for Phase 6 cross-cutting quality validation

---

## Notes

- All tasks follow checklist format with IDs, labels, and explicit file paths
- [P] tasks are isolated by file/dependency boundaries
- Each user story has independent test criteria and implementation checkpoint
- MVP scope recommendation: **US1 only** after foundational phases
