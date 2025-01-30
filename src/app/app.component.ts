import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MiPortafolioComponent } from './components/mi-portafolio/mi-portafolio.component';
import { ThemeService } from './services';
import { NavComponent, FooterComponent, ScrollToTopComponent, CustomCursorComponent } from "./components";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    MiPortafolioComponent,
    NavComponent,
    FooterComponent,
    ScrollToTopComponent,
    CustomCursorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public themeService: ThemeService) { }
}
