import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../event/event.module';



@Component({
  selector: 'events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent implements OnInit {

 @Input() event: IEvent
 //@Output() eventClick = new EventEmitter()
 
  
  ngOnInit() {
  } 
 
}
