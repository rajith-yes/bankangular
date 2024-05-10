import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Settlements } from '../settlements';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {
  constructor(public data:DataService, public router:Router){}
  ngOnInit(): void {
    this.data.getSettlements(this.data.gid,this.data.tempName).subscribe(response => {
      this.data.settlements=response;
      this.data.tset=new Settlements();
    })
  }
  settle(s:Settlements,i:number){
    this.data.tset.id=s.id;
    this.data.tset.member=s.member;
    this.data.tset.description=s.description;
    this.data.tset.amount=s.amount;
    this.data.tset.payfor=s.payfor;
    this.data.tset.createdAt=s.createdAt;
    this.data.tset.updatedAt=s.updatedAt;
    this.data.tset.leaderid=s.leaderid;
    this.router.navigate(["/finish"]);
  }
}
