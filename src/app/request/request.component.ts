import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('growl') growl;
  isLoading = false;
  constructor(private router: Router, private productService: ProductService) {
    if (localStorage.getItem('token')) {
    } else {
      this.router.navigate(['/pages/login-boxed']);
    }
  }

  ngOnInit() {
    const parseData = localStorage.getItem('token');
    this.userData = JSON.parse(parseData);
    this.curlForm = new FormGroup({
      miniLightCommercialVehicle: new FormControl(null),
      lightCommercialVehicle: new FormControl(null),
      threeAxleCommercialVehicles: new FormControl(null),
      busTruck: new FormControl(null),
      fourToSixAxle: new FormControl(null),
      sevenPlusAxle: new FormControl(null),
      HCM_EME: new FormControl(null),
      remarks: new FormControl(null)
    });
  }
  touch() {
    this.curlForm.get('miniLightCommercialVehicle').markAsTouched();
    this.curlForm.get('lightCommercialVehicle').markAsTouched();
    this.curlForm.get('threeAxleCommercialVehicles').markAsTouched();
    this.curlForm.get('fourToSixAxle').markAsTouched();
    this.curlForm.get('sevenPlusAxle').markAsTouched();
    this.curlForm.get('HCM_EME').markAsTouched();
    this.curlForm.get('remarks').markAsTouched();

  }

  onSubmit() {
    this.isLoading = true;
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
          remarks: this.curlForm.get('remarks').valuez
        }
      };
      this.productService.addMakeOrder(payload).subscribe((res123: any) => {
        if (res123) {
          this.isLoading = false;
          this.curlForm.reset();
          setTimeout(() => {
            this.growl.myFunction({
              severity: 'success',
              detail: 'Sucessfully Added!',
              summary: 'Your Topup Request Added'
            });
          }, 200);
        }
      });
    } else {
      this.isLoading = false;
      console.log(this.curlForm.valid, 'in valid');
    }
  }

}
