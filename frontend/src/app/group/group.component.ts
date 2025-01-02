// import { Component } from '@angular/core';
// import { GroupService } from '../group.service';

// @Component({
//   selector: 'app-group',
//   templateUrl: './group.component.html',
//   styleUrls: ['./group.component.css']
// })
// export class GroupComponent {
//   name: string = '';
//   users: any[] = [{ username: '', id: null, followed: false }];

//   constructor(private groupService: GroupService) { }

//   addUser() {
//     this.users.push({ username: '', id: null, followed: false });
//   }

//   removeUser(index: number) {
//     this.users.splice(index, 1);
//   }

//   followUser(user: any) {
//     if (user.followed) {
//       alert('You have already followed this user.');
//       return;
//     }

//     this.groupService.followUser(user.id).subscribe(
//       response => {
//         user.followed = true;
//         console.log('User followed successfully:', response);
//       },
//       error => {
//         console.error('Error following user:', error);
//       }
//     );
//   }

//   onSubmit() {
//     const groupData = {
//       name: this.name,
//       users: this.users.map(user => ({ username: user.username, id: user.id }))
//     };
//     this.groupService.createGroup(groupData).subscribe(
//       response => {
//         console.log('Group created successfully:', response);
//         // Handle successful group creation (e.g., show a success message)
//       },
//       error => {
//         console.error('Error creating group:', error);
//         // Handle group creation error (e.g., show an error message)
//       }
//     );
//   }
// }

import { Component } from '@angular/core';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {
  name: string = '';
  users: any[] = [{ username: '', id: null, followed: false }];

  constructor(private groupService: GroupService) { }

  addUser() {
    if (this.users.length >= 10) {
      alert('You cannot add more than 10 users.');
      return;
    }
    this.users.push({ username: '', id: null, followed: false });
  }

  removeUser(index: number) {
    this.users.splice(index, 1);
  }

  followUser(user: any) {
    if (user.followed) {
      alert('You have already followed this user.');
      return;
    }

    this.groupService.followUser(user.id).subscribe(
      response => {
        user.followed = true;
        console.log('User followed successfully:', response);
      },
      error => {
        console.error('Error following user:', error);
      }
    );
  }

  onSubmit() {
    if (this.users.length < 2) {
      alert('You need to add at least 2 users to create a group.');
      return;
    }

    const groupData = {
      name: this.name,
      users: this.users.map(user => ({ username: user.username, id: user.id }))
    };

    this.groupService.createGroup(groupData).subscribe(
      response => {
        console.log('Group created successfully:', response);
        // Handle successful group creation (e.g., show a success message)
      },
      error => {
        console.error('Error creating group:', error);
        // Handle group creation error (e.g., show an error message)
      }
    );
  }
}

