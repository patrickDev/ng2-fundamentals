import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';



@Component({
  selector: 'events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent implements OnInit {

 @Input() event: any
 //@Output() eventClick = new EventEmitter()
 
  
  ngOnInit() {
  } 
 
}
