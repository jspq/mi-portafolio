import { Component } from '@angular/core';

@Component({
    selector: 'hero-widget',
    imports: [],
    template: `
        <section id="hero" class="hero-widget flex flex-col pt-6 px-6 lg:px-20 overflow-hidden">
            <h2>herowidget works!</h2>
        </section>
    `,
    styles: `
        .hero-widget {
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
                radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%);
            clip-path: ellipse(150% 87% at 93% 13%);
        }
    `
})
export class Herowidget {}
