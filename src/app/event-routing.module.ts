import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';

export const routes:Routes = [
  { path: 'events/new', component:CreateEventComponent},
  { path: 'events', component: EventsListComponent},
  { path: 'events/:id', component:EventDetailsComponent}, 
  { path: '', redirectTo: '/events', pathMatch: 'full'}
]

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
 