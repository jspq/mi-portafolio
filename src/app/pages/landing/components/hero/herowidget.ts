import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'hero-widget',
    imports: [ButtonModule],
    template: `
        <section
            id="hero"
            class="hero-widget h-screen flex flex-col pt-6 px-6 lg:px-20 items-center justify-center overflow-hidden bg-gradient-to-tr from-red-900 via-green-900 to-blue-900"
            [@fadeIn]
        >
            <div class="mt-32 text-center text-primary">
                <h1 class="text-7xl md:text-9xl font-bold mb-4">¡Hola! Soy Maicol Hernandez</h1>
                <p class="text-lg md:text-2xl text-gray-300 dark:text-primary mt-4">
                    Desarrollador Fullstack | Diseño Moderno | UI/UX
                </p>
                <button
                    pButton
                    pRipple
                    type="button"
                    label="Ver mi trabajo"
                    class="text-4xl py-2 px-4"
                    routerLink="/portfolio"
                ></button>
            </div>
            <div
                class="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-4xl cursor-pointer text-primary animate-bounce"
                (click)="scrollToContent()"
            >
                <i class="pi pi-chevron-down"></i>
            </div>
        </section>
    `,
    styleUrls: [],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(20px)' }),
                animate('2s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ])
    ]
})
export class Herowidget {
    scrollToContent(): void {
        const nextSection = document.getElementById('about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
