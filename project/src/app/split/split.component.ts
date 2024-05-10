import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css']
})
export class SplitComponent implements OnInit{
  split:any;
  
  
  constructor(public data : DataService, public router:Router){}
  ngOnInit(): void {
    this.split=(this.data.amount/this.data.members.length).toFixed(2);
    }

  back(){
  this.router.navigate(["/addexpense"]);
  }
  
  unequally(){
    
    this.router.navigate(["/unequally"]);
  }
  percentage(){
    this.router.navigate(["/percentage"]);
  }
  done(){
    this.data.splittype="equally";
    this.router.navigate(["/addexpense"]);
  }
}
