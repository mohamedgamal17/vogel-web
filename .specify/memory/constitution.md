<!--
Sync Impact Report
- Version change: 0.0.0 -> 1.0.0
- Modified principles:
  - N/A (initial adoption)
- Added sections:
  - Core Principles
  - Architecture & Design Constraints
  - Delivery Workflow & Quality Gates
  - Governance
- Removed sections:
  - None
- Templates requiring updates:
  - ✅ updated: .specify/templates/plan-template.md
  - ✅ updated: .specify/templates/spec-template.md
  - ✅ updated: .specify/templates/tasks-template.md
  - ✅ checked (no file found): .specify/templates/commands/*.md
- Follow-up TODOs:
  - None
-->
# VogelWeb Constitution

## Core Principles

### I. Feature-First Angular Architecture
All product work MUST live in `src/app/features/<feature>/` with clear separation among
pages/containers, components, and services. Root-level routing MUST stay thin and lazy-load
feature route entrypoints. This keeps the app scalable as new social features are added.

### II. Pages Orchestrate, Components Present
Only routed pages/containers MAY orchestrate user flows and data loading. Feature services are
the only layer that MAY perform API requests. Presentational components MUST stay render-only
with explicit inputs and emitted intents. This prevents coupling and keeps UI units reusable.

### III. Design Tokens Are the UI Source of Truth
Base UI and visual decisions MUST use app design tokens as the primary contract. Feature styles
MUST consume app tokens instead of direct third-party theme variables. Material token bridges and
global overrides MUST be centralized in the designated theme files. This ensures consistent
branding during UI refactors and future expansion.

### IV. Progressive Delivery with Measurable Validation
Every feature specification MUST define independently testable user stories, acceptance scenarios,
edge cases, and measurable success criteria before planning. Work MUST be sequenced so each story
can be delivered and validated incrementally. This reduces risk and supports predictable releases.

### V. Auth and API Contract Stability
Authentication behavior and backend integration contracts MUST remain stable during UI and
architecture refactors unless a feature specification explicitly includes contract changes. New
work MUST document assumptions and dependencies on auth and API behavior. This protects core user
flows while allowing iterative frontend improvements.

## Architecture & Design Constraints

- Angular feature route registration MUST remain lazy-loaded by feature route entry files.
- Layout and visual hierarchy MUST be consistent across public and authenticated experiences.
- Shared UI primitives and styling patterns SHOULD be reused before introducing new variants.
- Any exception to feature structure or token usage MUST include explicit justification in the
  implementation plan complexity tracking section.

## Delivery Workflow & Quality Gates

1. Specification MUST focus on user value and outcomes, not implementation details.
2. Plan MUST pass Constitution Check gates before research/design and after design updates.
3. Tasks MUST be grouped by user story with independent testability and clear dependencies.
4. Pull requests MUST verify no regressions in existing auth flows and core page behavior when
   refactoring UI or architecture.
5. Reviewers MUST block merges when constitutional principles are violated without approved
   documented exceptions.

## Governance

This constitution is the highest-priority engineering policy for the repository. If guidance in
templates, prompts, or local conventions conflicts with this document, this constitution prevails.

Amendment process:
1. Propose changes in writing with rationale and impact.
2. Update related templates and workflows in the same change set.
3. Record a version bump based on semantic policy.
4. Obtain maintainer approval before adoption.

Versioning policy:
- MAJOR: Breaking governance changes or principle removals/redefinitions.
- MINOR: New principle/section or materially expanded mandatory guidance.
- PATCH: Clarifications, wording improvements, and non-semantic refinements.

Compliance expectations:
- Each plan, task set, and implementation review MUST include constitution compliance checks.
- Violations MUST be tracked with explicit rationale and approved remediation.
- Periodic audits SHOULD confirm that architecture, UI, and process remain aligned.

**Version**: 1.0.0 | **Ratified**: 2026-04-26 | **Last Amended**: 2026-04-26
