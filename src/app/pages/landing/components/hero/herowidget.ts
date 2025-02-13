import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'hero-widget',
    imports: [ButtonModule],
    template: `
        <section id="hero" class="hero-widget flex flex-col pt-6 px-6 lg:px-20 overflow-hidden" [@fadeIn]>
            <div class="hero-content">
                <h1 class="hero-title">¡Hola! Soy Maicol Hernandez</h1>
                <p class="hero-subtitle text-lg md:text-2xl text-gray-300  dark:text-primary mt-4">
                    Desarrollador Fullstack | Diseño Moderno | UI/UX
                </p>
                <!-- <p class="hero-subtitle">Desarrollador Fullstack | Diseño Moderno | UI/UX</p> -->
                <button
                    pButton
                    type="button"
                    label="Ver mi trabajo"
                    class="hero-button"
                    routerLink="/portfolio"
                ></button>
            </div>
            <div class="scroll-indicator" (click)="scrollToContent()">
                <i class="pi pi-chevron-down"></i>
            </div>
        </section>
    `,
    styleUrl: './herowidget.scss',
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(20px)' }),
                animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ])
    ]
})
export class Herowidget {
    scrollToContent(): void {
        // Asumimos que la siguiente sección tiene id "next-section"
        const nextSection = document.getElementById('about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
