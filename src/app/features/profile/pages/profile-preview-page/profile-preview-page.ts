import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile-preview-page',
  standalone: true,
  templateUrl: './profile-preview-page.html',
  styleUrl: './profile-preview-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePreviewPage {}
