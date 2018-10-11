import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: '../views/login.html',
})

export class LoginComponent {

  constructor(private route: Router) {
  }
  error: String;
  /* if we need to get inputs values directly we can use next variables
  email: String;
  password: String;*/

  validateUserData(form) {
    const {email = '', password = ''} = form;
    // I use very primitive validation, but it's can be any difficult we need
    (email.trim().length < 6 || password.trim().length < 3) ?
      this.error = 'You entered incorrect data' :
      this.userLogin({email, password});
  }

  userLogin(userData) {
    this.route.navigateByUrl('/main');
  }

  resetError() {
    this.error = '';
  }
}
