import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-order-requests',
  templateUrl: './view-all-order-requests.component.html',
  styleUrls: ['./view-all-order-requests.component.css']
})
export class ViewAllOrderRequestsComponent implements OnInit {

  requestData = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.requestData = [];
    this.refresh();
  }
  refresh() {
    this.productService.getOrderDetails().subscribe((res: any) => {
      this.requestData = res.data;
    });
  }

}
