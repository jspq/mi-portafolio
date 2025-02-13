import { Component, Inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { Button } from 'primeng/button';
import { Offering, OfferingService } from '../../service/offering.service';

@Component({
    selector: 'services-widget',
    standalone: true,
    imports: [CommonModule, Carousel, Tag, Button],
    providers: [OfferingService],
    template: `
        <section
            id="services"
            class="services-widget py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20 bg-primary-50 dark:bg-surface-900"
        >
            <div class="text-center mb-6">
                <h2 class="text-3xl font-bold text-surface-900 dark:text-surface-50 mb-2">{{ title }}</h2>
                <p class="text-surface-600 dark:text-surface-400 text-lg">{{ subtitle }}</p>
            </div>

            <div class="grid grid-cols-12 gap-4 justify-center">
                <div class="col-span-12 text-center">
                    <p-carousel
                        [value]="offerings"
                        [numVisible]="3"
                        [numScroll]="3"
                        [circular]="true"
                        [responsiveOptions]="responsiveOptions"
                        autoplayInterval="3000"
                    >
                        <ng-template let-offering #item>
                            <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
                                <div class="mb-4">
                                    <div class="relative mx-auto">
                                        <img
                                            src="https://primefaces.org/cdn/primeng/images/demo/product/{{
                                                offering.image
                                            }}"
                                            [alt]="offering.title"
                                            class="w-full rounded-border"
                                        />
                                        <p-tag
                                            [value]="offering.inventoryStatus"
                                            [severity]="getSeverity(offering.inventoryStatus)"
                                            class="absolute"
                                            styleClass="dark:!bg-surface-900 dark:!text-primary-600"
                                            [ngStyle]="{ 'left.px': 5, 'top.px': 5 }"
                                        />
                                    </div>
                                </div>
                                <div class="mb-4 font-medium">{{ offering.title }}</div>
                                <div class="flex justify-between items-center">
                                    <div class="mt-0 font-semibold text-xl">{{ '$' + offering.price }}</div>
                                    <span>
                                        <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                                        <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                                    </span>
                                </div>
                            </div>
                        </ng-template>
                    </p-carousel>
                </div>
            </div>
        </section>
    `
})
export class ServicesWidget implements OnInit {
    @Input() title: string = 'Servicios';
    @Input() subtitle: string = 'Conoce la información de los distintos servicios.';

    offerings: Offering[] = [];
    responsiveOptions: any[] | undefined;

    constructor(
        private offeringService: OfferingService,
        @Inject('breakpoints') private breakpoints: any
    ) {}

    ngOnInit(): void {
        this.offeringService.getOfferingsSmall().then((offerings) => (this.offerings = offerings));

        this.responsiveOptions = [
            {
                breakpoint: this.breakpoints.sm,
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: this.breakpoints.md,
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: this.breakpoints.lg,
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: this.breakpoints.xl,
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: this.breakpoints['2xl'],
                numVisible: 3,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'available':
                return 'success';
            case 'limited':
                return 'warn';
            case 'out_of_stock':
                return 'danger';
            default:
                return undefined;
        }
    }
}
