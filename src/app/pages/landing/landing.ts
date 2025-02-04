import { Component } from '@angular/core';
import { Topbarwidget } from './components/nav-menu/topbarwidget';
import { FooterWidget } from './components/footerwidget';
import { Herowidget } from './components/herowidget';
import { ServicesWidget } from './components/serviceswidget';
import { Aboutwidget } from './components/aboutwidget';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [FooterWidget, Topbarwidget, ServicesWidget, Herowidget, Aboutwidget],
    template: `
        <div class="bg-surface-0 dark:bg-surface-900">
            <div id="home" class="landing-wrapper overflow-hidden">
                <topbar-widget
                    class="py-6 px-6 mx-0 md:mx-12 xl:mx-20 xl:px-20 flex items-center justify-between relative xl:static"
                />
                <hero-widget />
                <about-widget />
                <services-widget />
                <footer-widget />
            </div>
        </div>
    `
})
export class Landing {}
