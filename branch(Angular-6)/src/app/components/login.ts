import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: '../views/login.html',
  styleUrls: []
})

export class LoginComponent {
  error: String;

  constructor(private route: Router) {
  }

  validateUserData(form) {
    const {email = '', password = ''} = form;
    (email.trim().length < 6 || password.trim().length < 3) ?
      this.error = 'You have entered incorrect data' :
      this.userLogin({email, password});
  }

  userLogin(userData) {
    this.route.navigateByUrl('/main');
  }

  clearError() {
    this.error = '';
  }
}
