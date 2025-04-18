import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  standalone: true,
  selector: 'app-add-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  firstName = "";
  lastName = "";
  phoneNumber = "";

  constructor(
    private contactsService: ContactsService,
    private router: Router,
  ){}

  onSubmit(){
    this.contactsService.addContact({
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber
    }).subscribe(() => this.router.navigate(['/']))
  }

  onCancel(){
    this.router.navigate(['/'])
  }
}
