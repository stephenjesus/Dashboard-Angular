import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  defaultimg = '`https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png`';
  firstname;
  lastname;
  email;
  mobile;
  dob;
  pincode;
  address;
  userData;

  constructor(private router: Router, private productService: ProductService, private storage: AngularFireStorage) {
    if (localStorage.getItem('token')) {
      this.userData = JSON.parse(localStorage.getItem('item'));
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
      this.pincode = data.postalPincode;
      this.address = data.address;
      this.mobile = data.MobileNumber;
      this.defaultimg = data.profilePic;
    });
    // this.defaultimg = './assets/images/avatars/2.jpg';
  }
  logoUpload(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const filePath = 'usersList' + '/' + this.userData.emailId.split('@')[0];
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);
      task.then((a: UploadTaskSnapshot) => {
        a.ref.getDownloadURL().then((value: any) => {
          console.log(value);
          this.defaultimg = value;
          const payload = {
            emailId: this.userData.emailId,
            data: {
              profilePic: value
            }
          };
          this.productService.updateUserProfile(payload).subscribe((data: any) => {

          });
        });


      }).catch((err: any) => {
        console.log(err);
      });
    }
  }


  updateUserProfile() {
    const payload = {
      emailId: this.userData.emailId,
      data: {
        firstName: this.firstname,
        lastName: this.lastname,
        dob: this.dob,
        postalPincode: this.pincode,
        address: this.address,
        MobileNumber: this.mobile
      }
    };
    this.productService.updateUserProfile(payload).subscribe((data: any) => {

    });
  }

}
