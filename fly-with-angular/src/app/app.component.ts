import { Component } from '@angular/core';
import { TripInterface } from './trip';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  // title = 'Fly with Angular';
  // tripName="Super Flights to Mars";
  // tripPrice="18200gg";
  // tripDescription="Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.";
  // tripDuration="2 Earth Years";
  // bookBtn="Book Trip";
  trips: TripInterface[] = [{
      id:1,
      title: 'Fly with Angular',
      Name:'Super Flights to Mars',
      Price:18200,
      Description:'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      Duration:'2 Earth Years',
      bookBtn:'Book Trip',
      imgSrc:'https://angular.io/assets/images/logos/angular/angular.png'
  },
  {

    id:2,
    title: 'Fly with Angular2',
    Name:'Super Flights to Jupiter',
    Price:18200,
    Description:'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
    Duration:'4 Earth Years',
    bookBtn:'Book Trip',
    imgSrc:'https://angular.io/assets/images/logos/angular/angular.png'
  },
  {
    id:3,
    title: 'Fly with Angular2',
    Name:'Super Flights to Jupiter',
    Price:18200,
    Description:'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
    Duration:'4 Earth Years',
    bookBtn:'Book Trip',
    imgSrc:'https://angular.io/assets/images/logos/angular/angular.png'
  }];

  
}




