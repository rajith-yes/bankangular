import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history!: any[];
  constructor(public ser: DataService, public router: Router) { }
  ngOnInit(): void {
    this.ser.getHistory(this.ser.tempName).subscribe((data: any) => {
      this.history = data.reverse();
      if (this.history.length === 0) {
        const zeroElement = document.getElementById("one");
        if (zeroElement) {
          zeroElement.style.display = "none";
        }
      }
      if (this.history.length == 0) {
        const oneElement = document.getElementById("zero");
        if (oneElement) {
          oneElement.style.display = "block";
        }
      }
    });
  }
  back() {
    this.router.navigate(["/home"]);
  }
}
