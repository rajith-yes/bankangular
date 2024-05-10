import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Eventdetails } from '../eventdetails';
import { User } from '../user';
import { formatDate } from '@angular/common';
import { Settle } from '../settle';
import { EMPTY } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {
  chat: Eventdetails = new Eventdetails();


  constructor(public data: DataService, public router: Router, public toaster:ToastrService) {

  }
  ngOnInit(): void {

  }

  back() {
    this.router.navigate(["/event"])
  }
  equally() {
    if (this.data.description == undefined || this.data.description == "" || this.data.description == " ") {
      this.toaster.info("enter description!");
      return;
    }
    if (this.data.amount == undefined || this.data.amount == null || this.data.amount == 0) {
      this.toaster.info("enter amount!");
      return;
    }
    this.router.navigate(["/split"])

  }

  pay() {
    if (this.data.description == undefined || this.data.description == "") {
      this.toaster.info("enter description!");
      return;
    }

    if (this.data.amount == undefined || this.data.amount == 0) {
      this.toaster.info("enter amount!");
      return;
    }

    this.chat.amount = this.data.amount;
    this.chat.description = this.data.description;

    this.chat.username = this.data.tempName;
    this.data.pay(this.data.gid, this.chat).subscribe(response => {
      if (response.success) {
        
        this.data.eventdetails.push(this.chat);


        if (this.data.splittype == "equally") {
          this.data.members.forEach(element => {
            if (this.data.tempName == element.members) {
              const index = this.data.members.findIndex(elemen => elemen.members == element.members);
              this.chat.amount = this.chat.amount / this.data.members.length;
              this.data.members.splice(index, 1);

              this.data.postSettle(this.chat.description, this.chat.amount, this.data.tempName, this.data.members).subscribe(resp => {
                if (resp.success) {
                 
                  this.chat = new Eventdetails();
                  this.data.description = "";
                  this.data.amount = 0;
                  this.data.members.length = 0;
                  this.data.getMembers(this.data.gid, this.data.tempName).subscribe(res => {
                    this.data.members = res;
                  });
                }
              });

            }
          });
          this.data.splittype = "equally";
          this.toaster.success(response.message+" "+"equally");
        }

        if (this.data.splittype == "unequally") {
          this.data.settle.forEach(element => {
            if (this.data.tempName == element.member) {
              const index = this.data.settle.findIndex(elemen => elemen.member == element.member);
              this.data.settle.splice(index, 1);

              this.data.postSettleue(this.data.settle, this.data.gid).subscribe(resp => {
                if (resp.success) {
                  this.chat = new Eventdetails();
                  this.data.description = "";
                  this.data.amount = 0;
                  this.data.members.length = 0;
                  this.data.getMembers(this.data.gid, this.data.tempName).subscribe(res => {
                    this.data.members = res;
                  });


                }
              });
            }
          });
          this.data.splittype = "equally";
          this.toaster.success(response.message+" "+"unequally");
        }

        if (this.data.splittype == "percentage") {
          this.data.settle.forEach(element => {
            if (this.data.tempName == element.member) {
              const index = this.data.settle.findIndex(elemen => elemen.member == element.member);
              this.data.settle.splice(index, 1);

              this.data.postSettleue(this.data.settle, this.data.gid).subscribe(resp => {
                if (resp.success) {
                  
                  this.chat = new Eventdetails();
                  this.data.description = "";
                  this.data.amount = 0;
                  this.data.members.length = 0;
                  this.data.getMembers(this.data.gid, this.data.tempName).subscribe(res => {
                    this.data.members = res;
                  });


                }
              });
            }
          });
          this.data.splittype = "equally";
          this.toaster.success(response.message+" "+"by"+" "+"percentage");
        }

      }
    });






  }
}