import { Component } from '@angular/core';
import { Account } from '../account';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  newUser: Account = new Account();
  password!:string;
  constructor(private ser: DataService, public router: Router, public toaster:ToastrService) {
  }
  register() {
    if (this.newUser.username == " " || this.newUser.username == undefined) {
      this.toaster.info("enter username!");
      return;
    }
    if (this.newUser.password.length < 6 || this.newUser.password == undefined) {
      this.toaster.info("password must be in 6 characters");
      return;
    }
    if(this.newUser.password!=this.password){
      this.toaster.info("confirm password mismatch!");
      this.newUser.password="";
      this.password="";
      return;
    }
    else {
      this.ser.sendDataToServer(this.newUser).subscribe(response => {
        if (response.success) {
          this.toaster.success(response.message);
          this.router.navigate(['/login']);
        }
        if (response.err) {
          this.toaster.error(response.error);
        }
      });
    }
  }
}







