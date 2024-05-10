import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './history/history.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { MyeventComponent } from './myevent/myevent.component';
import { EventComponent } from './event/event.component';
import { SearchPipe } from './search.pipe';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { SplitComponent } from './split/split.component';
import { UnequallyComponent } from './unequally/unequally.component';
import { PercentageComponent } from './percentage/percentage.component';
import { SettlementComponent } from './settlement/settlement.component';
import { FinishComponent } from './finish/finish.component';
import { ToastrModule } from 'ngx-toastr';
import { TotalComponent } from './total/total.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HistoryComponent,
    CreateEventComponent,
    MyeventComponent,
    EventComponent,
    SearchPipe,
    AddexpenseComponent,
    SplitComponent,
    UnequallyComponent,
    PercentageComponent,
    SettlementComponent,
    FinishComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center' // Change position here
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
