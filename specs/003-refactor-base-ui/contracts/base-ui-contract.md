# Contract: Base UI Consistency Contract

## Purpose

Define the behavior and visual consistency expectations for the base UI refactor across in-scope
surfaces while preserving existing auth and backend integration behavior.

## In-Scope Surfaces

- Landing surface (`/`)
- Post surface(s) currently delivered in the `posts` feature

## Contract Clauses

### C-001 Shared Visual Language

- All in-scope surfaces MUST use the same semantic typography scale, spacing scale, and tokenized
  color language.
- Interactive controls MUST expose consistent default, hover/focus, active, and disabled states.

### C-002 Shared Shell and Layout Behavior

- In-scope surfaces MUST present a recognizable structural shell pattern (navigation + content
  hierarchy) that preserves user orientation when moving between routes.
- Responsive behavior MUST preserve task completion on mobile, tablet, and desktop viewport sizes.
- Accessibility MUST meet WCAG AA; AAA improvements SHOULD be implemented where feasible.

### C-003 Stable Auth and Access Behavior

- Authenticated and unauthenticated access outcomes MUST remain consistent with current behavior.
- Session changes MUST not produce broken layouts or ambiguous navigation states.
- Auth-related UI copy/labels MAY be refreshed for consistency, but flow behavior MUST remain unchanged.

### C-004 Stable Integration Behavior

- UI refactor MUST NOT require API contract changes for currently supported user tasks.
- Existing data loading and rendering behavior MUST remain functionally equivalent.
- API-driven failures on in-scope pages MUST provide retry affordances and clear recovery feedback.

## Verification Matrix

- **Visual conformance review**: 100% of in-scope surfaces comply with the shared base pattern set.
- **Behavior regression check**: 100% of previously supported auth and route access flows pass.
- **Responsive check**: All critical tasks remain usable on mobile, tablet, and desktop classes.
- **Failure recovery check**: At least 95% of simulated recoverable API failures are successfully retried without page reload.
- **Accessibility check**: Zero unresolved WCAG AA violations in refactored scope with documented AAA improvements where feasible.

## Implementation Evidence

- Retry affordance is implemented in post feed list error state with explicit retry action.
- Landing authentication CTA copy is refreshed while preserving the existing sign-in flow behavior.
- Shared token and layout updates enforce consistent visual language across landing and post surfaces.
