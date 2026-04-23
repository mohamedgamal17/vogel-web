import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable()
export class PostsFeedService {
  readonly posts: Post[] = [
    {
      id: 1,
      authorName: 'Ahmed Khaled',
      authorHandle: '@ahmedk',
      publishedAt: '2h',
      content:
        'Shipped the first pass of our new social feed today. Looking for feedback on the layout and interaction flow.',
      likes: 18,
      comments: 6,
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
      comments: 4,
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
      comments: 9,
      shares: 1,
      media: {
        type: 'video',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        poster: 'https://picsum.photos/id/1015/1200/800',
      },
    },
  ];
}
