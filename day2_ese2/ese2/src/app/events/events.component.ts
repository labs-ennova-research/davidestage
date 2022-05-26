import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  @Input()
  eventi!: any[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
