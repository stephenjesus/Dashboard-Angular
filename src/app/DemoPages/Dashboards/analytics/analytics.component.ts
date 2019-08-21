import { Component, OnInit } from '@angular/core';
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
  subheading = 'This is an example dashboard created using build-in elements and components.';
  icon = 'pe-7s-graph3 icon-gradient bg-tempting-azure';
  count = 545;
  userData;
  AllUser;
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
    this.productService.getAllUsers().subscribe((res) => {
      this.AllUser = res;
    });
  }

}
