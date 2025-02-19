import { Component, Input } from '@angular/core';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'experience-widget',
    imports: [AnimateOnScroll, CardModule, ButtonModule],
    templateUrl: './experiencewidget.html',
    styleUrls: ['./experiencewidget.scss']
})
export class ExperienceWidget {
    @Input() title: string = 'Experiencia Profesional';
    @Input() subtitle: string = 'Conoce más sobre mi.';
}
