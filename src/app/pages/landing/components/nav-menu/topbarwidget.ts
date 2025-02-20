import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
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
        ToolbarModule,
        MobileMenu,
        DesktopMenu,
        ActionsRightWidget,
        Logo
    ],
    template: `
        <p-toolbar
            class="
            fixed
            px-12 py-2
            top-0 left-0 right-0
            z-50
            shadow-2xl
            text-surface-900 dark:text-surface-0
            backdrop-blur-md
            bg-white/30
            border-b border-white/50 dark:border-primary/50
            dark:bg-surface-900/30
            "
            styleClass="!border-0 !bg-transparent"
        >
            <ng-template #start>
                <!-- Hamburger menu on the left in mobile -->
                <a
                    pButton
                    pRipple
                    [text]="true"
                    severity="secondary"
                    [rounded]="true"
                    class="xl:!hidden"
                    pStyleClass="#mobileMenu"
                    enterFromClass="hidden"
                    leaveToClass="hidden"
                    [hideOnOutsideClick]="true"
                >
                    <i class="pi pi-bars !text-2xl"></i>
                </a>
                <!-- Logo in the center -->
                <!-- <app-logo>
                    <span class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal mr-20">
                        SAKAI
                    </span>
                </app-logo> -->
            </ng-template>

            <ng-template #center>
                <!-- Navigation menu centered on desktop -->
                <desktop-menu class="hidden xl:flex flex-1 justify-center" />
                <!-- Mobile menu -->
                <mobile-menu
                    id="mobileMenu"
                    class="xl:hidden bg-surface-0 dark:bg-surface-900 absolute w-full left-0 top-full px-6 py-4 z-20 border-t border-surface-200 dark:border-surface-700 hidden"
                />
            </ng-template>

            <ng-template #end>
                <!-- Action buttons on the right -->
                <actions-right-widget class="flex gap-2" />
            </ng-template>
        </p-toolbar>
    `
})
export class Topbarwidget {}
