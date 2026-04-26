# Research: Base UI Refactor

## Decision 1: Preserve Existing Feature Routing and Refactor Within Current Structure

- **Decision**: Keep the current feature-based route architecture and implement UI refactor changes
  inside existing feature/layout boundaries.
- **Rationale**: `app.routes.ts` already lazy-loads feature route entrypoints; changing routing now
  adds risk without improving base UI consistency outcomes.
- **Alternatives considered**:
  - Rebuild routes around a new global shell first: rejected due to unnecessary migration risk.
  - Consolidate all routes into root for easier edits: rejected because it violates architecture
    principles and reduces scalability.

## Decision 2: Token-First Styling for Shared Visual Language

- **Decision**: Use `src/styles/design-tokens.css` and `src/material-theme.scss` as the styling
  source of truth for base UI refactor work.
- **Rationale**: Existing token families and Material bridge variables already provide semantic
  hooks; extending those is lower risk than adding one-off hardcoded styles.
- **Alternatives considered**:
  - Ad-hoc per-component CSS cleanup only: rejected because consistency would drift again.
  - Material-only theming migration without app tokens: rejected because app tokens are the
    constitution-defined brand layer.

## Decision 3: Preserve Auth Flow and Allow Copy-Only Auth UI Refresh

- **Decision**: Keep current Auth0 provider configuration and authentication flow behavior unchanged,
  while allowing minor auth-related UI copy/label refresh for consistency.
- **Rationale**: The feature goal is visual/systemic UI refactor, not authentication or contract
  redesign; stable behavior is a core acceptance criterion.
- **Alternatives considered**:
  - Full auth UX flow redesign: rejected as out of scope and high risk for this refactor.
  - Zero auth-surface text updates: rejected because small copy alignment improves consistency at
    low risk.

## Decision 4: Narrow Scope to Landing + Post Surfaces

- **Decision**: Limit this feature strictly to landing and post surfaces.
- **Rationale**: This aligns with clarified scope and reduces delivery risk while still achieving
  the base UI consistency objective.
- **Alternatives considered**:
  - Include home/profile in same iteration: rejected to avoid scope creep.
  - Apply changes app-wide immediately: rejected due to higher regression risk.

## Decision 5: Add UI-Level Retry Behavior for Recoverable API Failures

- **Decision**: Introduce user-visible retry affordances for failed API-driven UI states in scope.
- **Rationale**: Clarification requires improved recoverability while keeping backend contracts
  unchanged.
- **Alternatives considered**:
  - Keep failure handling visuals only: rejected because retry behavior is now required.
  - Add offline-first fallback: rejected as out of current scope.

## Decision 6: Validate with Story-Oriented, Non-Regression Checks

- **Decision**: Validate refactor outcomes using story-driven checks across landing and post
  surfaces, including mobile/tablet/desktop responsiveness and session-state edge cases.
- **Rationale**: This directly maps to measurable success criteria and catches regressions in both
  UI consistency and behavior continuity.
- **Alternatives considered**:
  - Visual-only manual spot checks: rejected due to weak behavioral coverage.
  - Pure unit-level checks: rejected because cross-page consistency needs integrated verification.

## Decision 7: Accessibility Baseline is WCAG AA, Target AAA Where Feasible

- **Decision**: Enforce WCAG AA as mandatory and implement WCAG AAA improvements where feasible.
- **Rationale**: This creates a clear minimum compliance floor while encouraging stronger UX
  outcomes where practical.
- **Alternatives considered**:
  - Keep current baseline only: rejected because requirements now include explicit accessibility
    targets.
  - Enforce full AAA everywhere: rejected because feasibility varies by UI context.

## Implementation Notes

- Added shared focus ring token and focus-visible treatment in landing and posts interactive surfaces.
- Added feed retry state handling and retry UI action without changing backend contract expectations.
