import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-topup-requests',
  templateUrl: './view-all-topup-requests.component.html',
  styleUrls: ['./view-all-topup-requests.component.css']
})
export class ViewAllTopupRequestsComponent implements OnInit {
  requestData = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.requestData = [{}, {}, {}];
    this.refresh();
  }
  refresh() {
    this.productService.getPendingTopUps().subscribe((rs: any) => {
      this.requestData = rs.data;
    });
  }
  approveRequest(emailId, requestId, status) {
    const payload = {
      emailId,
      requestId,
      status
    };
    this.productService.approveTopUp(payload).subscribe((res: any) => {
    this.refresh();
    });
  }
}
