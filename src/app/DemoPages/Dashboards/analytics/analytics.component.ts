import { Component, OnInit, ViewChild } from '@angular/core';
import {Color} from 'ng2-charts/ng2-charts';
import { Router } from '@angular/router';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.css']
})
export class AnalyticsComponent implements OnInit {

  heading = 'Analytics Dashboard';
  @ViewChild('growl') growl;
  defaultimg = `https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png`;

  subheading = 'This is an example dashboard created using build-in elements and components.';
  icon = 'pe-7s-graph3 icon-gradient bg-tempting-azure';
  count = 545;
  userData;
  AllUser;
  email = `stephenprakash45@gmail.com`;
constructor(private router: Router , public productService: ProductService) {
  if (localStorage.getItem('token')) {
    const parseData = localStorage.getItem('token');
    this.userData = JSON.parse(parseData);
    if (this.userData && this.userData.userType === 0) {
    } else {
      this.router.navigate(['userdashboard']);
    }
    } else {
      this.router.navigate(['/pages/login-boxed']);
    }
}
  ngOnInit() {
  this.getall();
  }
  getall() {
    this.productService.getAllUsers().subscribe((res) => {
      this.AllUser = res;
    });
  }
  verify(type) {
    let payload;
    if (type === 'v') {
       payload = {
        emailId : this.email,
        status : 2
      };
    } else if (type === 'r') {
       payload = {
        emailId : this.email,
        status : 3
      };
    }
    if (this.email) {
      this.productService.approveUserRequest(payload).subscribe((res: any) => {
        if (res && res.success) {
          if (type === 'r') {
            this.growl.myFunction({
              severity: 'success',
              detail: 'Successfully',
              summary: 'User Rejected'
            });
          } else {
            this.growl.myFunction({
              severity: 'success',
              detail: 'Successfully',
              summary: 'User Approved'
            });
          }
          this.getall();
        } else {
          this.growl.myFunction({
            severity: 'error',
            detail: 'User not exists!',
            summary: 'User not found'
          });
        }
      });
    }
  }
}
