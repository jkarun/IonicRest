import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any; 
  constructor(public navCtrl: NavController, private remoteService : RemoteServiceProvider ) {
    this.getUsers();
  }
  
    getUsers() {
    this.remoteService.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
}
