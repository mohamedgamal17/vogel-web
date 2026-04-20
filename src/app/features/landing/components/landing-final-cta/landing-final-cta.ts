import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-landing-final-cta',
  imports: [MatButtonModule],
  templateUrl: './landing-final-cta.html',
  styleUrl: './landing-final-cta.scss',
})
export class LandingFinalCtaComponent {
  @Output() readonly login = new EventEmitter<void>();

  onLogin(): void {
    this.login.emit();
  }
}
