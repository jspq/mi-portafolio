import { Component, inject, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuItem } from './nav-menu-item';
import { NgFor } from '@angular/common';
import { MenuService, MenuItem } from '../../../service/menu.service';

@Component({
    selector: 'nav-menu-list',
    standalone: true,
    imports: [NavMenuItem, NgFor, CommonModule],
    template: `
        <ul [ngClass]="['list-none p-0 m-0 flex items-center select-none gap-8', class]">
            <li *ngFor="let item of menuItems">
                <nav-menu-item [label]="item.label" [fragment]="item.fragment"></nav-menu-item>
            </li>
        </ul>
    `
})
export class NavMenuList implements OnInit {
    @Input() class: string = '';
    menuService = inject(MenuService);

    protected menuItems: MenuItem[] = [];

    ngOnInit(): void {
        this.menuService.getMenuItems().then((items) => (this.menuItems = items));
    }
}
