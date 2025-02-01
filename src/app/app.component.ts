import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MiPortafolioComponent } from './components/mi-portafolio/mi-portafolio.component';
import { ThemeService } from './services';
import { ScrollToTopComponent, CustomCursorComponent } from "./components";

@Component({
    selector: 'app-root',
    imports: [
        RouterModule,
        MiPortafolioComponent,
        ScrollToTopComponent,
        CustomCursorComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public themeService: ThemeService) { }
}
