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
constructor(private router: Router , public productService: ProductService) {
  if (localStorage.getItem('token')) {
  } else {
    // this.router.navigate(['/pages/login-boxed']);
  }
}
  ngOnInit() {
    this.productService.getAllUsers().subscribe((res) => {
      console.log(res, 'res');
    });
  }

}
