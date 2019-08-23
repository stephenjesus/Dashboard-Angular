import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  curlForm: any;
  userData: any;
  constructor(private router: Router, private productService: ProductService) {
    if (localStorage.getItem('token')) {
    } else {
      // this.router.navigate(['/pages/login-boxed']);
    }
  }

  ngOnInit() {
    const parseData = localStorage.getItem('token');
    this.userData = JSON.parse(parseData);
    this.curlForm = new FormGroup({
      miniLightCommercialVehicle: new FormControl(null, Validators.required),
      // servicetype: new FormControl(null, Validators.required),
      lightCommercialVehicle: new FormControl(null),
      threeAxleCommercialVehicles: new FormControl(null, Validators.required),
      busTruck: new FormControl(null, Validators.required),
      fourToSixAxle: new FormControl(null, Validators.required),
      sevenPlusAxle: new FormControl(null, Validators.required),
      HCM_EME: new FormControl(null, Validators.required),
      remarks: new FormControl(null, Validators.required)
    });
  }
  touch() {
    this.curlForm.get('miniLightCommercialVehicle').markAsTouched();
    // this.curlForm.get('servicetype').markAsTouched();
    this.curlForm.get('lightCommercialVehicle').markAsTouched();
    this.curlForm.get('threeAxleCommercialVehicles').markAsTouched();
    this.curlForm.get('fourToSixAxle').markAsTouched();
    this.curlForm.get('sevenPlusAxle').markAsTouched();
    this.curlForm.get('HCM_EME').markAsTouched();
    this.curlForm.get('remarks').markAsTouched();

  }

  onSubmit() {
    // This value is required
    this.touch();
    if (this.curlForm.valid) {
      const payload = {
        emailId: this.userData.emailId,
        data: {
          miniLightCommercialVehicle: this.curlForm.get('miniLightCommercialVehicle').value,
          lightCommercialVehicle: this.curlForm.get('lightCommercialVehicle').value,
          threeAxleCommercialVehicles: this.curlForm.get('threeAxleCommercialVehicles').value,
          fourToSixAxle: this.curlForm.get('fourToSixAxle').value,
          sevenPlusAxle: this.curlForm.get('sevenPlusAxle').value,
          HCM_EME: this.curlForm.get('HCM_EME').value,
          remarks: this.curlForm.get('remarks').value
        }
      };
      console.log('payload', payload);
      this.productService.addMakeOrder(payload).subscribe((res123: any) => {
        console.log(res123);
        this.curlForm.get('miniLightCommercialVehicle').setValue(null);
        // this.curlForm.get('servicetype').setValue(null);
        this.curlForm.get('lightCommercialVehicle').setValue(null);
        this.curlForm.get('threeAxleCommercialVehicles').setValue(null);
        this.curlForm.get('fourToSixAxle').setValue(null);
        this.curlForm.get('sevenPlusAxle').setValue(null);
        this.curlForm.get('HCM_EME').setValue(null);
        this.curlForm.get('remarks').setValue(null);
      });
    } else {
      console.log(this.curlForm.valid, 'valid');
    }
  }

}
