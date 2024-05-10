import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Myevent } from '../myevent';


@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.component.html',
  styleUrls: ['./myevent.component.css']
})
export class MyeventComponent implements OnInit {
  constructor(public data:DataService,public router:Router){}
  ngOnInit(): void {
   this.data.getEvents(this.data.tempName).subscribe(response=>{
    this.data.myevents=response;
   });
  }
 event(s:Myevent){
  this.data.gname=s.leader.eventname;
  this.data.gid=s.leader.id;
  this.data.getEventDetails(s.leader.id).subscribe(response=>{
    this.data.eventdetails=response;
    this.router.navigate(['/event']);
  });
 }
 
  }
