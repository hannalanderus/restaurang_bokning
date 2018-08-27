import React from 'react';
import BookingHeader from './headerBooking';
import Footer from './footer';
import BookingTitle from './bookingTitle';
import BookingDiv from './bookingDiv';
import { BookingCalendar } from './bookingCalendar.js';
import moment from 'moment';
import DatePicker from 'react-datepicker';  

export class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        sittings: [],
        startDate: moment(),
        earlySittingsButton: false,
        lateSittingsButton: false,
        };
        this.handleChange = this.handleChange.bind(this);

    }
 
 /* handleChange updates the initial state with selected date when clicked */
    handleChange(date) {
    console.log("Running event handler");
      this.setState({
      startDate: date   
    });

    let bookingDate = date.format('YYYY-MM-DD');
    console.log(bookingDate)
   
     fetch('http://localhost:8888/phpfiles/bokningsapi.php?date=' + bookingDate)
    .then((response) => response.json())
    .then((response) => {
      this.checkAvailableSittings(response);

    })
    .catch((error) => {
      console.error(error);
    })


    console.log(date);
    console.log(bookingDate);

};

checkAvailableSittings (response){


  if(response.earlyBookings === 3){
    console.log('knapp 18:00');
    this.setState({
      earlySittingsButton: true
    });
    }

  if(response.earlyBookings === 15) {
    console.log('18:00 är fullt!');
     this.setState({
      earlySittingsButton: false
    });
  }

  if(response.lateBookings < 15){
    console.log('knapp 21:00');
     this.setState({
      lateSittingsButton: true
    });
  }

  if(response.lateBookings === 15){
    console.log('21:00 är fullt!');
     this.setState({
      lateSittingsButton: false
    });
  }
};



    render() {
        // Skriv logik för att visa bookingCalendar eller guests

        return (
            <div>
                <BookingHeader />
                

                <BookingCalendar    startDate={this.state.startDate} 
                                    handleChange={this.handleChange} 
                                    earlySittingsButton={this.state.earlySittingsButton}
                                    lateSittingsButton={this.state.lateSittingsButton}/>
                <Footer />
            </div>
        )
    }
  
};
