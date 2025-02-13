import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'hero-widget',
    template: `
        <section id="hero" class="hero-widget flex flex-col pt-6 px-6 lg:px-20 overflow-hidden" [@fadeIn]>
            <div class="hero-content">
                <h1 class="hero-title">¡Hola! Soy [Tu Nombre]</h1>
                <p class="hero-subtitle">Desarrollador Frontend | Diseñador de experiencias digitales</p>
                <!-- Botón de PrimeNG, asegúrate de importar ButtonModule en tu módulo -->
                <button
                    pButton
                    type="button"
                    label="Ver mi trabajo"
                    class="hero-button"
                    routerLink="/portfolio"
                ></button>
            </div>
            <!-- Indicador de scroll -->
            <div class="scroll-indicator" (click)="scrollToContent()">
                <i class="pi pi-chevron-down"></i>
            </div>
        </section>
    `,
    styles: [
        `
            /* Fondo y forma del Hero */
            .hero-widget {
                height: 100vh;
                position: relative;
                // background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
                // clip-path: ellipse(150% 100% at 50% 0%);
                // background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
                //     radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%);
                // clip-path: ellipse(150% 87% at 93% 13%);
            }
            /* Contenido centrado verticalmente */
            .hero-content {
                margin-top: 25vh;
                text-align: center;
                color: var(--primary-color);
            }
            .hero-title {
                font-size: 3rem;
                margin-bottom: 1rem;
                font-weight: 700;
            }
            .hero-subtitle {
                font-size: 1.5rem;
                margin-bottom: 2rem;
            }
            .hero-button {
                font-size: 1rem;
                padding: 1rem 2rem;
            }
            /* Indicador de scroll animado */
            .scroll-indicator {
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 2rem;
                cursor: pointer;
                color: var(--primary-color);
                animation: bounce 2s infinite;
            }
            @keyframes bounce {
                0%,
                20%,
                50%,
                80%,
                100% {
                    transform: translateX(-50%) translateY(0);
                }
                40% {
                    transform: translateX(-50%) translateY(-10px);
                }
                60% {
                    transform: translateX(-50%) translateY(-5px);
                }
            }
        `
    ],
    animations: [
        trigger('fadeIn', [
            // La animación se dispara al entrar el componente
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
