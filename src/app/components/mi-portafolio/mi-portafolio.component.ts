import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { ServiceComponent } from '../pages/service/service.component';
import { TestComponent } from '../test/test.component';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';
import { ContactsComponent } from '../pages/contacts/contacts.component';
import { ScrollToTopComponent, CustomCursorComponent } from '../index';
import { HomeComponent, AboutComponent, ExperienceComponent } from '../pages/index';

@Component({
  selector: 'mi-portafolio',
  standalone: true,
  imports: [
    NavComponent,
    feature/contacts
    ServiceComponent, 
    PortfolioComponent,
    FooterComponent,
    ContactsComponent],
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
  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
