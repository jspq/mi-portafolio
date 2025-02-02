import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
    selector: 'footer-widget',
    imports: [PanelModule],
    templateUrl: './footerwidget.html'
})
export class FooterWidget {
    currentYear: number = new Date().getFullYear();
}
