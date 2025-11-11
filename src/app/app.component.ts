import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, SignInComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ use plural form
})
export class AppComponent {
  title = 'estorespa';
  loggedInStatus: boolean | undefined;
  links: string[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.links = ['home', 'about', 'services', 'protected'];
  }

  convertToBoolean(result: string): boolean {
    return result === 'true';
  }

  ngOnInit() {
    console.log('Router container component ngOnInit is invoked');

    // ✅ only run in browser
    if (isPlatformBrowser(this.platformId)) {
      const strStatus: string | null = localStorage.getItem('loggedInStatus');
      console.log('in router container strStatus =', strStatus);

      if (strStatus !== null) {
        this.loggedInStatus = this.convertToBoolean(strStatus);
        console.log('loggedInStatus:', this.loggedInStatus);
      }
    } else {
      console.log('Skipping localStorage — not running in browser');
    }
  }
}
