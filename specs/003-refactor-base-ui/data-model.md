# Data Model: Base UI Refactor

## Entity: UI Pattern

**Description**: Reusable visual and interaction blueprint applied across multiple page surfaces.

### Fields

- `name` (string, required): Unique pattern identifier (e.g., page-shell, section-card, primary-cta).
- `category` (enum, required): layout | typography | control | feedback | navigation.
- `tokenBindings` (list, required): Referenced design tokens for spacing, color, typography, radius.
- `interactionStates` (list, required): default, hover/focus, active, disabled.
- `responsiveRules` (list, required): Breakpoint-specific behavior for mobile, tablet, and desktop.
- `accessibilityNotes` (string, required): Guidance for readability, keyboard/focus behavior, and contrast.

### Validation Rules

- Pattern names MUST be unique within the refactor scope.
- Every pattern MUST reference semantic app tokens (no hardcoded one-off values when token exists).
- Every interactive pattern MUST define all required interaction states.
- Every in-scope pattern MUST satisfy WCAG AA; AAA enhancements SHOULD be recorded where feasible.

## Entity: Page Surface

**Description**: A user-facing page that consumes UI Patterns and exposes core user tasks.

### Fields

- `surfaceId` (string, required): Unique page identifier (landing, post).
- `routePath` (string, required): Route entry path.
- `layoutPatternRefs` (list, required): Applied layout-level UI pattern references.
- `componentPatternRefs` (list, required): Applied component-level UI pattern references.
- `primaryTasks` (list, required): Key user tasks supported by the surface.
- `responsiveCoverage` (enum, required): mobile+tablet+desktop (required).
- `retryBehavior` (object, required for API-driven states): Retry trigger, retry limit guidance, and feedback messages.

### Validation Rules

- In-scope surfaces MUST apply shared base shell/layout patterns.
- Surface patterns MUST preserve existing user tasks and interaction outcomes.
- Route behavior MUST remain lazy-loaded and unchanged by the UI refactor.
- API-driven failures on in-scope surfaces MUST expose user-visible retry affordances.

## Entity: Authenticated Session State

**Description**: User access state influencing visible authenticated experiences and allowed actions.

### Fields

- `state` (enum, required): unauthenticated | authenticating | authenticated | expired.
- `entryBehavior` (string, required): Expected navigation/display behavior at state entry.
- `uiContinuityExpectation` (string, required): How base shell/UI remains coherent during transitions.
- `guardOutcome` (string, required): Resulting access outcome for protected routes/pages.
- `copyVariant` (string, optional): Auth-related UI copy variant used for consistency updates.

### Validation Rules

- UI refactor MUST NOT alter auth state transition logic.
- Protected route outcomes MUST remain consistent with pre-refactor behavior.
- Session-expiry handling MUST preserve navigational clarity and layout continuity.
- Copy adjustments MUST NOT change underlying authentication flow outcomes.

## Implementation Mapping

- `UI Pattern` is represented in shared token/theme and layout style files.
- `Page Surface` retry behavior is represented by feed loading/error/retry input/output state in post feed component usage.
- `Authenticated Session State` remains unchanged in flow logic while allowing copy-level CTA updates.
