import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsThumbnailComponent } from './events-thumbnail/events-thumbnail.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
