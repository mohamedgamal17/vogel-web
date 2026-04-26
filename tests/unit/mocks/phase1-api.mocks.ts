export const mockSessionResponse = {
  accessToken: 'test-access-token',
  expiresAt: '2026-04-27T00:00:00.000Z',
  userId: 'user-1',
};

export const mockProfileSummaryResponse = {
  id: 'user-1',
  displayName: 'Test User',
  handle: '@testuser',
  avatarUrl: 'https://example.com/avatar.png',
};

export const mockFeedPageResponse = {
  items: [
    {
      id: 'post-2',
      authorId: 'user-2',
      authorName: 'Second User',
      contentPreview: 'Newest post',
      createdAt: '2026-04-26T12:00:00.000Z',
    },
    {
      id: 'post-1',
      authorId: 'user-1',
      authorName: 'Test User',
      contentPreview: 'Older post',
      createdAt: '2026-04-26T08:00:00.000Z',
    },
  ],
  nextCursor: 'cursor-2',
  hasMore: true,
};
