import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { Logo } from './logo';

@Component({
    selector: 'footer-widget',
    imports: [PanelModule, Logo],
    template: `
        <div class="py-12 px-12 mx-0 mt-20 lg:mx-20 dark:text-surface-0">
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-2">
                    <app-logo
                        class="flex flex-wrap items-center justify-center md:justify-start md:mb-0 mb-6 cursor-pointer"
                        classSvg="h-14 mr-2"
                    >
                        <h4 class="font-medium text-3xl text-surface-900 dark:text-surface-0">SAKAI</h4>
                    </app-logo>
                </div>

                <div class="col-span-12 md:col-span-10">
                    <div class="grid grid-cols-12 gap-8 text-center md:text-left">
                        <div class="col-span-12 md:col-span-4">
                            <h5 class="font-semibold text-xl">Contact Us</h5>
                            <!-- <p>Email: example@example.com</p> -->
                            <p>Phone: +1 (234) 567-890</p>
                        </div>
                        <div class="col-span-12 md:col-span-4">
                            <h5 class="font-semibold text-xl">Follow Us</h5>
                            <div class="flex justify-center md:justify-start space-x-4">
                                <a href="#" class="text-primary-400 hover:text-primary-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            d="M12 2.5C6.48 2.5 2 6.98 2 12.5c0 4.5 3.24 8.24 7.5 8.95v-6.34H7.5V12h2.5v-1.5c0-2.5 1.5-3.5 3.5-3.5 1 0 2 .1 2 .1v2.5h-1.5c-1.5 0-2 .5-2 1.5V12h2.5l-.5 2.15H12v6.34C16.76 20.74 20 17 20 12.5c0-5.52-4.48-10-10-10z"
                                        />
                                    </svg>
                                </a>
                                <a href="#" class="text-primary-400 hover:text-primary-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                                        />
                                        <path
                                            d="M15.5 10H14v-1.5c0-.83.67-1.5 1.5-1.5S17 7.67 17 8.5V10h1.5c.83 0 1.5.67 1.5 1.5S19.33 13 18.5 13H17v5.5c0 .83-.67 1.5-1.5 1.5S14 19.33 14 18.5V13h-1.5C11.67 13 11 12.33 11 11.5S11.67 10 12.5 10H15.5z"
                                        />
                                    </svg>
                                </a>
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
            <!--Copyright section-->
            <div class="bg-primary/10 p-6 mt-3 text-center">
                <span>&copy; {{ currentYear }} Copyright:</span>
                <a class="font-semibold" href="#">John Doe</a>
            </div>
        </div>
    `
})
export class FooterWidget {
    currentYear: number = new Date().getFullYear();
}
