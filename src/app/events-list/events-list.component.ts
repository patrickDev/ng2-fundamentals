import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ToastrService } from '../toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../event/event.module';



@Component({
 // selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[]

  constructor(private eventService: EventService, private toastr: ToastrService, 
    private route:ActivatedRoute) {
  
   }

  ngOnInit() {
   this.events = this.route.snapshot.data['events']
  } 

  handleTumbnailClick(eventName){
    this.toastr.success(eventName)
  }
}