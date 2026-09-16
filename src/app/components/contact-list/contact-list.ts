import { Component, OnInit, inject } from '@angular/core';
import { ContactRow } from '../contact-row/contact-row';
import { ContactsService } from '../../servicios/contacts';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ContactRow],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactListComponent implements OnInit {
  private contactsService = inject(ContactsService);
  contacts: Contact[] = [];
  cargando = true;

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe({
      next: (data) => {
        this.contacts = data;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
      },
    });
  }
}

export { ContactListComponent as ContactList };

export interface Contact {
  id: number;
  name: string;
  email: string;
}