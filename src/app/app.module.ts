import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsThumbnailComponent } from './events-thumbnail/events-thumbnail.component';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
import { EventDetailsComponent } from './event-details/event-details.component';
=======
import { NavComponent } from './nav/nav.component';
>>>>>>> 942bd1fd148e9c7dbfd59e046c4a5f77ef33c6b7

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
<<<<<<< HEAD
    NavbarComponent,
    EventDetailsComponent
=======
    NavComponent
>>>>>>> 942bd1fd148e9c7dbfd59e046c4a5f77ef33c6b7
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
