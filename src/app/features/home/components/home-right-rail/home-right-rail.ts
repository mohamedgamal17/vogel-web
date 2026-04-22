import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { HomeSuggestion } from '../../models/home-navigation.model';

@Component({
  selector: 'app-home-right-rail',
  imports: [MatCardModule, MatButtonModule, MatChipsModule],
  templateUrl: './home-right-rail.html',
  styleUrl: './home-right-rail.scss',
})
export class HomeRightRailComponent {
  @Input({ required: true }) suggestions: HomeSuggestion[] = [];
  @Input({ required: true }) trends: string[] = [];
}
