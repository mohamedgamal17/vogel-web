import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ComposerMediaPreview } from '../../models/home-composer.model';

@Component({
  selector: 'app-home-composer-panel',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './home-composer-panel.html',
  styleUrl: './home-composer-panel.scss',
})
export class HomeComposerPanelComponent {
  @Input({ required: true }) isComposerPanelOpen = false;
  @Input({ required: true }) draftPostText = '';
  @Input({ required: true }) composerMediaPreviews: ComposerMediaPreview[] = [];

  @Output() draftPostTextChange = new EventEmitter<string>();
  @Output() mediaFilesSelected = new EventEmitter<FileList | null>();
  @Output() clearDraft = new EventEmitter<void>();
  @Output() removeMedia = new EventEmitter<number>();

  onDraftInput(event: Event): void {
    this.draftPostTextChange.emit((event.target as HTMLTextAreaElement).value);
  }

  onMediaChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.mediaFilesSelected.emit(inputElement.files);
    inputElement.value = '';
  }
}
