import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-quick-actions-fab',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './home-quick-actions-fab.html',
  styleUrl: './home-quick-actions-fab.scss',
})
export class HomeQuickActionsFabComponent {
  @Input({ required: true }) isComposerPanelOpen = false;

  @Output() toggleComposer = new EventEmitter<void>();
}
