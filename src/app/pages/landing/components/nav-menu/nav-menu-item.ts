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
            class="px-0 py-2 text-surface-900 dark:text-surface-0 font-medium text-xl cursor-pointer"
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
        this.router.navigate(['/'], { fragment: this.fragment });
    }
}
