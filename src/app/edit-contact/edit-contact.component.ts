import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService, Contact } from '../contacts.service';

@Component({
  standalone: true,
  selector: 'app-edit-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent {

  contact?: Contact;
  firstName: string = "";
  lastName: string = "";
  phoneNumber: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ){}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contactsService.getContactById(id).subscribe(contact => {
      if (contact){
        this.contact = contact;
        this.firstName = contact.firstName;
        this.lastName = contact.lastName;
        this.phoneNumber = contact.phoneNumber;
      }
    })
  }

  onSubmit(){
    if (this.contact){
      const updatedContact: Partial<Contact> = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber
      };
    this.contactsService.updateContact(this.contact.id, updatedContact).subscribe(() => {
      this.router.navigate(['/'])
    });
    }
  }

  onCancel(){
    this.router.navigate(['/'])
  }

}
