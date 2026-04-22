export type HomePostMedia = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
};

export type HomeFeedPost = {
  id: number;
  authorName: string;
  authorHandle: string;
  publishedAt: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  media?: HomePostMedia;
};
