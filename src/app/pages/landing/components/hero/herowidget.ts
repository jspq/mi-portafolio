import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'hero-widget',
    imports: [ButtonModule],
    templateUrl: './herowidget.html',
    styleUrls: ['./herowidget.scss'],
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
