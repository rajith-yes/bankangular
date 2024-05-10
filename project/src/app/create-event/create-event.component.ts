import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { DataService } from '../data.service';
import { Eventusers } from '../eventusers';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  allusers!: Eventusers[];
  searchText!:string;
 

  constructor(public data: DataService, public router: Router, public toaster:ToastrService) { }
  ngOnInit(): void {
    this.data.gname="";
    this.data.getUsers().subscribe(users => {
      this.allusers = users;
      this.data.a.length = 0;
      this.allusers.forEach(element => {
        element.checked = false;
        if (this.data.tempName == element.username) {
          this.data.a.push(element);
          const index = this.allusers.findIndex(elemen => elemen.username == this.data.tempName);
          this.allusers.splice(index, 1);
        }
      })
    });
  }

  onCheckboxChange(event: any, checkbox: any) {
    checkbox.checked = event.target.checked;
    
    if (checkbox.checked) {
      this.data.a.push(checkbox);
    }
    if (!checkbox.checked) {
      this.data.a.forEach(element => {
        if (checkbox.username == element.username) {
          const index = this.data.a.findIndex(elemen => elemen.username == element.username);
          this.data.a.splice(index, 1);
        }

      })
    }
  }

  create() {

    if (this.data.a.length <= 1) {
      this.toaster.info("add atleast one person");
      return;
    }

    if (this.data.gname == undefined || this.data.gname == "") {
      this.toaster.info("enter group name");
      return;
    }

    this.data.createevent(this.data.gname, this.data.a).subscribe(response => {
      if (response) {
        this.data.a.forEach(element => {
          element.gname = this.data.gname;
        });
        this.data.b=response;
        this.data.eventdetails.length=0;
        this.data.gid=response.id;
        
        this.toaster.success("event created successfully");
        this.router.navigate(["/event"]);
      }
    });
  }



}
