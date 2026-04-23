import { Injectable } from '@angular/core';
import { PostComposerMediaPreview } from '../models/post-composer.model';

@Injectable()
export class PostComposerService {
  isComposerPanelOpen = false;
  draftPostText = '';
  readonly composerMediaPreviews: PostComposerMediaPreview[] = [];

  openComposer(): void {
    this.isComposerPanelOpen = true;
  }

  closeComposer(): void {
    this.isComposerPanelOpen = false;
  }

  toggleComposer(): void {
    this.isComposerPanelOpen = !this.isComposerPanelOpen;
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
    this.closeComposer();
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
