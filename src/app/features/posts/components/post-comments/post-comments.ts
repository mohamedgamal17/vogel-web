import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostComment } from '../../models/post.model';
import { PostCommentItemComponent } from '../post-comment-item/post-comment-item';

@Component({
  selector: 'app-post-comments',
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, PostCommentItemComponent],
  templateUrl: './post-comments.html',
  styleUrl: './post-comments.scss',
})
export class PostCommentsComponent {
  @Input({ required: true }) postId!: string;
  @Input({ required: true }) comments: PostComment[] = [];

  @Output() createComment = new EventEmitter<string>();
  @Output() createReply = new EventEmitter<{ commentId: number; content: string }>();

  newCommentContent = '';

  get canSubmitComment(): boolean {
    return this.newCommentContent.trim().length > 0;
  }

  submitComment(): void {
    const content = this.newCommentContent.trim();
    if (!content) {
      return;
    }

    this.createComment.emit(content);
    this.newCommentContent = '';
  }

  onCreateReply(event: { commentId: number; content: string }): void {
    this.createReply.emit(event);
  }
}
