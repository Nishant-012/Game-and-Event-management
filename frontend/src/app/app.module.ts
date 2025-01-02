import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { EventComponent } from './event/event.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GroupComponent } from './group/group.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { EventSearchService } from './event-search.service';
import { TeamFormComponent } from './team/team-form/team-form.component';
import { AttendanceTrackingComponent } from './attendance/attendance-tracking/attendance-tracking.component';
// Ensure AttendanceService is imported
import { AttendanceService } from './attendance/attendence.service';
import { NavigationComponent } from './navigation/navigation.component';
import { DatePipe } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
//import { BookingComponent } from './booking/booking.component';
//import { PaymentComponent } from './payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventComponent,
    FeedbackComponent,
    GroupComponent,
    EventSearchComponent,
    TeamFormComponent,
    AttendanceTrackingComponent,
    NavigationComponent,
    BookingComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [EventSearchService, AttendanceService,DatePipe], // Ensure AttendanceService is provided
  bootstrap: [AppComponent]
})
export class AppModule { }
