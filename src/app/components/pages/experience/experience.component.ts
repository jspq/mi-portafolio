import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatGridListModule, MatExpansionModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  panelOpenState: boolean = false;
}
