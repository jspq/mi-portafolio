import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { Logo } from './logo';

@Component({
    selector: 'footer-widget',
    imports: [PanelModule, Logo],
    template: `
        <!-- <div class="py-12 px-12 mx-0 mt-20 lg:mx-20 dark:text-surface-0">
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-2">
                    <app-logo
                        class="flex flex-wrap items-center justify-center md:justify-start md:mb-0 mb-6 cursor-pointer"
                        classSvg="h-14 mr-2"
                    >
                        <h4 class="font-bold text-3xl text-surface-900 dark:text-surface-0">SAKAI</h4>
                    </app-logo>
                </div>

                <div class="col-span-12 md:col-span-10">
                    <div class="grid grid-cols-12 gap-8 text-center md:text-left">
                        <div class="col-span-12 md:col-span-4">
                            <h5 class="font-semibold text-xl">Contact Us</h5>
                            <p>Phone: +57 (234) 567-890</p>
                        </div>
                        <div class="col-span-12 md:col-span-4">
                            <h5 class="font-semibold text-xl">Follow Us</h5>
                            <div class="flex justify-center md:justify-start space-x-4">
                                <a href="#" class="text-primary-400 hover:text-primary-600"> </a>
                                <a href="#" class="text-primary-400 hover:text-primary-600"> </a>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-4">
                            <h5 class="font-semibold text-xl">Quick Links</h5>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-primary-400 hover:text-primary-600">About</a></li>
                                <li><a href="#" class="text-primary-400 hover:text-primary-600">Projects</a></li>
                                <li><a href="#" class="text-primary-400 hover:text-primary-600">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- <footer class="md:px-[5rem] lg:px-[10rem] bottom-0 w-full text-center bg-transparent"> -->

        <footer class="relative w-full px-4 xl:px-40 bg-transparent text-center">
            <div
                class="p-4
                rounded-t-lg
                text-surface-900 dark:text-surface-0
                backdrop-blur-md
                border-x border-t dark:border-primary/50
                font-semibold overflow-hidden
                bg-gradient-to-l from-red-600/50 via-primary-600/50 to-black-600/50"
            >
                &copy; {{ currentYear }} Copyright:
                <a href="https://github.com/Maicol-Hernandez" target="_blank" class="hover:underline">
                    Michael Hernández
                </a>
            </div>
        </footer>
    `
})
export class FooterWidget {
    currentYear: number = new Date().getFullYear();
}
