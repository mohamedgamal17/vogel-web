import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-footer',
  templateUrl: './landing-footer.html',
})
export class LandingFooterComponent {
  @Input({ required: true }) currentYear!: number;
}
