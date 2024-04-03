import { Component } from '@angular/core';
import { BookingServiceService } from '../services/booking-service.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  bookingList:any = [];
  constructor(private bookingSrv:BookingServiceService){

  }

  NgOnInit(){
      this.bookingSrv.getDataFromServer("bookings").subscribe({
        next:(response)=>{
          if(response && response.length > 0) {
          this.bookingList = response;
          console.log("booking-list", this.bookingList);
          }
        },
         error:(error)=>{
            console.log(error);
         },
         complete:()=>{
              
         }
         
         
      })
  }
}
