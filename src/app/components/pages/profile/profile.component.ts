import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
  ) { }

  user: firebase.User;

  number = new FormControl('', [Validators.required, Validators.pattern(/(\(?[0-9]{3}\)?-?\s?[0-9]{3}-?[0-9]{4})/)]);

  ngOnInit() {
    this.afAuth.authState
      .subscribe( user => {
        this.user = user;
      });
  }

  getErrorMessage() {
    return this. number.hasError('required') ? 'You must enter a number' :
      this.number.hasError('email') ? 'Not a valid phone number' :
        '';
  }

}
