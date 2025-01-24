import { MediaMatcher } from '@angular/cdk/layout';
import { Component, EventEmitter, inject, Output, signal, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawerMode, MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ThemeToggleComponent } from '../index';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { HomeComponent } from '../pages/index';


/**
 * @title Basaic sidenav
 */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ThemeToggleComponent,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    HomeComponent
  ],
})
export class NavComponent {
  @Output() navigate = new EventEmitter<string>();

  protected readonly fillerNav = [
    { name: 'Inicio', path: 'home' },
    { name: 'Acerca de', path: 'about' },
    { name: 'Experiencia', path: 'experience' },
    { name: 'Servicios', path: 'services' },
    { name: 'Portafolio', path: 'portfolio' },
    { name: 'Contáctame', path: 'contact' },
  ];

  protected readonly fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  protected readonly isMobile = signal<boolean>(true);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  onNavigate(path: string): void {
    // this.navigate.emit(path); // Emit the event to the parent components
    // if (this.sidenavService) {
    //   this.sidenavService.close(); // Close the sidenav
    // }
  }

  toggleSidenav(): void {
    // this.sidenavService.toggle();
  }
}
