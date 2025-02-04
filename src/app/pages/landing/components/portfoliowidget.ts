import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
}

@Component({
    selector: 'portfolio-widget',
    imports: [CardModule, NgFor, ButtonModule, RouterLink],
    template: `
        <section
            id="portfolio"
            class="portfolio-widget py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20 bg-primary-50 dark:bg-surface-900"
        >
            <div class="text-center mb-6">
                <h2 class="text-3xl font-bold text-surface-900 dark:text-surface-50 mb-2">{{ title }}</h2>
                <p class="text-surface-600 dark:text-surface-400 text-lg">{{ subtitle }}</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="col-span-1" *ngFor="let project of projects">
                    <p-card [style]="{ width: '100%', overflow: 'hidden' }" class="shadow-lg">
                        <ng-template pTemplate="header">
                            <img alt="{{ project.title }}" class="w-full h-48 object-cover" [src]="project.image" />
                        </ng-template>
                        <ng-template pTemplate="title">
                            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
                        </ng-template>
                        <ng-template pTemplate="content">
                            <p class="text-sm text-surface-600 dark:text-surface-400">{{ project.description }}</p>
                        </ng-template>
                        <ng-template pTemplate="footer">
                            <div class="flex justify-between mt-2">
                                <p-button
                                    label="View Project"
                                    icon="pi pi-eye"
                                    [routerLink]="project.link"
                                    class="w-full"
                                ></p-button>
                            </div>
                        </ng-template>
                    </p-card>
                </div>
            </div>
        </section>
    `,
    styles: ``
})
export class PortfolioWidget {
    @Input() title: string = 'Portafolio';
    @Input() subtitle: string = 'Explora mis proyectos y repositorios en GitHub.';

    projects: Project[] = [
        {
            title: 'Proyecto 1',
            description: 'Project description goes here. This project involves...',
            image: 'https://miro.medium.com/v2/resize:fit:1400/1*F3nrHzMcQ8Z_TaGUpWf7_A.png',
            link: 'https://github.com/linkProyecto',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS']
        },
        {
            title: 'Proyecto 2',
            description: 'Project description goes here. This project involves...',
            image: 'https://miro.medium.com/v2/resize:fit:1400/1*F3nrHzMcQ8Z_TaGUpWf7_A.png',
            link: 'https://github.com/linkProyecto',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS']
        },
        {
            title: 'Proyecto 3',
            description: 'Project description goes here. This project involves...',
            image: 'https://miro.medium.com/v2/resize:fit:1400/1*F3nrHzMcQ8Z_TaGUpWf7_A.png',
            link: 'https://github.com/linkProyecto',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS']
        },
        {
            title: 'Proyecto 4',
            description: 'Project description goes here. This project involves...',
            image: 'https://miro.medium.com/v2/resize:fit:1400/1*F3nrHzMcQ8Z_TaGUpWf7_A.png',
            link: 'https://github.com/linkProyecto',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS']
        }
    ];
}
