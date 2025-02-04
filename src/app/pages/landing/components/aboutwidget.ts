import { Component, Input } from '@angular/core';

@Component({
    selector: 'about-widget',
    imports: [],
    template: `
        <section
            id="about"
            class="about-widget py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20 bg-primary-50 dark:bg-surface-900"
        >
            <div class="text-center mb-6">
                <h2 class="text-3xl font-bold text-surface-900 dark:text-surface-50 mb-2">{{ title }}</h2>
                <p class="text-surface-600 dark:text-surface-400 text-lg">{{ subtitle }}</p>
            </div>

            <div class="grid grid-cols-12 gap-4 justify-center">
                <div class="col-span-12 text-center">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum assumenda explicabo voluptates ea,
                        veritatis possimus, vero omnis nesciunt dignissimos mollitia animi, quo perspiciatis sapiente
                        aspernatur asperiores porro ratione voluptatibus cum!
                    </p>
                </div>
            </div>
        </section>
    `,
    styles: ``
})
export class AboutWidget {
    @Input() title: string = 'Acerca de';
    @Input() subtitle: string = 'Conoce más sobre mi.';
}
