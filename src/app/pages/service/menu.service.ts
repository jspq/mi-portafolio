import { Injectable } from '@angular/core';

export interface MenuItem {
    label: string;
    fragment: string;
}

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    getData(): MenuItem[] {
        return [
            { label: 'Inicio', fragment: 'home' },
            { label: 'Acerca de', fragment: 'about' },
            { label: 'Experiencia', fragment: 'experience' },
            { label: 'Servicios', fragment: 'services' },
            { label: 'Portafolio', fragment: 'portfolio' },
            { label: 'Contáctame', fragment: 'contact' }
        ];
    }

    getMenuItems() {
        return Promise.resolve(this.getData());
    }
}
