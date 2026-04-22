import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HomeFeedPost } from '../../models/home-feed-post.model';

@Component({
  selector: 'app-home-feed-list',
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './home-feed-list.html',
  styleUrl: './home-feed-list.scss',
})
export class HomeFeedListComponent {
  @Input({ required: true }) posts: HomeFeedPost[] = [];
}
