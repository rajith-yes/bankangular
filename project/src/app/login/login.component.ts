import { Component } from '@angular/core';
import { Account } from '../account';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  newUser: Account = new Account();
  constructor(public ser:DataService, public router : Router, public toaster:ToastrService,private spinner: NgxSpinnerService){}
  login() {
  
    if(this.newUser.username==undefined|| this.newUser.username==" "){
      this.toaster.info("enter username!");
      return;
    }
    if(this.newUser.password==undefined||this.newUser.password==" "){
      this.toaster.info("enter password!");
      return;
    }
    this.ser.validateUser(this.newUser).subscribe(response => {
      if(response.success){
        this.toaster.success(response.message);
        this.ser.temp(this.newUser.username);
        this.newUser = new Account();
       
      
        this.router.navigate(['/home']);
      }
      else{
        this.toaster.error(response.message);
      }
    });
  }
}
