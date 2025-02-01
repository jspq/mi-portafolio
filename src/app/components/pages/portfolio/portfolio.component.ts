import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'portfolio',
    imports: [CommonModule],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    {
      name: "Proyecto",
      description: "Descripcion",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*F3nrHzMcQ8Z_TaGUpWf7_A.png",
      link: "https://github.com/linkProyecto"
    },
    {
      name: "Proyecto",
      description: "Descripcion",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*F3nrHzMcQ8Z_TaGUpWf7_A.png",
      link: "https://github.com/linkProyecto"
    },
    {
      name: "Proyecto",
      description: "Descripcion",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*F3nrHzMcQ8Z_TaGUpWf7_A.png",
      link: "https://github.com/linkProyecto"
    },
    {
      name: "Proyecto",
      description: "Descripcion",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*F3nrHzMcQ8Z_TaGUpWf7_A.png",
      link: "https://github.com/linkProyecto"
    }
  ];
}
