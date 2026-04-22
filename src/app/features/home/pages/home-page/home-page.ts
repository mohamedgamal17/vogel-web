import { Component, OnDestroy } from '@angular/core';
import { HomeComposerPanelComponent } from '../../components/home-composer-panel/home-composer-panel';
import { HomeFeedListComponent } from '../../components/home-feed-list/home-feed-list';
import { HomeQuickActionsFabComponent } from '../../components/home-quick-actions-fab/home-quick-actions-fab';
import { HomeRightRailComponent } from '../../components/home-right-rail/home-right-rail';
import { HomeSidebarNavComponent } from '../../components/home-sidebar-nav/home-sidebar-nav';
import { HomeTopbarComponent } from '../../components/home-topbar/home-topbar';
import { HomeComposerService } from '../../services/home-composer.service';
import { HomeFeedService } from '../../services/home-feed.service';

@Component({
  selector: 'app-home-page',
  imports: [
    HomeTopbarComponent,
    HomeSidebarNavComponent,
    HomeFeedListComponent,
    HomeRightRailComponent,
    HomeComposerPanelComponent,
    HomeQuickActionsFabComponent,
  ],
  providers: [HomeFeedService, HomeComposerService],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnDestroy {
  constructor(
    readonly feedService: HomeFeedService,
    readonly composerService: HomeComposerService
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
