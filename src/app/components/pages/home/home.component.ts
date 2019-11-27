import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {log} from 'util';
import {LoginService} from '../../../auth/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: firebase.User;

  constructor(
    private afAuth: AngularFireAuth,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.afAuth.authState
      .subscribe( user => {
        console.log(user);
        this.user = user;
    });
  }

}
