import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  curlForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.curlForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      mobile: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      pincode: new FormControl(null, Validators.required),
      vno: new FormControl(null, Validators.required),
      cno: new FormControl(null, Validators.required),
      eno: new FormControl(null, Validators.required),
      vtype: new FormControl(null, Validators.required),
      vcate: new FormControl(null, Validators.required),
      vrc: new FormControl(null, Validators.required),
      idproof: new FormControl(null, Validators.required),
      addressproof: new FormControl(null, Validators.required),
      fasttag: new FormControl(null, Validators.required),
    });
  }
  touch() {
    this.curlForm.get('firstname').markAsTouched();
    this.curlForm.get('lastname').markAsTouched();
    this.curlForm.get('mobile').markAsTouched();
    this.curlForm.get('email').markAsTouched();
    this.curlForm.get('dob').markAsTouched();
    this.curlForm.get('address').markAsTouched();
    this.curlForm.get('pincode').markAsTouched();
    this.curlForm.get('vno').markAsTouched();
    this.curlForm.get('cno').markAsTouched();
    this.curlForm.get('eno').markAsTouched();
    this.curlForm.get('vtype').markAsTouched();
    this.curlForm.get('vrc').markAsTouched();
    this.curlForm.get('vcate').markAsTouched();
    this.curlForm.get('idproof').markAsTouched();
    this.curlForm.get('addressproof').markAsTouched();
    this.curlForm.get('fasttag').markAsTouched();
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
