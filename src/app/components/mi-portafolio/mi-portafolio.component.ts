import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent, CustomCursorComponent } from '../index';
import { HomeComponent, AboutComponent, ExperienceComponent } from '../pages/index';

@Component({
  selector: 'mi-portafolio',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ScrollToTopComponent,
    CustomCursorComponent
  ],
  templateUrl: './mi-portafolio.component.html',
  styleUrl: './mi-portafolio.component.css'
})
export class MiPortafolioComponent {

}
