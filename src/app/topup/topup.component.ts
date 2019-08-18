import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})
export class TopupComponent implements OnInit {
  curlForm: FormGroup;

  constructor(private router: Router) {
    if (localStorage.getItem('token')) {
    } else {
      // this.router.navigate(['/pages/login-boxed']);
    }
   }

  ngOnInit() {
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
    // this.curlForm.get('servicetype').markAsTouched();
    this.curlForm.get('remarks').markAsTouched();
    this.curlForm.get('amount').markAsTouched();
    this.curlForm.get('date').markAsTouched();
    this.curlForm.get('refno').markAsTouched();
  }

  onSubmit() {
    // This value is required
    this.touch();
    if (this.curlForm.valid) {
      console.log(this.curlForm.valid, 'valid');
    } else {
      console.log(this.curlForm.valid, 'valid');
    }
  }
}
