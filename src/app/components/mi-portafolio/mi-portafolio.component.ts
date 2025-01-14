import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../pages/home/home.component';

@Component({
  selector: 'mi-portafolio',
  standalone: true,
  imports: [NavComponent, FooterComponent, HomeComponent],
  templateUrl: './mi-portafolio.component.html',
  styleUrl: './mi-portafolio.component.css'
})
export class MiPortafolioComponent {

}
