import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

/**
 * @title Dynamic Grid List
 */
@Component({
    selector: 'app-home',
    imports: [MatGridListModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {}
