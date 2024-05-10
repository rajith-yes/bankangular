import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Settle } from '../settle';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent implements OnInit{
  am:number[]=[];
  n1:number=0;
  n2!:number;
  percentage:number=100;
  sett:Settle=new Settle();
  constructor(public data : DataService, public router:Router, public toaster:ToastrService){}
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
    this.n2=this.percentage;
  }
}

  back(){
  this.router.navigate(["/addexpense"])
  }
  unequally(){
    this.router.navigate(["/unequally"])
  }
  equal(){
    this.router.navigate(["/split"])
  }
  change(){
    this.n2=0;
    this.n1=0;
    for(let i=0;i<this.am.length;i++){
      this.n1=this.n1+this.am[i];
    }
    this.n2=this.percentage-this.n1;
   }
  done(){
    if(this.percentage!==this.n1){
      this.toaster.warning("enter valied percentage payments!(100%)");
      return;
    }
    this.data.splittype="percentage";
    for(let i=0;i<this.data.settle.length;i++){
      this.data.settle[i].description=this.data.description;
      this.data.settle[i].amount=this.data.amount/this.percentage*this.am[i];
    }
  this.router.navigate(['/addexpense']);
    
  }
}
