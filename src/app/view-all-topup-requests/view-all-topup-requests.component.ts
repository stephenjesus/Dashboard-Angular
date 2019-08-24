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
  isLoading = false;
  ngOnInit() {
    this.requestData = [{}, {}, {}];
    this.refresh();
  }
  refresh() {
    this.isLoading = true;
    this.productService.getPendingTopUps().subscribe((rs: any) => {
      this.isLoading = false;
      this.requestData = rs.data;
    });
  }
  approveRequest(emailId, requestId, status) {
    const payload = {
      emailId,
      requestId,
      status
    };
    this.isLoading = true;
    this.productService.approveTopUp(payload).subscribe((res: any) => {
    this.isLoading = false;
    this.refresh();
    });
  }
}
