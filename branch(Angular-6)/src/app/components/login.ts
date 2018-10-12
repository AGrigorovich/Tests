import {Component} from '@angular/core';
import {Router} from '@angular/router';

import * as firebase from 'firebase';
import {config} from '../constants/firebaseConfig';

@Component({
  selector: 'login',
  templateUrl: '../views/login.html',
})

export class LoginComponent {

  constructor(private route: Router) {
    // firebase.initializeApp() can throw an error that's why I use this check. Another way - use here try-catch construction
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  error: String = '';
  email: String = '';
  password: String = '';

  validateUserData() {
    // I use very primitive validation, but it's can be any difficult level we need
    (this.email.trim().length < 6 || this.password.trim().length < 6) ?
      this.error = 'You entered incorrect data' :
      this.error = '';
  }

  userLogin() {
    this.validateUserData();
    if (!this.error) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => this.route.navigateByUrl('/main'))
        .catch((er) => this.error = er.message);
    }
  }

  userSignin() {
    this.validateUserData();
    if (!this.error) {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => this.route.navigateByUrl('/main'))
        .catch((er) => this.error = er.message);
    }
  }

  resetError() {
    this.error = '';
  }
}
