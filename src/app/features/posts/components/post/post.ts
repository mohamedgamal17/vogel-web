import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Post } from '../../models/post.model';
import { PostCommentsComponent } from '../post-comments/post-comments';

@Component({
  selector: 'app-post',
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, PostCommentsComponent],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class PostComponent {
  @Input({ required: true }) post!: Post;

  @Output() createComment = new EventEmitter<{ postId: number; content: string }>();
  @Output() createReply = new EventEmitter<{ postId: number; commentId: number; content: string }>();
  areCommentsVisible = false;

  get commentsCount(): number {
    return this.post.comments.reduce((count, comment) => count + 1 + comment.replies.length, 0);
  }

  onCreateComment(content: string): void {
    this.createComment.emit({ postId: this.post.id, content });
  }

  onCreateReply(event: { commentId: number; content: string }): void {
    this.createReply.emit({ postId: this.post.id, commentId: event.commentId, content: event.content });
  }

  toggleCommentsVisibility(): void {
    this.areCommentsVisible = !this.areCommentsVisible;
  }
}
