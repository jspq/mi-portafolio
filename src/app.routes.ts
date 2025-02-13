import { Routes } from '@angular/router';
import { Landing } from './app/pages/landing/landing';
// import { MiPortafolioComponent } from './app/components/mi-portafolio/mi-portafolio.component';

export const appRoutes: Routes = [
    // { path: 'portafolio', component: MiPortafolioComponent, title: 'Mi Portafolio' },
    { path: '', component: Landing, title: 'Mi Portafolio' },
    { path: '**', redirectTo: '/notfound' }
];
