import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Post, PostApi } from '../../models/post.model';
import { PostCommentsComponent } from '../post-comments/post-comments';
import { AuthorNamePipe } from '../../../users/pipes/author-name.pipe';
import { MediaType } from '../../../medias/enums/media-type.enum';

@Component({
  selector: 'app-post',
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, AuthorNamePipe],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class PostComponent {
  @Input({ required: true }) post!: PostApi;

  @Output() createComment = new EventEmitter<{ postId: number; content: string }>();
  @Output() createReply = new EventEmitter<{ postId: number; commentId: number; content: string }>();

  MediaType = MediaType
  areCommentsVisible = false;



  toggleCommentsVisibility(): void {
    this.areCommentsVisible = !this.areCommentsVisible;
  }
}
