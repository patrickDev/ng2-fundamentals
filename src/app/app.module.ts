import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsThumbnailComponent } from './events-thumbnail/events-thumbnail.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { NavComponent } from './nav/nav.component';
import { EventRoutingModule } from './event-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    NavComponent,
    CreateEventComponent,
    ErrorsComponent,
  ],
  imports: [
    BrowserModule,
    EventRoutingModule
  ],
  providers: [
    {provide:'canDeactivateCreateEvent', useValue: CheckDirtyState}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function CheckDirtyState(component:CreateEventComponent){
 if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}