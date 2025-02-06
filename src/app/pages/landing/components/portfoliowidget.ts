import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Project, ProjectService } from '../../service/project.service';

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
                <div
                    class="col-span-1 transform transition-all duration-300 hover:-translate-y-2"
                    *ngFor="let project of projects"
                >
                    <p-card
                        [style]="{ width: '100%', overflow: 'hidden' }"
                        class="shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden"
                    >
                        <ng-template #header>
                            <div class="relative overflow-hidden">
                                <img
                                    alt="{{ project.title }}"
                                    class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                                    [src]="project.image"
                                />
                                <div
                                    class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
                                ></div>
                            </div>
                        </ng-template>
                        <ng-template #title>
                            <h3 class="text-xl font-semibold hover:text-primary-500 transition-colors duration-300">
                                {{ project.title }}
                            </h3>
                        </ng-template>
                        <ng-template #subtitle> Card subtitle </ng-template>
                        <ng-template #content>
                            <p class="text-sm text-surface-600 dark:text-surface-400">{{ project.description }}</p>
                        </ng-template>
                        <ng-template #footer>
                            <div class="flex gap-4 mt-2">
                                <p-button
                                    label="View Project"
                                    icon="pi pi-eye"
                                    [routerLink]="project.link"
                                    class="w-full transition-all duration-300 hover:scale-105"
                                    severity="primary"
                                    [outlined]="true"
                                    styleClass="w-full"
                                />
                            </div>
                        </ng-template>
                    </p-card>
                </div>
            </div>
        </section>
    `,
    styles: [
        `
            :host ::ng-deep .p-card {
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
        `
    ]
})
export class PortfolioWidget implements OnInit {
    @Input() title: string = 'Portafolio';
    @Input() subtitle: string = 'Explora mis proyectos y repositorios en GitHub.';

    projects: Project[] = [];

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.projectService.getProjects().then((projects) => (this.projects = projects));
    }
}
