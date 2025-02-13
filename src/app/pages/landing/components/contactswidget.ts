import { NgFor, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule, ButtonDirective } from 'primeng/button';

interface Contact {
    label: string;
    href: string;
    icon: string;
    color?: ButtonDirective['severity'];
}
@Component({
    selector: 'contacts-widget',
    imports: [ButtonModule, NgFor],
    template: `
        <section
            id="contact"
            class="contacts-widget py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20 bg-primary-50 dark:bg-surface-900"
        >
            <div class="text-center mb-6">
                <h2 class="text-3xl font-bold text-surface-900 dark:text-surface-50 mb-2">{{ title }}</h2>
                <p class="text-surface-600 dark:text-surface-400 text-lg">{{ subtitle }}</p>
            </div>

            <div class="grid grid-cols-12 gap-4 justify-center">
                <div class="col-span-12 text-center">
                    <div class="card flex flex-col items-center gap-4">
                        <div class="flex flex-wrap gap-4 justify-center">
                            <a
                                pButton
                                *ngFor="let contact of contacts"
                                [href]="contact.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="p-button font-bold"
                                [severity]="contact.color"
                                [label]="contact.label"
                            >
                                <i class="pi {{ contact.icon }}"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    styles: ``
})
export class ContactsWidget {
    @Input() title: string = 'Contáctame';
    @Input() subtitle: string = 'Puedes contactarme a través de mis redes sociales o llamarme directamente.';

    contacts: Contact[] = [
        { label: 'WhatsApp', href: `https://wa.me/+57 3143001234`, icon: 'pi-whatsapp', color: 'success' },
        { label: 'Telegram', href: 'https://www.telegram.com/usuario', icon: 'pi-telegram', color: 'info' },
        { label: 'Instagram', href: 'https://www.instagram.com/usuario', icon: 'pi-instagram', color: 'help' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/usuario', icon: 'pi-linkedin', color: 'info' },
        { label: 'Llamar', href: `tel:+57 3143001234`, icon: 'pi-phone', color: 'primary' }
    ];

    constructor() {}
}
