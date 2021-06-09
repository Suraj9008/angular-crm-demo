import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserPermissionComponent } from './user-permission/user-permission.component';
@NgModule({
  declarations: [
    ProfileListComponent,
    AddUserComponent,
    EditProfileComponent,
    UserRoleComponent,
    UserPermissionComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }