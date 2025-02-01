import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'contacts',
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  phoneNumber = '+57 3143001234';
  whatsappLink = `https://wa.me/${this.phoneNumber}`;
  telegramLink = 'https://www.telegram.com/usuario';
  instagramLink = 'https://www.instagram.com/usuario';
  linkedinLink = 'https://www.linkedin.com/in/usuario';
  phoneCallLink = `tel:${this.phoneNumber}`;
}
