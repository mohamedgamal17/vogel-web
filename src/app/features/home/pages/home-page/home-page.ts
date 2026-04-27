import { Component, computed, OnDestroy, OnInit } from '@angular/core';
import { HomeQuickActionsFabComponent } from '../../components/home-quick-actions-fab/home-quick-actions-fab';
import { HomeRightRailComponent } from '../../components/home-right-rail/home-right-rail';
import { HomeSidebarNavComponent } from '../../components/home-sidebar-nav/home-sidebar-nav';
import { HomeTopbarComponent } from '../../components/home-topbar/home-topbar';
import { HomeFeedService } from '../../services/home-feed.service';
import { PostComposerPanelComponent } from '../../../posts/components/post-composer-panel/post-composer-panel';
import { PostFeedListComponent } from '../../../posts/components/post-feed-list/post-feed-list';
import { PostComposerService } from '../../../posts/services/post-composer.service';
import { PostsFeedService } from '../../../posts/services/posts-feed.service';
import { PostService } from '../../../posts/services/post.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Paging } from '../../../../core/interfaces/paging.interface';
import { PostApi } from '../../../posts';
import { PagingInfo } from '../../../../core/interfaces/paging-info.interface';

@Component({
  selector: 'app-home-page',
  imports: [
    HomeTopbarComponent,
    HomeSidebarNavComponent,
    PostFeedListComponent,
    HomeRightRailComponent,
    PostComposerPanelComponent,
    HomeQuickActionsFabComponent,
  ],
  providers: [HomeFeedService, PostsFeedService, PostComposerService],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnDestroy, OnInit {
  feedPosts = [] as ReturnType<PostsFeedService['loadPosts']>;
  isFeedLoading = false;
  feedErrorMessage: string | null = null;
  retryAttempt = 0;

  postStream = rxResource({
    stream: () => this.postService.getAllPosts({ limit: 10, asending: false }),
  });

  postData = computed(() => {
    if (this.postStream.isLoading() || this.postStream.error()) {
      return [];
    }
    return this.postStream.value()?.data ?? [];
  });

  isPostLoading = computed(() => this.postStream.isLoading());

  postError = computed(() => this.postStream.error());

  hasPostError = computed(() => !!this.postError());

  
  readonly maxRetryAttempts: number;

  constructor(
    readonly feedService: HomeFeedService,
    readonly postsFeedService: PostsFeedService,
    readonly composerService: PostComposerService,
    readonly postService: PostService,
  ) {
    this.maxRetryAttempts = this.postsFeedService.getMaxRetryAttempts();
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  toggleComposer(): void {
    this.composerService.toggleComposer();
  }

  closeComposer(): void {
    this.composerService.closeComposer();
  }

  updateDraftPostText(value: string): void {
    this.composerService.setDraftPostText(value);
  }

  onMediaFilesSelected(files: FileList | null): void {
    this.composerService.onMediaFilesSelected(files);
  }

  removeComposerMedia(index: number): void {
    this.composerService.removeComposerMedia(index);
  }

  clearComposerDraft(): void {
    this.composerService.clearComposerDraft();
  }

  createComment(event: { postId: number; content: string }): void {
    this.postsFeedService.addComment(event.postId, event.content);
    this.feedPosts = this.postsFeedService.posts;
  }

  createReply(event: { postId: number; commentId: number; content: string }): void {
    this.postsFeedService.addReply(event.postId, event.commentId, event.content);
    this.feedPosts = this.postsFeedService.posts;
  }

  retryLoadPosts(): void {
    if (this.retryAttempt >= this.maxRetryAttempts) {
      return;
    }
    this.loadPosts();
  }

  private loadPosts(): void {
    this.isFeedLoading = true;
    this.feedErrorMessage = null;
    try {
      this.feedPosts = this.postsFeedService.loadPosts();
      this.retryAttempt = 0;
    } catch (error) {
      this.retryAttempt += 1;
      this.feedErrorMessage = error instanceof Error ? error.message : 'Unable to load posts.';
    } finally {
      this.isFeedLoading = false;
    }
  }

  ngOnDestroy(): void {
    this.composerService.dispose();
  }
}
