import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'mi-portafolio',
  imports: [NavComponent, FooterComponent],
  templateUrl: './mi-portafolio.component.html',
  styleUrl: './mi-portafolio.component.scss',
})
export class MiPortafolioComponent {
  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
