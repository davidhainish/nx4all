import { Component } from '@angular/core';

@Component({
  selector: 'dhainish-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-angular';

  person = {
    firstName: 'David',
    lastName: 'Hainish'
  }

  clicked(event: Event) {
    console.log(event);
  }
}
