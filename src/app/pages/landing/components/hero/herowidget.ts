import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
    selector: 'hero-widget',
    imports: [ButtonModule],
    template: `
        <section
            id="hero"
            class="hero-widget h-screen flex flex-col pt-6 px-6 lg:px-20 items-center justify-center overflow-hidden bg-gradient-to-tr from-red-600/50 via-primary-600/50 to-blue-600/50 animate-fadeIn"
        >
            <div class="mt-32 text-center text-primary">
                <h1 class="text-7xl md:text-9xl font-bold mb-4">¡Hola! Soy Maicol Hernandez</h1>
                <p class="text-lg md:text-2xl text-semibold mt-4">Desarrollador Fullstack | Diseño Moderno | UI/UX</p>
                <!-- <button
                    pButton
                    pRipple
                    type="button"
                    label="Ver mi trabajo"
                    class="text-4xl py-2 px-4"
                    routerLink="/portfolio"
                ></button> -->
            </div>
            <div
                class="slidedown-icon absolute bottom-10 inline-flex items-center justify-center bg-primary text-primary-contrast rounded-full p-2"
                (click)="scrollToContent()"
            >
                <i class="pi pi-arrow-down"></i>
            </div>
        </section>
    `,
    styles: [
        `
            :host {
                @keyframes slidedown-icon {
                    0% {
                        transform: translateY(0);
                    }

                    50% {
                        transform: translateY(20px);
                    }

                    100% {
                        transform: translateY(0);
                    }
                }

                .slidedown-icon {
                    animation: slidedown-icon;
                    animation-duration: 3s;
                    animation-iteration-count: infinite;
                }
            }
        `
    ],
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
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    }
}
