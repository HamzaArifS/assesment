import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  standalone: true,
  imports: [],
  templateUrl: './welcome-screen.component.html',
  styleUrl: './welcome-screen.component.scss'
})
export class WelcomeScreenComponent {
  constructor(private router: Router) { }

  enterGallery() {
    this.router.navigate(['/gallery']);
  }
}
