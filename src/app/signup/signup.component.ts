import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { resolve } from 'url';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  curlForm: FormGroup;
  vcate: any;
  userData: any;
  vrc: any;
  addressproof: any;
  idproof: any;
  @ViewChild('growl') growl;
  isLoading = false;
  constructor(private productService: ProductService, private storage: AngularFireStorage) {
    this.userData = JSON.parse(localStorage.getItem('token'));
  }

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
      vrc: new FormControl(null, Validators.required),
      idproof: new FormControl(null, Validators.required),
      addressproof: new FormControl(null, Validators.required),
      // fasttag: new FormControl(null, Validators.required),
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
    this.curlForm.get('idproof').markAsTouched();
    this.curlForm.get('addressproof').markAsTouched();
    // this.curlForm.get('fasttag').markAsTouched();
  }
  onSubmit() {
    this.uploadVehicleRC();
    // This value is required
    this.touch();
    if (this.curlForm.valid) {
      console.log(this.curlForm.valid, 'valid');
    } else {
      console.log(this.curlForm.valid, 'valid');
    }


  }
  uploadBigFormData() {
    this.isLoading = true;
    const payload = {
      emailId: this.userData.emailId,
      formData: {
        firstName: this.curlForm.get('firstname').value,
        lastName: this.curlForm.get('lastname').value,
        MobileNumber: this.curlForm.get('mobile').value,
        emailId: this.userData.emailId,
        dob: this.curlForm.get('dob').value,
        fullAddress: this.curlForm.get('address').value,
        postalPincode: this.curlForm.get('pincode').value,
        vehicleNumber: this.curlForm.get('vno').value,
        chassisNumber: this.curlForm.get('cno').value,
        engineNumber: this.curlForm.get('eno').value,
        vehicleType: this.curlForm.get('vtype').value,
        vehicleRC: 'linktourl',
        idProof: 'linktourl',
        addressProof: 'linktoURL',
      }
    };
    if (this.curlForm.valid) {
      this.uploadVehicleRC().then((urlRC: any) => {
        this.uploadIdProof().then((urlId: any) => {
          this.uploadAddressProof().then((urlAddress: any) => {
            payload.formData.vehicleRC = urlRC.data;
            payload.formData.idProof = urlId.data;
            payload.formData.addressProof = urlAddress.data;
            this.productService.provideBigFormData(payload).subscribe((res: any) => {
              console.log('Success');
              this.isLoading = false;
              this.curlForm.reset();
              setTimeout(() => {
                this.growl.myFunction({
                  severity: 'success',
                  detail: 'Successfully!',
                  summary: 'Your Form Updated'
                });
              }, 200);
            }, (err: any) => {
              this.isLoading = false;
              console.log(err, 'err');
            });
          });
        });
      });
    } else {
      this.isLoading = false;
      this.growl.myFunction({
        severity: 'error',
        detail: 'Validation Failed!',
        summary: 'Enter all required fields'
      });
    }
 
    console.log('sds', this.curlForm.get('addressproof').value);
  }

  uploadIdProof() {
    return new Promise((resolved, rejected) => {
      const file = this.curlForm.get('vrc').value;
      const filePath = 'usersList' + '/idProof/' + this.userData.emailId.split('@')[0];
      const ref = this.storage.ref(filePath);
      const task = ref.put(this.vrc);
      task.then((res: UploadTaskSnapshot) => {
        res.ref.getDownloadURL().then((url: any) => {
          resolved({
            data: url
          });
        });
      });
    });
  }
  uploadVehicleRC() {
    return new Promise((resolved, rejected) => {
      const file = this.curlForm.get('vrc').value;
      const filePath = 'usersList' + '/vehicleRC/' + this.userData.emailId.split('@')[0];
      const ref = this.storage.ref(filePath);
      const task = ref.put(this.vrc);
      task.then((res: UploadTaskSnapshot) => {
        res.ref.getDownloadURL().then((url: any) => {
          resolved({
            data: url
          });
        });
      });
    });
  }
  uploadAddressProof() {
    return new Promise((resolved, rejected) => {
      const file = this.curlForm.get('vrc').value;
      const filePath = 'usersList' + '/addressProof/' + this.userData.emailId.split('@')[0];
      const ref = this.storage.ref(filePath);
      const task = ref.put(this.vrc);
      task.then((res: UploadTaskSnapshot) => {
        res.ref.getDownloadURL().then((url: any) => {
          resolved({
            data: url
          });
        });
      });
    });
  }
  imageUpload(event, type) {
    const file = event.target.files[0];
    switch (type) {
      case 'vrc':
        this.vrc = file;
        break;
      case 'addressproof':
        this.addressproof = file;
        break;
      case 'idproof':
        this.idproof = file;
        break;
    }
  }
}
