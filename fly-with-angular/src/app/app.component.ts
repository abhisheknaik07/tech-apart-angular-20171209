import { Component } from '@angular/core';
import { TripInterface } from './trip';
import { CurrencyPipe } from '@angular/common';
//import { FormBuilder } from '@angular/forms/src/form_builder';
import{ FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms/';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  tripForm: FormGroup;
  
  // title = 'Fly with Angular';
  // tripName="Super Flights to Mars";
  // tripPrice="18200gg";
  // tripDescription="Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.";
  // tripDuration="2 Earth Years";
  // bookBtn="Book Trip";
   title= 'Fly with Angular',
  trips: TripInterface[] = [{     
      Name:'Super Flights to Mars',
      Price:18200,
      Description:'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      Duration:'2 Earth Years',
      bookBtn:'Book Trip',
      imgSrc:'https://angular.io/assets/images/logos/angular/angular.png'
  },
  {    
    Name:'Super Flights to Jupiter',
    Price:18201,
    Description:'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
    Duration:'4 Earth Years',
    bookBtn:'Book Trip',
    imgSrc:'https://angular.io/assets/images/logos/angular/angular.png'
  },
  {   
    Name:'Super Flights to Saturn',
    Price:18202,
    Description:'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
    Duration:'6 Earth Years',
    bookBtn:'Book Trip',
    imgSrc:'https://angular.io/assets/images/logos/angular/angular.png'
  }];


constructor(private fb:FormBuilder){};

ngOnInit() { 
  this.tripForm =  this.fb.group({
    Name: new FormControl('',Validators.required),
    Price: new FormControl(0,Validators.required),
    Description: new FormControl('',Validators.required),
    Duration: new FormControl('',Validators.required),
    bookBtn: new FormControl('',Validators.required),
    imgSrc: new FormControl('',Validators.required),
  });  
}


toggleState:boolean=false;
submit()
{
  console.log(this.tripForm)
  const tt: TripInterface = {
    Name:this.tripForm.controls.Name.value,
    Price: this.tripForm.controls.Price.value,
    Description: this.tripForm.controls.Description.value,
    Duration: this.tripForm.controls.Duration.value,
    bookBtn: this.tripForm.controls.bookBtn.value,
    imgSrc: this.tripForm.controls.imgSrc.value,

    
  }

  this.trips.push(tt);
   
  this.toggleState=false;
  }  
    





  showOrHide()
  {
    if(this.toggleState==true)
    {
      this.toggleState=false;
    }
    else
      this.toggleState=true;
  }

  totalAmount:number;

  bookTrip()
  {
    
  }
  
}





