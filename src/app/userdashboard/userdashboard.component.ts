import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  balance = 0;
  request = 0;
  userData;
  AllUser;
  constructor(private router: Router , public productService: ProductService) {
    const parseData = localStorage.getItem('token');
    this.userData = JSON.parse(parseData);
  }

  ngOnInit() {
    const payload = {
      emailId : this.userData.emailId
    };
    this.productService.getCustomerDashboard(payload).subscribe((res: any) => {
      console.log(res , 'res');
      if (res && res.success) {
        this.balance = res.walletBalance;
        this.request = res.requestCount;
        this.AllUser = res.data;
      }
    });
  }

}
