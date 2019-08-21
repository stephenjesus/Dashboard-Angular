import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})
export class TopupComponent implements OnInit {
  curlForm: FormGroup;
  userData;
  @ViewChild('growl') growl;


  constructor(private router: Router , public productService: ProductService) {
    if (localStorage.getItem('token')) {
    } else {
      this.router.navigate(['/pages/login-boxed']);
    }
   }

  ngOnInit() {
    const parseData = localStorage.getItem('token');
    this.userData = JSON.parse(parseData);
    this.curlForm = new FormGroup({
      paytype: new FormControl(null, Validators.required),
      // servicetype: new FormControl(null, Validators.required),
      remarks: new FormControl(null),
      amount: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      refno: new FormControl(null, Validators.required),
    });
  }
  touch() {
    this.curlForm.get('paytype').markAsTouched();
    this.curlForm.get('remarks').markAsTouched();
    this.curlForm.get('amount').markAsTouched();
    this.curlForm.get('date').markAsTouched();
    this.curlForm.get('refno').markAsTouched();
  }

  onSubmit() {
    // This value is required
    // {
    //   "emailId": "mlvnhari@gmail.com",
    //   "data": {
    //   "paymentMethod":"credit_card",
    //   "bankTxnId":"BANK-Ref",
    //   "dateOfDeposit":"27/03/2019",
    //   "amount":22000,
    //   "remarks":"Requesting for something Bad"
    //   }
    //   }
    this.touch();
    if (this.curlForm.valid) {
      const payload = {
        emailId: this.userData.emailId,
        data : {
          paymentMethod: this.curlForm.get('paytype').value,
          bankTxnId: this.curlForm.get('refno').value,
          dateOfDeposit: this.curlForm.get('date').value,
          amount: this.curlForm.get('amount').value,
          remarks: this.curlForm.get('remarks').value
      }
    };
      this.productService.addTopUpRequest(payload).subscribe((res: any) => {
        if (res && res.status === 200) {
          this.growl.myFunction({
            severity: 'success',
            detail: 'Sucessfully Added!',
            summary: 'Your Topup Request Added'
          });
          this.curlForm.reset();
        } 
      });
    } else {
      this.growl.myFunction({
        severity: 'error',
        detail: 'Validation Failed!',
        summary: 'Enter all required fields'
      });
      console.log(this.curlForm.valid, 'valid');
    }
  }
}
