import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  serverUrl: string = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }
  getContacts(){
    return this.httpClient.get<any>(this.serverUrl + '/contacts')
  }
  postContact(contact: Contact){
    return this.httpClient.post<any>(this.serverUrl + '/contacts',contact) 
  }
}
