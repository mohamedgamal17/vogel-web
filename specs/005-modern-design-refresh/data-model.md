# Data Model: Modern Design Refresh

## Entity: Visual Theme Token Set

**Description**: Canonical token definitions that drive application-wide visual consistency.

### Fields

- `tokenName` (string, required): Unique semantic token identifier (for example `--app-color-primary`).
- `tokenFamily` (enum, required): color | typography | spacing | radius | border | shadow | motion.
- `usageScope` (list, required): Surface areas where the token is permitted (global, layout, feature, component states).
- `valueDefinition` (string, required): Concrete token value or scale reference.
- `stateBinding` (list, optional): Associated interactive states (default, hover, focus, active, disabled).
- `deprecationFlag` (boolean, required): Indicates whether a legacy token/value is deprecated.

### Validation Rules

- Token names MUST be unique and semantically meaningful.
- Updated components/pages MUST reference semantic app tokens rather than ad-hoc color literals where token equivalents exist.
- Interactive tokens MUST define accessible contrast and focus visibility intent.

## Entity: Page Modernization Coverage

**Description**: Tracks redesign scope and completion status for each existing application page.

### Fields

- `pageId` (string, required): Unique page identifier.
- `featureArea` (string, required): Owning feature module (`landing`, `home`, `auth`, `posts`, `profile`).
- `routeReference` (string, required): Route path or feature route mapping.
- `themeModeScope` (enum, required): light-only.
- `modernizationStatus` (enum, required): not-started | in-progress | validated | approved.
- `accessibilityStatus` (enum, required): pending | wcag-aa-pass | failed.
- `performanceStatus` (enum, required): pending | pass-2s-target | failed.

### Validation Rules

- All existing pages MUST exist in this coverage list.
- A page cannot be marked `approved` until both accessibility and performance status are passing.
- Dark theme status is excluded from this entity for this feature and treated as deferred scope.

### Current Coverage Snapshot

| pageId | featureArea | themeModeScope | modernizationStatus | accessibilityStatus | performanceStatus |
|--------|-------------|----------------|---------------------|---------------------|-------------------|
| landing-page | landing | light-only | validated | wcag-aa-pass | pending |
| home-page | home | light-only | validated | wcag-aa-pass | pending |
| sign-in-page | auth | light-only | validated | wcag-aa-pass | pending |
| posts-surfaces | posts | light-only | validated | wcag-aa-pass | pending |
| profile-preview-page | profile | light-only | validated | wcag-aa-pass | pending |

## Entity: Component Style Profile

**Description**: Defines expected visual and interaction-state behavior for reusable UI components.

### Fields

- `componentName` (string, required): Shared component identifier.
- `appliesToPages` (list, required): Pages/features where the component appears.
- `hierarchyRole` (enum, required): primary-action | secondary-action | navigation | content | feedback.
- `stateSet` (list, required): required visual states.
- `focusIndicatorSpec` (string, required): Keyboard focus visibility behavior.
- `contrastCompliance` (enum, required): pass | fail | pending (WCAG 2.1 AA target).

### Validation Rules

- Every interactive component MUST define at least default/hover/focus/disabled states.
- Focus indicator behavior MUST be visible and consistent across all pages using the component.
- Component profile updates MUST not alter existing service/API contracts.

## Entity: Modernization Validation Run

**Description**: Captures test execution evidence for redesign acceptance criteria.

### Fields

- `runId` (string, required): Validation run identifier.
- `timestamp` (datetime, required): Execution time.
- `pagesValidated` (list, required): Page IDs covered in the run.
- `wcagAAResult` (enum, required): pass | fail.
- `transitionPerformanceResult` (enum, required): pass | fail.
- `stakeholderReviewResult` (enum, required): pass | fail | pending.
- `regressionNotes` (string, optional): Behavior findings for auth/API/flow continuity.

### Validation Rules

- Validation runs MUST cover all in-scope existing pages before final sign-off.
- Failed accessibility or performance results MUST block release sign-off for this feature.
- Regression notes MUST confirm no auth flow or backend contract behavior changes.

## Implementation Mapping

- `Visual Theme Token Set` updates are implemented in `src/styles/design-tokens.css`.
- `Component Style Profile` updates are implemented across feature component style files in `src/app/features/**`.
- `Page Modernization Coverage` is tracked in this document and validated through `quickstart.md` steps.
- `Modernization Validation Run` evidence is tracked in `quickstart.md` and contract verification notes.
