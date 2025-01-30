import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiPortafolioComponent } from './components/mi-portafolio/mi-portafolio.component';
import { ThemeService } from './services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MiPortafolioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-portafolio';

  constructor(public themeService: ThemeService) { }
}
