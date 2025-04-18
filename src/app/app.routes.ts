import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

export const routes: Routes = [
    {
        path: '',
        component: ContactListComponent,
        title: 'Home'
    },
    {
        path: 'add',
        component: AddContactComponent,
        title: 'New-Contact'
    },
    {
        path: 'edit/:id',
        component: EditContactComponent,
        title: 'Edit-Contact'

    }
];
