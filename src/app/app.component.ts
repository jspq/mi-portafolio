import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiPortafolioComponent } from './components/mi-portafolio/mi-portafolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MiPortafolioComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-portafolio';
}
