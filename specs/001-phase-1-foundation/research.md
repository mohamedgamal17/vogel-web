# Research: Phase 1 Foundation Experience

## Decision 1: Signals-First State Containers

- **Decision**: Use feature-scoped services exposing Angular Signals for session, profile
  summary, and feed state.
- **Rationale**: Matches constitution requirements, keeps state explicit/testable, and
  avoids premature global-store complexity for Phase 1.
- **Alternatives considered**:
  - Immediate NgRx adoption: rejected due to unnecessary setup overhead for this scope.
  - Component-local state only: rejected because session/feed state must survive route and
    component boundaries.

## Decision 2: Additive-Safe API Mapping

- **Decision**: Define minimal required fields per response and tolerate unknown/additional
  fields through mapper/adapter boundaries.
- **Rationale**: Swagger contracts can evolve with extra properties; additive-safe mapping
  prevents runtime breaks while preserving strict checks for required fields.
- **Alternatives considered**:
  - Strict full-shape typing of all properties: rejected due to brittleness as API evolves.
  - Unvalidated passthrough payloads: rejected due to risk of silent data-quality failures.

## Decision 3: Feed Order and Pagination Baseline

- **Decision**: Render newest-first feed with cursor-based "load more" pagination.
- **Rationale**: Works well for social timelines and avoids unstable page-number behavior
  when new posts arrive during browsing.
- **Alternatives considered**:
  - Page-number pagination: rejected because offsets drift in active timelines.
  - Infinite auto-scroll: deferred to later phases due to accessibility and control concerns.

## Decision 4: Retrieval Failure Policy

- **Decision**: Retry feed retrieval up to 3 times, then show actionable error state.
- **Rationale**: Balances resilience and user transparency while avoiding infinite retry
  loops and hidden failure states.
- **Alternatives considered**:
  - Infinite retry loop: rejected for poor operational visibility and user control.
  - Immediate fail without retry: rejected for degraded UX under transient network failures.

## Decision 5: Authenticated-Only Scope for Phase 1

- **Decision**: Require authentication for all Phase 1 experiences (feed and profile preview
  included).
- **Rationale**: Keeps scope focused on secure baseline flows and aligns with clarified
  acceptance criteria and navigation behavior.
- **Alternatives considered**:
  - Public read-only feed: deferred to later phases when content access policy is expanded.
  - Mixed public/private routing: rejected as unnecessary complexity for initial delivery.
