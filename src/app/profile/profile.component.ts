import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  defaultimg = `https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png`;
  firstname;
  lastname;
  email;
  mobile;
  dob;
  pincode;
  address;
  userData: any;
  constructor(private router: Router, private productService: ProductService) {
    if (localStorage.getItem('token')) {
    } else {
      // this.router.navigate(['/pages/login-boxed']);
    }
  }

  ngOnInit() {
    const loc = localStorage.getItem('token');
    this.userData = JSON.parse(loc);
    this.productService.getUserDetail({ emailId: this.userData.emailId }).subscribe((res: any) => {
      const data = res.data;
      console.log(res);
      this.firstname = data.firstName;
      this.lastname = data.lastName;
      this.email = data.emailId;
      this.dob = data.dob;
      this.pincode = data.pincode;
      this.address = data.address;
      this.mobile = data.mobile;
    });
    // this.defaultimg = './assets/images/avatars/2.jpg';
  }
  logoUpload(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (!this.validateUploadImage(e.target.result)) {
        } else {
          // const payload = new FormData();
          // payload.append('college_company_logo', event.target.files[0]);
          // payload.append('drive_id', this.driveData.drive_id);
          // this.drivesService.setLogo(payload).subscribe(response => {
          // });
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  validateUploadImage(file) {
    this.defaultimg = file;
    return true;
  }

}
