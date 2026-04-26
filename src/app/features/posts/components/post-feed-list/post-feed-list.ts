import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Post } from '../../models/post.model';
import { PostComponent } from '../post/post';

@Component({
  selector: 'app-post-feed-list',
  imports: [PostComponent, MatButtonModule],
  templateUrl: './post-feed-list.html',
  styleUrl: './post-feed-list.scss',
})
export class PostFeedListComponent {
  @Input({ required: true }) posts: Post[] = [];
  @Input() isLoading = false;
  @Input() errorMessage: string | null = null;
  @Input() canRetry = true;
  @Input() retryAttempt = 0;
  @Input() maxRetryAttempts = 3;

  @Output() createComment = new EventEmitter<{ postId: number; content: string }>();
  @Output() createReply = new EventEmitter<{ postId: number; commentId: number; content: string }>();
  @Output() retryLoad = new EventEmitter<void>();

  onCreateComment(event: { postId: number; content: string }): void {
    this.createComment.emit(event);
  }

  onCreateReply(event: { postId: number; commentId: number; content: string }): void {
    this.createReply.emit(event);
  }

  onRetryLoad(): void {
    this.retryLoad.emit();
  }
}
