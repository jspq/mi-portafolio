import { Component } from '@angular/core';

@Component({
    selector: 'about-widget',
    imports: [],
    template: `
        <section
            id="about"
            class="about-widget py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20 bg-primary-50 dark:bg-surface-900"
        >
            <div class="grid grid-cols-12 gap-4 justify-center">
                <div class="col-span-12 text-center">
                    <h3 class="text-2xl font-bold mb-4">Acerca de</h3>
                </div>
            </div>
        </section>
    `,
    styles: ``
})
export class Aboutwidget {}
