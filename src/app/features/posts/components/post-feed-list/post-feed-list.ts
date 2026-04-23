import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostComponent } from '../post/post';

@Component({
  selector: 'app-post-feed-list',
  imports: [PostComponent],
  templateUrl: './post-feed-list.html',
  styleUrl: './post-feed-list.scss',
})
export class PostFeedListComponent {
  @Input({ required: true }) posts: Post[] = [];

  @Output() createComment = new EventEmitter<{ postId: number; content: string }>();
  @Output() createReply = new EventEmitter<{ postId: number; commentId: number; content: string }>();

  onCreateComment(event: { postId: number; content: string }): void {
    this.createComment.emit(event);
  }

  onCreateReply(event: { postId: number; commentId: number; content: string }): void {
    this.createReply.emit(event);
  }
}
