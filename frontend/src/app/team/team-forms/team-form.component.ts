// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
// import { Router } from '@angular/router';
// import { TeamService } from '../team.service'; // Import the UserService
// import { UserService } from '../../user.service';

// @Component({
//   selector: 'app-team-form',
//   templateUrl: './team-form.component.html',
//   styleUrls: ['./team-form.component.css']
// })
// export class TeamFormComponent implements OnInit {
//   teamForm!: FormGroup;
//   users: any[] = []; // Variable to store user details

//   constructor(
//     private fb: FormBuilder,
//     private teamService: TeamService,
//     private userService: UserService, // Inject the UserService
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     this.teamForm = this.fb.group({
//       name: ['', Validators.required],
//       eventId: ['', [Validators.required, Validators.min(1)]],
//       userIds: this.fb.array([], [Validators.required, Validators.maxLength(10)])
//     });
//   }

//   get userIds(): FormArray {
//     return this.teamForm.get('userIds') as FormArray;
//   }

//   addUserId(userId: number): void {
//     if (this.userIds.length < 10) {
//       this.userIds.push(this.fb.control(userId, [Validators.required, Validators.min(1)]));
//     }
//   }

//   removeUserId(index: number): void {
//     this.userIds.removeAt(index);
//   }

//   onSubmit(): void {
//     if (this.teamForm.valid) {
//       const teamData = {
//         ...this.teamForm.value,
//         userIds: this.teamForm.value.userIds.map((control: any) => control.value)
//       };
//       this.teamService.createTeam(teamData).subscribe(
//         response => {
//           console.log('Team created successfully:', response);
//           this.router.navigate(['/teams']);
//         },
//         error => {
//           console.error('Error creating team:', error);
//         }
//       );
//     }
//   }

//   getUsers(): void {
//     this.userService.getUsers().subscribe(
//       (      response: any[]) => {
//         this.users = response;
//       },
//       (      error: any) => {
//         console.error('Error fetching users:', error);
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from '../team.service'; // Import the TeamService
import { UserService } from '../../user.service'; // Import the UserService

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {
  teamForm!: FormGroup;
  users: any[] = []; // Variable to store user details

  constructor(
    private fb: FormBuilder,
    private teamService: TeamService,
    private userService: UserService, // Inject the UserService
    private router: Router
  ) { }

  ngOnInit(): void {
    this.teamForm = this.fb.group({
      name: ['', Validators.required],
      eventId: ['', [Validators.required, Validators.min(1)]],
      userIds: this.fb.array([], [Validators.required, Validators.maxLength(10)])
    });
  }

  get userIds(): FormArray {
    return this.teamForm.get('userIds') as FormArray;
  }

  addUserId(userId: number): void {
    if (this.userIds.length < 10) {
      this.userIds.push(this.fb.control(userId, [Validators.required, Validators.min(1)]));
    }
  }

  removeUserId(index: number): void {
    this.userIds.removeAt(index);
  }

  onSubmit(): void {
    alert("Team is created successfully");
    if (this.teamForm.valid) {
      const teamData = {
        ...this.teamForm.value,
        userIds: this.teamForm.value.userIds.map((control: any) => control.value)
      };
      this.teamService.createTeam(teamData).subscribe(
        (        response: any) => {
          console.log('Team created successfully:', response);
          alert("Team is created successfully");
          // Save the team data to local storage
          localStorage.setItem('createdTeam', JSON.stringify(teamData));
          this.router.navigate(['/teams']);
        },
        (        error: any) => {
          console.error('Error creating team:', error);
        }
      );
    }
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: any[]) => {
        this.users = response;
      },
      (error: any) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}

