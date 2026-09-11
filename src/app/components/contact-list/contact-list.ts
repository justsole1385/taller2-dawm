import { Component } from '@angular/core';
import { ContactRow } from '../contact-row/contact-row';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ContactRow],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactListComponent {
  contacts: Contact[] = [
    { id: 1, name: 'María López', email: 'maria@example.com' },
    { id: 2, name: 'Carlos Ruiz', email: 'carlos@example.com' },
    { id: 3, name: 'Ana Gómez', email: 'ana@example.com' },
  ];
}

export { ContactListComponent as ContactList };

export interface Contact {
  id: number;
  name: string;
  email: string;
}