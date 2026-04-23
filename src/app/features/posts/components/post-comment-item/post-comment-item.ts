import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostComment } from '../../models/post.model';

@Component({
  selector: 'app-post-comment-item',
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './post-comment-item.html',
  styleUrl: './post-comment-item.scss',
})
export class PostCommentItemComponent {
  @Input({ required: true }) postId!: number;
  @Input({ required: true }) comment!: PostComment;

  @Output() createReply = new EventEmitter<{ commentId: number; content: string }>();

  isReplyComposerOpen = false;
  replyContent = '';

  get canSubmitReply(): boolean {
    return this.replyContent.trim().length > 0;
  }

  toggleReplyComposer(): void {
    this.isReplyComposerOpen = !this.isReplyComposerOpen;
  }

  replyToSubcomment(authorHandle: string): void {
    this.isReplyComposerOpen = true;
    this.replyContent = `${authorHandle} `;
  }

  submitReply(): void {
    const content = this.replyContent.trim();
    if (!content) {
      return;
    }

    this.createReply.emit({ commentId: this.comment.id, content });
    this.replyContent = '';
    this.isReplyComposerOpen = false;
  }
}
