export type PostMedia = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
};

export type Post = {
  id: number;
  authorName: string;
  authorHandle: string;
  publishedAt: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  media?: PostMedia;
};
