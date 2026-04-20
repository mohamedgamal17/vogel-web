import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-landing-page',
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  /** Display year in footer (avoid `new Date()` in template). */
  readonly currentYear = new Date().getFullYear();

  onLogin(): void {
    this.startAuthFlow();
  }

  private startAuthFlow(): void {
    // Temporary integration contract until Auth0 SDK wiring lands.
    window.dispatchEvent(new CustomEvent('vogel-auth-cta', { detail: { intent: 'login' } }));
  }
}
