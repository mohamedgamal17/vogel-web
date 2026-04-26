# Data Model: Phase 1 Foundation Experience

## Entity: UserSession

### Purpose
Tracks authenticated access state for protected Phase 1 experiences.

### Fields

- `userId` (string, required): Canonical authenticated user identifier.
- `accessToken` (string, required): Active access credential.
- `refreshState` (enum, required): `idle | refreshing | failed`.
- `expiresAt` (string, required): Expiry timestamp in ISO format.
- `isAuthenticated` (boolean, required): Current authenticated flag.
- `lastRefreshAt` (string, optional): Timestamp of last successful refresh.
- `metadata` (object, optional/additive-safe): Future backend-added session metadata.

### Validation Rules

- `userId`, `accessToken`, `expiresAt`, and `isAuthenticated` MUST exist for valid session.
- Unknown extra properties MUST be tolerated without failing session parsing.
- Missing required fields MUST invalidate the session and route to auth flow.

### State Transitions

- `idle -> refreshing` when protected request needs token renewal.
- `refreshing -> idle` on successful refresh.
- `refreshing -> failed` on unrecoverable refresh response.
- `failed -> idle` only after explicit re-authentication.

## Entity: UserProfileSummary

### Purpose
Provides minimal signed-in identity context for Phase 1 UI surfaces.

### Fields

- `id` (string, required): Profile owner identifier.
- `displayName` (string, required): Primary profile label in UI.
- `avatarUrl` (string, optional): Profile image URI.
- `handle` (string, optional): Human-readable username.
- `bio` (string, optional): Compact about text.
- `extras` (object, optional/additive-safe): Future non-breaking profile fields.

### Validation Rules

- `id` and `displayName` are required to render authenticated chrome.
- Optional fields may be absent; fallback UI text/avatars must be supported.
- Unknown properties are preserved or ignored safely, never causing failure.

## Entity: FeedItem

### Purpose
Represents a single post card preview in the Phase 1 home feed.

### Fields

- `id` (string, required): Unique feed item identifier.
- `authorId` (string, required): Author reference.
- `authorName` (string, required): Display label for author.
- `contentPreview` (string, required): Primary text/content excerpt.
- `createdAt` (string, required): Creation timestamp used for newest-first ordering.
- `mediaPreviewUrl` (string, optional): Thumbnail/preview media reference.
- `engagementSummary` (object, optional): Counts for likes/comments where available.
- `extensions` (object, optional/additive-safe): Future extensible response payload.

### Validation Rules

- Required fields MUST exist for rendering in primary feed list.
- Missing optional fields MUST degrade gracefully (no media/zero summary placeholders).
- `createdAt` must be parseable for deterministic reverse chronological ordering.

## Entity: FeedCursorPage

### Purpose
Encapsulates cursor-based pagination state for "load more" feed behavior.

### Fields

- `items` (FeedItem[], required): Current page of feed entries.
- `nextCursor` (string, optional): Opaque token for next page retrieval.
- `hasMore` (boolean, required): Whether additional pages are available.
- `requestId` (string, optional): Traceable request correlation metadata.

### Validation Rules

- `items` and `hasMore` are required.
- If `hasMore` is `true`, `nextCursor` SHOULD be present; if absent, system treats as end.
- Unknown properties in page payload are additive-safe.

## Relationships

- `UserSession.userId` links to `UserProfileSummary.id`.
- `FeedItem.authorId` may match `UserProfileSummary.id` for self-authored content.
- `FeedCursorPage.items` is a collection of `FeedItem`.

## Operational Constraints

- All entities MUST be parsed through adapter boundaries, not directly bound from raw HTTP.
- Mapping logic MUST separate required-field validation from optional/additive fields.
- Feed retrieval retries are capped at 3 attempts before transitioning to explicit error UI.
