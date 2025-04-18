import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactsService, Contact } from '../contacts.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {

  contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) {
    this.loadContacts()
  }

  loadContacts(){
    this.contactsService.getContacts().subscribe(data => this.contacts = data)
  }

  deleteContact(id: number){
    this.contactsService.deleteContact(id).subscribe(() => this.loadContacts())
  }
}
