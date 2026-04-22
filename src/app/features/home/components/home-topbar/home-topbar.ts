import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home-topbar',
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './home-topbar.html',
  styleUrl: './home-topbar.scss',
})
export class HomeTopbarComponent {}
