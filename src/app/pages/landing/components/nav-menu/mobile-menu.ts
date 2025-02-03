import { Component } from '@angular/core';
import { NavMenuList } from './nav-menu-list';

@Component({
    selector: 'mobile-menu',
    standalone: true,
    imports: [NavMenuList],
    template: ` <nav-menu-list class="list-none p-0 m-0 flex flex-col items-center select-none gap-4" /> `
})
export class MobileMenu {}
