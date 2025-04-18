import { Injectable } from '@angular/core';
import { of } from 'rxjs';


export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: Contact[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "701-212-7890"
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      phoneNumber: "701-123-4567"
    }
  ];

  private nextId = this.contacts.length;

  getContacts(){
    return of([...this.contacts]);
  }

  getContactById(id: number){
    return of(this.contacts.find( contacts => contacts.id === id)!);
  }

  addContact(contact: Omit<Contact, 'id'>){
    const newContact = {...contact, id: this.nextId++};
    this.contacts.push(newContact);
    return of(newContact)
  }

  updateContact(id: number, updated: Partial<Contact>){
    const index = this.contacts.findIndex( contacts => contacts.id === id);
    if (index !== -1){
      this.contacts[index] = {...this.contacts[index], ...updated};
    }
    return of(this.contacts[index])
  }

  deleteContact(id: number){
    this.contacts = this.contacts.filter(contacts => contacts.id !== id);
    return of(true)
  }
}
