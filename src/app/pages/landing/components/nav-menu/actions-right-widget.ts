import { Component } from '@angular/core';
import { LayoutService } from '../../../../layout/service/layout.service';
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';
import { AppConfigurator } from '../../../../layout/components/app.configurator';

@Component({
    selector: 'actions-right-widget',
    standalone: true,
    imports: [StyleClassModule, CommonModule, AppConfigurator],
    template: `
        <button
            type="button"
            class="flex items-center justify-center p-2 rounded-full transition duration-200 ease-in-out hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            (click)="toggleDarkMode()"
        >
            <i
                [ngClass]="{
                    'pi ': true,
                    'pi-moon': layoutService.isDarkTheme(),
                    'pi-sun': !layoutService.isDarkTheme()
                }"
                style="font-size: 1.2rem"
            ></i>
        </button>
        <button
            class="flex items-center justify-center p-2 rounded-full transition duration-200 ease-in-out hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            pStyleClass="@next"
            enterFromClass="hidden"
            enterActiveClass="animate-scalein"
            leaveToClass="hidden"
            leaveActiveClass="animate-fadeout"
            [hideOnOutsideClick]="true"
        >
            <i class="pi pi-palette" style="font-size: 1.2rem"></i>
        </button>
        <app-configurator />
    `
})
export class ActionsRightWidget {
    constructor(public layoutService: LayoutService) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
