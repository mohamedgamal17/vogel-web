import { Component, OnDestroy } from '@angular/core';
import { HomeQuickActionsFabComponent } from '../../components/home-quick-actions-fab/home-quick-actions-fab';
import { HomeRightRailComponent } from '../../components/home-right-rail/home-right-rail';
import { HomeSidebarNavComponent } from '../../components/home-sidebar-nav/home-sidebar-nav';
import { HomeTopbarComponent } from '../../components/home-topbar/home-topbar';
import { HomeFeedService } from '../../services/home-feed.service';
import { PostComposerPanelComponent } from '../../../posts/components/post-composer-panel/post-composer-panel';
import { PostFeedListComponent } from '../../../posts/components/post-feed-list/post-feed-list';
import { PostComposerService } from '../../../posts/services/post-composer.service';
import { PostsFeedService } from '../../../posts/services/posts-feed.service';

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
export class HomePage implements OnDestroy {
  constructor(
    readonly feedService: HomeFeedService,
    readonly postsFeedService: PostsFeedService,
    readonly composerService: PostComposerService
  ) {}

  toggleComposerMenu(): void {
    this.composerService.toggleComposerMenu();
  }

  openComposerFromAction(actionLabel: string): void {
    this.composerService.openComposerFromAction(actionLabel);
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

  ngOnDestroy(): void {
    this.composerService.dispose();
  }
}
