import {NgModule } from '@angular/core'
import {CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { UserProfileRoutes } from './user-profile.route'
import { UserProfileComponent } from './user-profile.component'
import { LoginComponent } from '../login/login.component';

@NgModule({
    imports:[
        CommonModule, 
        FormsModule,
        RouterModule.forChild(UserProfileRoutes)
    ],
    declarations:[
        UserProfileComponent, 
        LoginComponent
    ], 
    providers:[]

})

export class UserModule{

}