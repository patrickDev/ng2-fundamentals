import { UserProfileComponent } from './user-profile.component'
import { LoginComponent } from '../login/login.component';

export const UserProfileRoutes = [
    {path: 'user-profile',  component:UserProfileComponent},
    { path: 'login', component: LoginComponent}
]