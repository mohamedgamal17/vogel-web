import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeNavItem } from '../../models/home-navigation.model';

@Component({
  selector: 'app-home-sidebar-nav',
  imports: [MatCardModule, MatListModule, MatIconModule],
  templateUrl: './home-sidebar-nav.html',
  styleUrl: './home-sidebar-nav.scss',
})
export class HomeSidebarNavComponent {
  @Input({ required: true }) menuItems: HomeNavItem[] = [];
}
