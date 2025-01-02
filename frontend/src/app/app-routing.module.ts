import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GroupComponent } from './group/group.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { TeamFormComponent } from './team/team-form/team-form.component';
import { AttendanceTrackingComponent } from './attendance/attendance-tracking/attendance-tracking.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
//import { BookingComponent } from './booking/booking.component';
//import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'event-search', component: EventSearchComponent },
  { path: 'teams/new', component: TeamFormComponent },
  { path: 'attendance', component: AttendanceTrackingComponent },
  { path: 'booking', component:  BookingComponent},
  { path: 'payment', component:  PaymentComponent},
  { path: 'group', component: GroupComponent },
  { path: 'event', component: EventComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
