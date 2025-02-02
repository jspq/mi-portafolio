import { Component, ViewChild, ElementRef } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'service',
    imports: [
        //BrowserAnimationsModule,
        //BrowserModule,
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule
    ],
    templateUrl: './service.component.html',
    styleUrl: './service.component.scss'
})
export class ServiceComponent {
    serviceTitle: string = 'Servicios';
    description: string = 'Conoce la información de los distintos servicios.';

    services = [
        {
            title: 'Servicio 1',
            description: 'Descripcion 1',
            background: 'https://zibtek-ghost-blog.sfo3.cdn.digitaloceanspaces.com/2021/05/image-1.png'
        },
        {
            title: 'Servicio 2',
            description: 'Descripcion 2',
            background: 'https://zibtek-ghost-blog.sfo3.cdn.digitaloceanspaces.com/2021/05/image-1.png'
        },
        {
            title: 'Servicio 3',
            description: 'Descripcion 3',
            background: 'https://zibtek-ghost-blog.sfo3.cdn.digitaloceanspaces.com/2021/05/image-1.png'
        },
        {
            title: 'Servicio 4',
            description: 'Descripcion 4',
            background: 'https://zibtek-ghost-blog.sfo3.cdn.digitaloceanspaces.com/2021/05/image-1.png'
        }
    ];
}
