import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Settlements } from '../settlements';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent {
constructor(public data:DataService,public router:Router, public toaster:ToastrService){
  
}
pay(s:Settlements){
  this.data.deletesettle(s.id).subscribe(res=>{
    if(res.success){
      this.toaster.success(res.message);
      this.data.tset=new Settlements();
      this.router.navigate(["/settlements"])
    }
  })
}
}
