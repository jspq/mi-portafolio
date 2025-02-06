import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './app/shared/shared.module';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, SharedModule],
    template: `<router-outlet appCustomCursor></router-outlet>`
})
export class AppComponent {}
