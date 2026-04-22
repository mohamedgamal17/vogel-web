import { Injectable } from '@angular/core';
import { ComposerMediaPreview } from '../models/home-composer.model';

@Injectable()
export class HomeComposerService {
  isComposerMenuOpen = false;
  isComposerPanelOpen = false;
  draftPostText = '';
  readonly composerMediaPreviews: ComposerMediaPreview[] = [];

  toggleComposerMenu(): void {
    this.isComposerMenuOpen = !this.isComposerMenuOpen;
  }

  openComposerFromAction(actionLabel: string): void {
    this.isComposerPanelOpen =
      actionLabel === 'Post' || actionLabel === 'Photo';
    this.isComposerMenuOpen = false;
  }

  setDraftPostText(value: string): void {
    this.draftPostText = value;
  }

  onMediaFilesSelected(files: FileList | null): void {
    if (!files) {
      return;
    }

    for (const file of Array.from(files)) {
      const kind = file.type.startsWith('video/') ? 'video' : 'image';
      this.composerMediaPreviews.push({
        name: file.name,
        kind,
        previewUrl: URL.createObjectURL(file),
      });
    }
  }

  removeComposerMedia(index: number): void {
    const selectedMedia = this.composerMediaPreviews[index];
    if (!selectedMedia) {
      return;
    }

    URL.revokeObjectURL(selectedMedia.previewUrl);
    this.composerMediaPreviews.splice(index, 1);
  }

  clearComposerDraft(): void {
    this.releaseAllMediaPreviews();
    this.draftPostText = '';
    this.isComposerPanelOpen = false;
  }

  dispose(): void {
    this.releaseAllMediaPreviews();
  }

  private releaseAllMediaPreviews(): void {
    for (const media of this.composerMediaPreviews) {
      URL.revokeObjectURL(media.previewUrl);
    }

    this.composerMediaPreviews.length = 0;
  }
}
