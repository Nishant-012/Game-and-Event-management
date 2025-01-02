import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from '../attendence.service';
 // Corrected import statement

@Component({
  selector: 'app-attendance-tracking',
  templateUrl: './attendance-tracking.component.html',
  styleUrls: ['./attendance-tracking.component.css']
})
export class AttendanceTrackingComponent {
  attendanceForm: FormGroup;
  message: string | null = null;

  constructor(private fb: FormBuilder, private attendanceService: AttendanceService) {
    this.attendanceForm = this.fb.group({
      userId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.attendanceForm.valid) {
      const userId = this.attendanceForm.value.userId;
      this.attendanceService.getAttendance(userId).subscribe(
        (teamsCount: number) => {
          this.message = `Currently, this user is in ${teamsCount} team(s).`;
        },
        (error: any) => {
          this.message = 'An error occurred while fetching the attendance.';
        }
      );
    }
  }
}
