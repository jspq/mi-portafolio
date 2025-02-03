import { Injectable } from '@angular/core';

export interface Offering {
    id?: number;
    title?: string;
    description?: string;
    background?: string;
    image?: string;
    inventoryStatus?: string;
    price?: number;
}

@Injectable({
    providedIn: 'root'
})
export class OfferingService {
    getOfferingsData(): Offering[] {
        return [
            {
                id: 1,
                title: 'Service 1',
                description: 'Descripcion 1',
                background: 'https://zibtek-ghost-blog.sfo3.cdn.digitaloceanspaces.com/2021/05/image-1.png',
                image: 'bamboo-watch.jpg',
                inventoryStatus: 'INSTOCK',
                price: 3
            },
            {
                id: 2,
                title: 'Service 2',
                description: 'Descripcion 2',
                background: 'https://zibtek-ghost-blog.sfo3.cdn.digitaloceanspaces.com/2021/05/image-1.png',
                image: 'black-watch.jpg',
                inventoryStatus: 'OUTOFSTOCK',
                price: 13
            },
            {
                id: 3,
                title: 'Service 3',
                description: 'Descripcion 3',
                background: 'https://zibtek-ghost-blog.sfo3.cdn.digitaloceanspaces.com/2021/05/image-1.png',
                image: 'blue-band.jpg',
                inventoryStatus: 'INSTOCK',
                price: 11
            },
            {
                id: 4,
                title: 'Service 4',
                description: 'Descripcion 4',
                background: 'https://zibtek-ghost-blog.sfo3.cdn.digitaloceanspaces.com/2021/05/image-1.png',
                image: 'chakra-bracelet.jpg',
                inventoryStatus: 'LOWSTOCK',
                price: 5
            },
            {
                id: 5,
                title: 'Service 5',
                description: 'Descripcion 5',
                background: 'https://zibtek-ghost-blog.sfo3.cdn.digitaloceanspaces.com/2021/05/image-1.png',
                image: 'bracelet.jpg',
                inventoryStatus: 'OUTOFSTOCK',
                price: 10
            }
        ];
    }

    getOfferingsMini(): Promise<Offering[]> {
        return Promise.resolve(this.getOfferingsData().splice(0, 5));
    }

    getOfferingsSmall(): Promise<Offering[]> {
        return Promise.resolve(this.getOfferingsData().splice(0, 10));
    }

    getOfferings(): Promise<Offering[]> {
        return Promise.resolve(this.getOfferingsData());
    }
}
