import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-login-boxed',
  templateUrl: './login-boxed.component.html',
  styleUrls: [`./login.css`]
})
export class LoginBoxedComponent implements OnInit {
  email;
  password;
  errMsg;
  constructor(private router: Router , public productService: ProductService) {
  }
  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
  }
  login() {
    const payload = {
      emailId : this.email,
      password: this.password
    };
    this.productService.login(payload).subscribe((res: any) => {
      if (res && res.success) {
        localStorage.setItem('token' , JSON.stringify(res.data));
        this.router.navigate(['/']);
      } else {
        this.errMsg = 'Enter Valid Email or Password';
      }
      console.log(res , 'res');
    });

  }
}
