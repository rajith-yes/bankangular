import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  constructor(public data:DataService,public router:Router){

  }
  ngOnInit(): void {
    this.data.ex1=0;
    this.data.ex2=0;
    this.data.userex.length=0;
    this.data.eventex.length=0;
    this.data.getuserexpense(this.data.gid,this.data.tempName).subscribe(response=>{
      this.data.userex=response;
      for(let i=0;i<this.data.userex.length;i++){
        this.data.ex1=this.data.ex1+this.data.userex[i].amount;
      }
    });

    this.data.geteventexpense(this.data.gid).subscribe(res=>{
      this.data.eventex=res;
      for(let i=0;i<this.data.eventex.length;i++){
        this.data.ex2=this.data.ex2+this.data.eventex[i].amount;
      }
    });
  }

}
