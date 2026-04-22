import { Component } from '@angular/core';
import { LandingFeatureHighlightsComponent } from '../../components/landing-feature-highlights/landing-feature-highlights';
import { LandingFinalCtaComponent } from '../../components/landing-final-cta/landing-final-cta';
import { LandingFooterComponent } from '../../components/landing-footer/landing-footer';
import { LandingHeaderComponent } from '../../components/landing-header/landing-header';
import { LandingHeroComponent } from '../../components/landing-hero/landing-hero';
import { LandingHowItWorksComponent } from '../../components/landing-how-it-works/landing-how-it-works';
import { LandingTrustStripComponent } from '../../components/landing-trust-strip/landing-trust-strip';
import { AuthService } from '@auth0/auth0-angular';

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
  readonly currentYear = new Date().getFullYear();


  constructor(private authService : AuthService){}

  onLogin(): void {
    this.authService.loginWithRedirect();
  }
}
