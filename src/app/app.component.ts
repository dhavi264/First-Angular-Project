import { Component, VERSION } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { TransportationService } from './transportation.service';
import { User } from './user';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Lets Learn it';
  users:User[];
  username:string;
  password:string;

  constructor (private transportationService: TransportationService) {
  this.users = this.transportationService.getUser();
  }

  addUser(){
    const newUser: User = {username:this.username, password:this.password };
    this.transportationService.addUser(newUser);
  }
  
}

