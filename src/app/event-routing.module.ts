import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ErrorsComponent } from './errors/errors.component';
import { EventRouteActivatorService } from './event-route-activator.service';
import { EventsListResolverService } from './events-list-resolver.service';

export const routes:Routes = [
  { path: 'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
  { path: 'events', component: EventsListComponent, resolve:{events:EventsListResolverService}},
  { path: 'events/:id', component:EventDetailsComponent, canActivate: [EventRouteActivatorService]}, 
  { path: '404', component: ErrorsComponent},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user-profile', loadChildren: './user-profile/user.module#UserModule'}
]

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
 