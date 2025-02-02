import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavMenuList } from './nav-menu/nav-menu-list';

@Component({
    selector: 'mobile-menu',
    imports: [NavMenuList],
    template: `<nav-menu-list></nav-menu-list>`
})
export class MobileMenu {
    constructor(public router: Router) {}
}
