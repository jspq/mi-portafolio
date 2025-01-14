import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';

@Component({
  selector: 'mi-portafolio',
  standalone: true,
  imports: [NavComponent, FooterComponent, HomeComponent, AboutComponent],
  templateUrl: './mi-portafolio.component.html',
  styleUrl: './mi-portafolio.component.css'
})
export class MiPortafolioComponent {

}
