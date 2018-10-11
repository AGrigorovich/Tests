import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'main-page',
  templateUrl: '../views/mainPage.html',
})

export class MainPageComponent {
  constructor(private route: Router) {
  }

  logOut() {
    this.route.navigateByUrl('/');
  }
}
