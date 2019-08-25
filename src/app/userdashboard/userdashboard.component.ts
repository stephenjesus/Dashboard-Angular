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
  isLoading = true;
  formStatus = 'Not Submitted';
  constructor(private router: Router , public productService: ProductService) {
    const parseData = localStorage.getItem('token');
    this.userData = JSON.parse(parseData);
    if (this.userData && this.userData.status === 1) {
      this.formStatus = 'Pending';
    } else if (this.userData && this.userData.status === 1) {
      this.formStatus = 'Completed';
    }
  }

  ngOnInit() {
    this.isLoading = true;
    const payload = {
      emailId : this.userData.emailId
    };
    this.productService.getCustomerDashboard(payload).subscribe((res: any) => {
      if (res && res.success) {
        this.isLoading = false;
        this.balance = res.walletBalance;
        this.request = res.requestCount;
        this.AllUser = res.data;
      }
    });
  }

}
