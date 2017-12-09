import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fly with Angular';
  tripName="Super Flights to Mars";
  tripPrice="18200";
  tripDescription="Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.";
  tripDuration="2 Earth Years";
  bookBtn="Book Trip";
}
