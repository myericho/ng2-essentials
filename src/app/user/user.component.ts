import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = 'Eric';
  eventName = 'test';

  constructor() { }

  ngOnInit() {
  }

  onUserInput(event) {
    this.eventName = event.target.value;
  }

}
