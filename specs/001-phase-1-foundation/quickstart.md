# Quickstart: Phase 1 Foundation Validation

## Goal

Validate the Phase 1 feature scope end-to-end: authenticated access, stable session,
newest-first feed, cursor pagination, and bounded retry behavior.

## Prerequisites

- Branch: `001-phase-1-foundation`
- Spec artifacts present in `specs/001-phase-1-foundation/`
- Development environment configured for Angular app execution

## Validation Steps

1. Start the app in development mode.
2. Authenticate with a valid account and verify redirect to signed-in home.
3. Refresh the browser and confirm session continuity on protected route.
4. Verify initial feed list appears newest-first by `createdAt`.
5. Trigger "load more" and confirm cursor-based continuation appends feed entries.
6. Simulate transient feed failure and verify up to 3 retries occur.
7. Confirm actionable error UI appears only after retry limit is reached.
8. Sign out and verify protected screens require re-authentication.

## Acceptance Mapping

- FR-001 / FR-001a / FR-002: Steps 2, 3, 8
- FR-003 / FR-004 / FR-010: Steps 4 and empty-state behavior
- FR-005 / FR-006: Step 8 and core navigation during signed-in use
- FR-007 / FR-012: Steps 6 and 7
- FR-008 / API evolution considerations: adapter behavior during response shape extension
- FR-011: Step 5

## Suggested Test Focus

- Unit: adapters/validators for required vs optional fields, feed ordering, retry counter.
- Integration: auth flow with session continuity and sign-out protection.
- E2E: sign-in to feed, load more, failure fallback, and sign-out gating.
