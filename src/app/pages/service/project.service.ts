import { Injectable } from '@angular/core';

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    constructor() {}

    getProjectsData(): Project[] {
        return [
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

    getProjects(): Promise<Project[]> {
        return Promise.resolve(this.getProjectsData());
    }
}
