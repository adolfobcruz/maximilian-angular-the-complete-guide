import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails: boolean = false;
  logs = [];

  constructor() {}

  onToggleDetails() {
    this.showDetails = !this.showDetails;

    this.logs.push(this.logs.length + 1);
  }
}
