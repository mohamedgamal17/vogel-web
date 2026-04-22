import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeQuickAction } from '../../models/home-navigation.model';

@Component({
  selector: 'app-home-quick-actions-fab',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './home-quick-actions-fab.html',
  styleUrl: './home-quick-actions-fab.scss',
})
export class HomeQuickActionsFabComponent {
  @Input({ required: true }) quickActions: HomeQuickAction[] = [];
  @Input({ required: true }) isComposerMenuOpen = false;

  @Output() toggleComposerMenu = new EventEmitter<void>();
  @Output() openComposerFromAction = new EventEmitter<string>();
}
