import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { UserPermissionComponent } from './user-permission/user-permission.component';
import { UserRoleComponent } from './user-role/user-role.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'user'
    },
    children: [
      {
        path: '',
        redirectTo: 'user'
      },
      {
        path: 'profile-list',
        component: ProfileListComponent,
        data: {
          title: 'Profile List'
        }
      },
      {
        path: 'add-user',
        component: AddUserComponent,
        data: {
          title: 'Add User'
        }
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent
      },
      {
        path: 'user-role',
        component: UserRoleComponent
      },
      {
        path: 'user-permission',
        component: UserPermissionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }