import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { LayoutService } from '../../../../layout/service/layout.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'topbar-widget',
    imports: [RouterModule, CommonModule, StyleClassModule, ButtonModule, RippleModule],
    templateUrl: './topbarwidget.html'
})
export class Topbarwidget {
    constructor(
        public router: Router,
        public layoutService: LayoutService
    ) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
