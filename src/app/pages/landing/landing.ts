import { Component } from '@angular/core';
import { Topbarwidget } from './components/topbarwidget/topbarwidget';
import { FooterWidget } from './components/footerwidget/footerwidget';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [FooterWidget, Topbarwidget],
    template: `
        <div class="bg-surface-0 dark:bg-surface-900">
            <div id="home" class="landing-wrapper overflow-hidden">
                <topbar-widget class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static" />
                <footer-widget />
            </div>
        </div>
    `
})
export class Landing {}
