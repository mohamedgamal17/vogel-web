import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-landing-header',
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './landing-header.html',
  styleUrl: './landing-header.scss',
})
export class LandingHeaderComponent {
  @Output() readonly login = new EventEmitter<void>();

  onLogin(): void {
    this.login.emit();
  }
}
