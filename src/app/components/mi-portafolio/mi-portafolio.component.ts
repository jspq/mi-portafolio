import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { ServiceComponent } from '../pages/service/service.component';
import { TestComponent } from '../test/test.component';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';
import { ContactsComponent } from '../pages/contacts/contacts.component';

@Component({
  selector: 'mi-portafolio',
  standalone: true,
  imports: [
    NavComponent,
    ServiceComponent, 
    PortfolioComponent,
    FooterComponent,
    ContactsComponent],
  templateUrl: './mi-portafolio.component.html',
  styleUrl: './mi-portafolio.component.css'
})
export class MiPortafolioComponent {

}
