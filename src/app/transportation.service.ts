import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TransportationService {

   // new code
   firstuser: User = {username:'dhavish', password:'dk264'};
  
 
   users:User[] = [this.firstuser];



  constructor() { }

  // new code
  getUser() {
    return this.users;
   }

  addUser(user: User){
    this.users.push(user);
  }

}
