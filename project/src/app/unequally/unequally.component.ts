import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Settle } from '../settle';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-unequally',
  templateUrl: './unequally.component.html',
  styleUrls: ['./unequally.component.css']
})
export class UnequallyComponent implements OnInit {
  am:number[]=[];
  n1:number=0;
  n2!:number;
  sett:Settle=new Settle();
  constructor(public data : DataService, public router:Router,public toaster:ToastrService){}
  ngOnInit(): void {
    
    this.data.settle.length=0;
    for(let k=0;k<this.data.members.length;k++){
      this.sett=new Settle();
    this.sett.member=this.data.members[k].members;
    this.sett.payfor=this.data.tempName;
    this.sett.description="hello";
    this.sett.amount=10;
    this.am[k]=0;
    this.data.pu(this.sett);
    
    this.n2=this.data.amount;
    }
  }

  back(){
  this.router.navigate(["/addexpense"])
  }
  percentage(){
    this.router.navigate(["/percentage"]);
  }
  equal(){
    this.router.navigate(["/split"])
  }
  done(){
    if(this.data.amount!==this.n1){
      this.toaster.info("enter valied split payments!");
      return;
    }
    this.data.splittype="unequally";
    for(let i=0;i<this.data.settle.length;i++){
      this.data.settle[i].description=this.data.description;
      this.data.settle[i].amount=this.am[i];
      
    }
  this.router.navigate(['/addexpense']);
  }
 change(){
  this.n2=0;
  this.n1=0;
  for(let i=0;i<this.am.length;i++){
    this.n1=this.n1+this.am[i];
  }
  this.n2=this.data.amount-this.n1;
 }

}
