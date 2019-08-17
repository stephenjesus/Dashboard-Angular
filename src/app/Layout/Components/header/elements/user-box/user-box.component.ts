import {Component, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.css']
})
export class UserBoxComponent implements OnInit {
  defaultimg = `https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png`;

  constructor( private router: Router, public globals: ThemeOptions) {
  }

  ngOnInit() {
  }
  logout() {
    this.router.navigate(['/pages/login-boxed']);
  }
  goprofile() {
    this.router.navigate(['/profile']);
  }
}
