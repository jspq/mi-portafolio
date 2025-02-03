import { Component } from '@angular/core';
import { NavMenuList } from './nav-menu-list';

@Component({
    selector: 'desktop-menu',
    imports: [NavMenuList],
    template: `<nav-menu-list></nav-menu-list>`
})
export class DesktopMenu {}
