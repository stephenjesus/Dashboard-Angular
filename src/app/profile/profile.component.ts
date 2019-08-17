import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  defaultimg = `https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png`;

  constructor(private router: Router) {
    if (localStorage.getItem('token')) {
    } else {
      // this.router.navigate(['/pages/login-boxed']);
    }
   }

  ngOnInit() {
    // this.defaultimg = './assets/images/avatars/2.jpg';
  }

}
