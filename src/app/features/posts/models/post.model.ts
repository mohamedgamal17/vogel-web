import { Entity } from "../../../core/interfaces/entity.interface";
import { Media } from "../../medias/interfaces/media.interface";
import { User } from "../../users/interfaces/user.interface";

export interface PostApi extends Entity{
  caption : string,
  userId : string,
  mediaId : string,
  user : User,
  media? : Media
}

export type PostMedia = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
};

export type PostCommentReply = {
  id: number;
  authorName: string;
  authorHandle: string;
  publishedAt: string;
  content: string;
};

export type PostComment = {
  id: number;
  authorName: string;
  authorHandle: string;
  publishedAt: string;
  content: string;
  replies: PostCommentReply[];
};

export type Post   = {
  id: number;
  authorName: string;
  authorHandle: string;
  publishedAt: string;
  content: string;
  likes: number;
  comments: PostComment[];
  shares: number;
  media?: PostMedia;
};

export type FeedRetryState = {
  canRetry: boolean;
  attempt: number;
  maxAttempts: number;
  message?: string;
};
