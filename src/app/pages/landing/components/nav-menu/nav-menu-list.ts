import { Component, inject, OnInit } from '@angular/core';
import { NavMenuItem } from './nav-menu-item';
import { NgFor } from '@angular/common';
import { MenuService, MenuItem } from '../../../services/menu.service';

@Component({
    selector: 'nav-menu-list',
    standalone: true,
    imports: [NavMenuItem, NgFor],
    template: `
        <ul class="list-none p-0 m-0 flex flex-col items-center select-none gap-4">
            <li *ngFor="let item of menuItems">
                <nav-menu-item [label]="item.label" [fragment]="item.fragment"></nav-menu-item>
            </li>
        </ul>
    `
})
export class NavMenuList implements OnInit {
    menuService = inject(MenuService);

    protected menuItems: MenuItem[] = [];

    ngOnInit(): void {
        this.menuService.getMenuItems().then((items) => (this.menuItems = items));
    }
}
