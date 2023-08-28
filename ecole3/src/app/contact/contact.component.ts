import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  contact!: Contact;

  constructor(private contactService : ContactService){}
  ngOnInit(): void {
      this.contact=new Contact();
  }
  postContact(){
    this.contactService.postContact(this.contact).subscribe(contact =>{    alert("Merci pour nous avoir transmis votre message ;nous vous contacterons des que possible");});
    
  }

}
