import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { MyeventComponent } from './myevent/myevent.component';
import { EventComponent } from './event/event.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { splitNsName } from '@angular/compiler';
import { SplitComponent } from './split/split.component';
import { UnequallyComponent } from './unequally/unequally.component';
import { PercentageComponent } from './percentage/percentage.component';
import { SettlementComponent } from './settlement/settlement.component';
import { FinishComponent } from './finish/finish.component';
import { TotalComponent } from './total/total.component';


const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "history", component: HistoryComponent },
  { path: "createevent", component: CreateEventComponent },
  { path: "myevent", component: MyeventComponent },
  { path: "event", component: EventComponent },
  {path:"addexpense", component:AddexpenseComponent},
  {path:"split", component:SplitComponent},
  {path:"unequally",component:UnequallyComponent},
  {path:"percentage",component:PercentageComponent},
  {path:"settlements",component:SettlementComponent},
  {path:"finish",component:FinishComponent},
  {path:"total",component:TotalComponent},
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
