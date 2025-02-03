import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MobileMenu } from './mobile-menu';
import { DesktopMenu } from './desktop-menu';
import { ActionsRightWidget } from './actions-right-widget';
import { Logo } from '../logo';

@Component({
    selector: 'topbar-widget',
    imports: [
        RouterModule,
        StyleClassModule,
        ButtonModule,
        RippleModule,
        MobileMenu,
        DesktopMenu,
        ActionsRightWidget,
        Logo
    ],
    template: `
        <div class="flex justify-between items-center w-full relative">
            <!-- Hamburger menu on the left in mobile -->
            <a
                pButton
                [text]="true"
                severity="secondary"
                [rounded]="true"
                pRipple
                class="xl:!hidden"
                pStyleClass="#mobileMenu"
                enterClass="hidden"
                leaveToClass="hidden"
                [hideOnOutsideClick]="true"
            >
                <i class="pi pi-bars !text-2xl"></i>
            </a>

            <!-- Logo in the center -->
            <app-logo>
                <span class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal mr-20">
                    SAKAI
                </span>
            </app-logo>

            <!-- Navigation menu centered on desktop -->
            <desktop-menu class="hidden xl:flex flex-1 justify-center" />

            <!-- Action buttons on the right -->
            <actions-right-widget class="flex gap-2" />
        </div>

        <!-- Mobile menu -->
        <mobile-menu
            id="mobileMenu"
            class="xl:hidden bg-surface-0 dark:bg-surface-900 absolute w-full left-0 top-full px-6 py-4 z-20 border-t border-surface-200 dark:border-surface-700 hidden"
        />
    `
})
export class Topbarwidget {}
