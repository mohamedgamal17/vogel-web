import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-landing-hero',
  imports: [MatButtonModule],
  templateUrl: './landing-hero.html',
  styleUrl: './landing-hero.scss',
})
export class LandingHeroComponent {
  @Output() readonly login = new EventEmitter<void>();

  onLogin(): void {
    this.login.emit();
  }
}
