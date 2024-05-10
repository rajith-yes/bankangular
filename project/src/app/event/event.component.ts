import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Eventdetails } from '../eventdetails';
import { User } from '../user';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { Account } from '../account';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  chat: Eventdetails = new Eventdetails();
  user: User = new User();
  da!: any;

  selected!: string;
  constructor(public data: DataService, public router: Router, public toaster:ToastrService) {
    this.da = new Date();
  }
  ngOnInit(): void {
    this.data.getEventDetails(this.data.gid).subscribe(response => {
      this.data.eventdetails.length = 0;
      this.data.eventdetails = response;
    });
    this.data.splittype = "equally";
    this.data.getMembers(this.data.gid, this.data.tempName).subscribe(res => {
      this.data.members = res;
    });
  }
  getDefaultDate(): string {
    return formatDate(this.da, 'dd-MM-yyyy', 'en-US');
  }

  name(s: string) {
    if (s == this.data.tempName) {
      return true;
    }
    else {
      return false;
    }
  }
  tally() {
   this.router.navigate(["/settlements"])
  }
  addex() {
    this.router.navigate(["/addexpense"])
  }
  total(){
    this.router.navigate(["/total"]);
  }


}
