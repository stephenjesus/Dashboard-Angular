import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.sass']
})
export class RequestComponent implements OnInit {

  constructor(private router: Router) {
    if (localStorage.getItem('token')) {
    } else {
      // this.router.navigate(['/pages/login-boxed']);
    }
   }

  ngOnInit() {
  }

}
