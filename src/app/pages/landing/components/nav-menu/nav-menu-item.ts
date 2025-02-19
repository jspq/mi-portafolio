import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'nav-menu-item',
    standalone: true,
    imports: [RippleModule],
    template: `
        <a
            (click)="navigate()"
            pRipple
            class="px-0 py-2
            hover:text-primary dark:hover:text-primary-contrast-400
            font-medium
            text-xl
            cursor-pointer
            no-underline
            text-surface-900
            dark:text-surface-0
            "
        >
            <span>{{ label }}</span>
        </a>
    `
})
export class NavMenuItem {
    @Input() label: string = '';
    @Input() fragment: string = '';

    constructor(private router: Router) {}

    navigate() {
        document.getElementById(this.fragment)?.scrollIntoView({ behavior: 'smooth' });
    }
}
