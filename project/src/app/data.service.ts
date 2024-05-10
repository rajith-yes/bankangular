import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';
import { User } from './user';
import { Eventusers } from './eventusers';
import { Myevent } from './myevent';
import { Euser } from './euser';
import { Eventdetails } from './eventdetails';
import { Settle } from './settle';
import { Settlements } from './settlements';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  settle:Settle[]=[];
  members!: any[];
  description!:string;
  amount!:number;
  splittype:string="equally";
  a:Eventusers[]=[];
  b!:any;
  tempName: any;
  gname!: string;
  gid!:number;
  myevents:Myevent[]=[];
  eventdetails:Eventdetails[]=[];
  settlements:Settlements[]=[];
  userex:any[]=[];
  eventex:any[]=[];
  ex1:number=0;
  ex2:number=0;
  tset:Settlements=new Settlements();
  constructor(private http: HttpClient) { }
  sendDataToServer(data: Account): Observable<any> {
    data.accbal = 0;
    return this.http.post('http://localhost:4200/api/register', data);
  }
  validateUser(data: Account): Observable<any> {
    return this.http.post('http://localhost:4200/api/login', data);
  }
  getUserDetail(userName: string): Observable<any> {
    return this.http.get(`http://localhost:4200/api/getUsers/${userName}`);
  }
  credytdebyt(credit: User): Observable<any> {
    return this.http.post('http://localhost:4200/api/creditdebit', credit);
  }
  getHistory(history:string): Observable<any>{
    return this.http.get(`http://localhost:4200/api/getHistory/${history}`)
  }
  getUsers():Observable<Eventusers[]>{
    return this.http.get<Eventusers[]>("http://localhost:4200/api/getAccounts");
  }
  createevent(gname:any,data:any): Observable<any>{
    return this.http.post(`http://localhost:4200/api/createevent/${gname}`,data);
  }
  getEvents(name:string):Observable<Myevent[]>{
    return this.http.get<Myevent[]>(`http://localhost:4200/api/getevents/${name}`);
  }
  getEventDetails(id:number):Observable<Eventdetails[]>{
    return this.http.get<Eventdetails[]>(`http://localhost:4200/api/geteventdetails/${id}`)
  }
  pay(gid:number,chat:Eventdetails):Observable<any>{
    return this.http.post(`http://localhost:4200/api/posteventdetails/${gid}`,chat)
  }
  eventDebit(debit:User):Observable<any>{
    return this.http.post('http://localhost:4200/api/eventdebit',debit);
  }
  getMembers(gid:number,name:any):Observable<any>{
    return this.http.get(`http://localhost:4200/api/getmembers/${gid}/${name}`)
  }
  postSettle(desc:string,amount:number,name:string,member:any):Observable<any>{
    return this.http.post<any>(`http://localhost:4200/api/postsettle/${desc}/${amount}/${name}`,member)
  }
  postSettleue(settle:Settle[],lid:number):Observable<any>{
    return this.http.post<any>(`http://localhost:4200/api/postsettleue/${lid}`,settle);
  }
  getEventMembers():Observable<any>{
    return this.http.get(`http://localhost:4200/api/getmembers`)
  }
  getSettlements(id:number,name:string):Observable<Settlements[]>{
    return this.http.get<Settlements[]>(`http://localhost:4200/api/getsettlements/${id}/${name}`)
  }
  deletesettle(id:number):Observable<any>{
    return this.http.delete(`http://localhost:4200/api/deletesettle/${id}`)
  }
  getuserexpense(gid:any,name:any):Observable<any>{
    return this.http.get(`http://localhost:4200/api/getuserexpense/${gid}/${name}`);
  }
  geteventexpense(gid:any):Observable<any>{
    return this.http.get(`http://localhost:4200/api/geteventexpense/${gid}`);
  }
  temp(data1: any) {
    this.tempName = data1;
  }
  pu(sett:Settle){
    this.settle.push(sett);
  }
}
