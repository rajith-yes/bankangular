import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { formatDate } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  da!: any;
  accDetail: User = new User();
  userDetail!: any;

  constructor(public ser: DataService, public router: Router, public toaster:ToastrService,private spinner: NgxSpinnerService) { 
    this.da=new Date();
  }

  ngOnInit(): void {
    this.ser.getUserDetail(this.ser.tempName).subscribe(data=> {
      this.userDetail = data;
      this.accDetail.bal = this.userDetail.accbal;
      // this.userDetail.accbal=this.userDetail.toFixed(2)
    });
  }
  getDefaultDate(): string {
    return formatDate(this.da, 'dd-MM-yyyy', 'en-US');
  }
  credit() {
    if(this.accDetail.description==undefined || this.accDetail.description==" "){
      this.toaster.info("enter description");
      return;
    }
    if(this.accDetail.amount==undefined || this.accDetail.amount== 0){
      this.toaster.info("enter valied amount");
      return;
    }
   
    this.accDetail.name = this.ser.tempName;
    this.accDetail.date = this.getDefaultDate();
    this.accDetail.type = "credit";
    this.accDetail.bal = this.userDetail.accbal + this.accDetail.amount;
    this.ser.credytdebyt(this.accDetail).subscribe((data: any) => {
      if (data.success) {
        this.userDetail.accbal = this.accDetail.bal;
        this.toaster.success("amount credited successfully");
        this.accDetail=new User();
      }
    });
  }
  debit() {
    if(this.accDetail.description==undefined || this.accDetail.description==" "){
      this.toaster.info("enter description");
      return;
    }
    if(this.accDetail.amount==undefined || this.accDetail.amount== 0){
      this.toaster.info("enter valied amount");
      return;
    }
    this.accDetail.name = this.ser.tempName;
    this.accDetail.date = this.getDefaultDate();
    this.accDetail.type = "debit";
    if (this.accDetail.amount > this.accDetail.bal) {
      this.toaster.warning("insufficient balance in your account");
      this.accDetail=new User();
    }
    else {
      this.accDetail.bal = this.userDetail.accbal - this.accDetail.amount;
      this.ser.credytdebyt(this.accDetail).subscribe((data: any) => {
        if (data.success) {
          this.userDetail.accbal = this.accDetail.bal;
          this.toaster.success("amount debited successfully");
          this.accDetail=new User();
        }
      });
    }
  }
  logout(){
    this.router.navigate(["/login"]);
  }
  history(){
    this.router.navigate(["/history"]);
  }
}
