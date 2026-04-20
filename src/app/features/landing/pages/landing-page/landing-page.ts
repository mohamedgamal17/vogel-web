import { Component } from '@angular/core';
import { LandingFeatureHighlightsComponent } from '../../components/landing-feature-highlights/landing-feature-highlights';
import { LandingFinalCtaComponent } from '../../components/landing-final-cta/landing-final-cta';
import { LandingFooterComponent } from '../../components/landing-footer/landing-footer';
import { LandingHeaderComponent } from '../../components/landing-header/landing-header';
import { LandingHeroComponent } from '../../components/landing-hero/landing-hero';
import { LandingHowItWorksComponent } from '../../components/landing-how-it-works/landing-how-it-works';
import { LandingTrustStripComponent } from '../../components/landing-trust-strip/landing-trust-strip';

@Component({
  selector: 'app-landing-page',
  imports: [
    LandingHeaderComponent,
    LandingHeroComponent,
    LandingTrustStripComponent,
    LandingFeatureHighlightsComponent,
    LandingHowItWorksComponent,
    LandingFinalCtaComponent,
    LandingFooterComponent,
  ],
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
