# Contract: Phase 1 API Integration

## Scope

Defines client-consumed API contracts for Phase 1 foundation behavior:

- Authentication/session continuity
- Signed-in profile summary
- Newest-first feed retrieval
- Cursor-based feed pagination

## Contract Rules

1. Required fields MUST be validated before data enters UI state.
2. Optional fields MAY be absent and MUST not break user journeys.
3. Unknown/additive fields MUST be tolerated and ignored or preserved safely.
4. Recoverable feed failures trigger up to 3 retries before actionable error state.

## Endpoint Contract: Session Refresh

### Intent
Maintain protected session continuity during authenticated usage.

### Request Shape

- `refreshToken` (string, required)

### Response Shape

- `accessToken` (string, required)
- `expiresAt` (string, required)
- `userId` (string, required)
- `...additionalProperties` (optional, additive-safe)

### Failure Behavior

- If refresh succeeds, protected flow continues without user interruption.
- If refresh fails due to invalid session, route to sign-in flow.

## Endpoint Contract: Profile Summary

### Intent
Return minimal account context for authenticated shell.

### Response Shape

- `id` (string, required)
- `displayName` (string, required)
- `avatarUrl` (string, optional)
- `handle` (string, optional)
- `...additionalProperties` (optional, additive-safe)

### Failure Behavior

- On temporary failure, show fallback profile placeholders and retry guidance.

## Endpoint Contract: Feed Page

### Intent
Return newest-first feed items with cursor continuation.

### Request Shape

- `cursor` (string, optional)
- `limit` (number, optional)

### Response Shape

- `items` (array, required)
  - Per item required: `id`, `authorId`, `authorName`, `contentPreview`, `createdAt`
  - Per item optional: `mediaPreviewUrl`, `engagementSummary`, additive fields
- `nextCursor` (string, optional)
- `hasMore` (boolean, required)
- `...additionalProperties` (optional, additive-safe)

### Failure Behavior

- Retry feed retrieval up to 3 times on transient failure.
- After 3 failed attempts, show actionable error state with explicit retry action.

## Compatibility Notes

- Contract assumes response schema may add properties over time without breaking semantics.
- Client adapters enforce required fields while allowing additive payload evolution.
