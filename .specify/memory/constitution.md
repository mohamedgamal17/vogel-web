<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Modified principles:
  - [PRINCIPLE_1_NAME] -> I. Feature-First Angular Structure (NON-NEGOTIABLE)
  - [PRINCIPLE_2_NAME] -> II. Signals-First State Management
  - [PRINCIPLE_3_NAME] -> III. API Contract Resilience
  - [PRINCIPLE_4_NAME] -> IV. Design System and UI Decoupling
  - [PRINCIPLE_5_NAME] -> V. Lazy-Loaded Delivery and Quality Gates
- Added sections:
  - Technical Standards
  - Delivery Workflow and Review Rules
- Removed sections:
  - None
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
  - ✅ .specify/templates/commands/*.md (none present)
- Follow-up TODOs:
  - None
-->
# SocialMedia Client Constitution

## Core Principles

### I. Feature-First Angular Structure (NON-NEGOTIABLE)
All production code MUST follow the existing Angular feature-based structure under
`src/app/features`, with clear boundaries between `core`, `shared`, `layout`, and feature
domains. New work MUST extend the current structure instead of introducing parallel
architectures. Cross-feature coupling MUST be minimized through typed contracts and
shared abstractions.
Rationale: a consistent feature-first layout keeps ownership clear and enables safe,
incremental growth as the app expands.

### II. Signals-First State Management
Component and feature state MUST use Angular Signals as the default reactive model.
Shared feature state SHOULD be exposed through services using typed signals and computed
selectors. NgRx MAY be introduced only for explicitly complex global workflows and MUST
include a documented complexity justification in the feature plan.
Rationale: signals reduce ceremony for common state needs while preserving a deliberate
path for complex orchestration.

### III. API Contract Resilience
All API integrations MUST tolerate additive response changes (new properties) without
breaking runtime behavior. API models and adapters MUST preserve backward compatibility by
accepting unknown fields while validating required fields. The Swagger source may change
location and content over time; integration logic MUST remain based on stable response
shape semantics, not strict property count assumptions.
Rationale: the backend schema evolves, so client reliability depends on forward-compatible
parsing and strict handling of required invariants only.

### IV. Design System and UI Decoupling
Styling MUST be implemented through design tokens, Tailwind utilities, and approved
Angular Material usage patterns. Visual decisions MUST be token-driven and MUST avoid
hard-coded semantic colors or ad-hoc theme overrides. Angular Material MUST be treated as
behavioral primitives first, with styling routed through the design system bridge.
Rationale: token-based theming protects long-term UI consistency and future library
mobility.

### V. Lazy-Loaded Delivery and Quality Gates
Feature routes MUST be lazy-loaded and registered through the agreed route registration
pattern. Every feature change MUST include test coverage proportional to risk (unit,
integration, and contract checks where API behavior is affected) and MUST pass linting and
build checks before merge. New complexity MUST be justified when simpler alternatives are
available.
Rationale: lazy delivery controls bundle growth, and enforceable quality gates reduce
regressions in a fast-moving social client.

## Technical Standards

- The primary stack is Angular + Tailwind CSS + Angular Material.
- API access MUST be centralized in data-access/services layers; UI components MUST NOT
  issue raw HTTP calls.
- Feature interfaces and mappers MUST prefer additive-safe typing to handle new backend
  fields.
- Component state transitions MUST remain explicit and testable, especially when driven by
  signals and async API workflows.

## Delivery Workflow and Review Rules

- Each specification and plan MUST include a constitution compliance check before
  implementation.
- Pull requests MUST document: impacted feature area, state-management approach (Signals or
  justified NgRx), API impact, and test evidence.
- Any governance-impacting change MUST include an amendment note and version rationale.
- Reviewers MUST block merges that violate feature structure, state policy, or API
  resilience requirements.

## Governance

This constitution overrides conflicting local conventions for implementation and review.
Amendments require: (1) explicit change proposal, (2) impact statement across templates
and workflows, and (3) approval from project maintainers. Versioning follows semantic
rules: MAJOR for incompatible governance redefinition or removal, MINOR for new principle
or materially expanded policy, PATCH for clarifications only. Compliance is verified during
plan creation, task generation, and pull request review.

**Version**: 1.0.0 | **Ratified**: 2026-04-26 | **Last Amended**: 2026-04-26
