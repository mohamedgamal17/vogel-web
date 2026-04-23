import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable()
export class PostsFeedService {
  private _posts: Post[] = [
    {
      id: 1,
      authorName: 'Ahmed Khaled',
      authorHandle: '@ahmedk',
      publishedAt: '2h',
      content:
        'Shipped the first pass of our new social feed today. Looking for feedback on the layout and interaction flow.',
      likes: 18,
      comments: [
        {
          id: 101,
          authorName: 'Mona Adel',
          authorHandle: '@monadel',
          publishedAt: '1h',
          content: 'The card hierarchy looks clean. Maybe make action labels a bit stronger.',
          replies: [
            {
              id: 1011,
              authorName: 'Ahmed Khaled',
              authorHandle: '@ahmedk',
              publishedAt: '58m',
              content: 'Good point, I will tweak the contrast.',
            },
          ],
        },
      ],
      shares: 2,
    },
    {
      id: 2,
      authorName: 'Sara Nabil',
      authorHandle: '@saran',
      publishedAt: '4h',
      content:
        'Design tip: keeping card spacing consistent across breakpoints makes the feed feel much calmer to scan.',
      likes: 24,
      comments: [
        {
          id: 201,
          authorName: 'Youssef Omar',
          authorHandle: '@youssefo',
          publishedAt: '3h',
          content: 'Totally agree. Rhythm matters more than adding more visual separators.',
          replies: [],
        },
      ],
      shares: 5,
      media: {
        type: 'image',
        src: 'https://picsum.photos/id/26/1200/800',
        alt: 'Desk setup with laptop and notebook',
      },
    },
    {
      id: 3,
      authorName: 'Mostafa Ali',
      authorHandle: '@mostafa',
      publishedAt: '7h',
      content:
        'What feature should come next: profile pages, notifications, or direct messages?',
      likes: 11,
      comments: [
        {
          id: 301,
          authorName: 'Nour Hany',
          authorHandle: '@nourh',
          publishedAt: '6h',
          content: 'Notifications first, they make the rest of the features feel alive.',
          replies: [
            {
              id: 3011,
              authorName: 'Mostafa Ali',
              authorHandle: '@mostafa',
              publishedAt: '5h',
              content: 'Makes sense. I am leaning that way too.',
            },
          ],
        },
      ],
      shares: 1,
      media: {
        type: 'video',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        poster: 'https://picsum.photos/id/1015/1200/800',
      },
    },
  ];

  get posts(): Post[] {
    return this._posts;
  }

  addComment(postId: number, content: string): void {
    const value = content.trim();
    if (!value) {
      return;
    }

    this._posts = this._posts.map((post) => {
      if (post.id !== postId) {
        return post;
      }

      const newCommentId =
        post.comments.reduce((maxId, comment) => Math.max(maxId, comment.id), 0) + 1;
      return {
        ...post,
        comments: [
          ...post.comments,
          {
            id: newCommentId,
            authorName: 'You',
            authorHandle: '@you',
            publishedAt: 'now',
            content: value,
            replies: [],
          },
        ],
      };
    });
  }

  addReply(postId: number, commentId: number, content: string): void {
    const value = content.trim();
    if (!value) {
      return;
    }

    this._posts = this._posts.map((post) => {
      if (post.id !== postId) {
        return post;
      }

      return {
        ...post,
        comments: post.comments.map((comment) => {
          if (comment.id !== commentId) {
            return comment;
          }

          const newReplyId =
            comment.replies.reduce((maxId, reply) => Math.max(maxId, reply.id), 0) + 1;

          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: newReplyId,
                authorName: 'You',
                authorHandle: '@you',
                publishedAt: 'now',
                content: value,
              },
            ],
          };
        }),
      };
    });
  }
}
