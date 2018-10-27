import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class EventModule { }

export interface IEvent{
  id: number
  name: string 
  date: Date
  time: string
  price: number
  imageUrl: string 
  location?:{
    address: string 
    city: string
    country:string
  }, 
  onlineUrl?: string, 
  sessions: ISession[]

}

export interface ISession {
  id:number
  name: string 
  presenter: string 
  duration: number
  level: string
  abstract:string 
  voters: string[]

}
