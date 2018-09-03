import React from 'react';
import BookingHeader from './headerBooking';
import Footer from './footer';
import BookingTitle from './bookingTitle';
import BookingDiv from './bookingDiv';
import { BookingCalendar } from './bookingCalendar.js';
import moment from 'moment';
import DatePicker from 'react-datepicker'; 
import Guestinfo from './guestinfo'; 
import ChosenSitting from './chosenSitting';
import ConfirmationPopUp from './confirmationPopUp';

export class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            startDate: moment(),
            time: '',
            guests: "1",
            name: "",
            email: "",
            phoneNumber: "",
        
       
        earlySittingsButton: false,
        lateSittingsButton: false,

        guestFormDiv: '',
        sittingInformation: ''

        };

        this.handleChange = this.handleChange.bind(this);
        this.numberofguest = this.numberofguest.bind(this);
        this.showEarlyTime = this.showEarlyTime.bind(this);
        this.showLateTime = this.showLateTime.bind(this)

        this.handlePersonChange = this.handlePersonChange.bind(this);
        this.handlePersonSubmit = this.handlePersonSubmit.bind(this);
        
    }
 
 /* handleChange updates the initial state with selected date when clicked */
    handleChange(date) {
    let guests = this.state.guests;
    let time = this.state.time;
    console.log("Running event handler");
      this.setState({
      startDate: date, guests: guests, time: time
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

numberofguest(){
    let date = this.state.startDate;
    let time = this.state.time;
    let selectedOption = document.getElementById('guestsAmount');
    let optionValue = selectedOption.options[selectedOption.selectedIndex].value;
       this.setState({
          startDate: date, guests: optionValue, time: time
        });

}

showEarlyTime(){
    let date = this.state.startDate;
    let chosenDate = date.format('ll');
    let guests = this.state.guests;
    let EarlyButtonValue = document.getElementById('EarlyButtonID').value;
    let guestFormDiv = <Guestinfo handlePersonChange = {this.handlePersonChange}
                           handlePersonSubmit = {this.handlePersonSubmit} />;

    let sittingInformation = <ChosenSitting chosenDate={chosenDate} chosenTime={EarlyButtonValue} chosenGuests={this.state.guests} />;

    this.setState({
      startDate: date, guests: guests, time: EarlyButtonValue, guestFormDiv: guestFormDiv, sittingInformation: sittingInformation
    });

}   

showLateTime(){
    let date = this.state.startDate;
    let chosenDate = date.format('ll');
    let guests = this.state.guests;
    let LateButtonValue = document.getElementById('LateButtonID').value;
    let guestFormDiv = <Guestinfo handlePersonChange = {this.handlePersonChange}
                           handlePersonSubmit = {this.handlePersonSubmit} />;

    let sittingInformation = <ChosenSitting chosenDate={chosenDate} chosenTime={LateButtonValue} chosenGuests={this.state.guests} />;

    this.setState({
      startDate: date, guests: guests, time: LateButtonValue, guestFormDiv: guestFormDiv, sittingInformation : sittingInformation
    });
}

checkAvailableSittings (response){
 console.log(response.earlyBookings);

  if(response.earlyBookings < 15 ){
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


/*Handling person information*/
handlePersonChange(e) {
      this.setState({ 
        [e.target.name]: e.target.value 
    });
}

handlePersonSubmit(e) {
    e.preventDefault();
    this.postBookingInfo()
}

confirmationPopUp(){
  let modal = document.getElementById('myModal');
  modal.style.display = "block";
}

closeConfirmationPopUp(){
  let modal = document.getElementById('myModal');
  modal.style.display = "none";
}

postBookingInfo() {
    let date = this.state.startDate.format('YYYY-MM-DD');

    let data = {
        name: this.state.name,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        startDate: date,
        time: this.state.time,
        guests: this.state.guests
    }

   return fetch('http://localhost:8888/phpfiles/create.php', {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data)
      })
      .then((response) => {
        this.confirmationPopUp();
      })
      .catch((error) => {
        console.error(error);
      })
}



    render() {
        // Skriv logik för att visa bookingCalendar eller guests

        return (
            <div>
                <BookingHeader />
                <BookingTitle />
                {this.state.sittingInformation}

                <div id="bookingDiv">
                
                  <BookingCalendar    startDate={this.state.startDate} 
                                      handleChange={this.handleChange}
                                      numberofguest={this.numberofguest}
                                      showEarlyTime={this.showEarlyTime} 
                                      showLateTime={this.showLateTime}
                                      earlySittingsButton={this.state.earlySittingsButton}
                                      lateSittingsButton={this.state.lateSittingsButton}/>
                  
                   {this.state.guestFormDiv}
                    <ConfirmationPopUp modelID='myModal' event={this.closeConfirmationPopUp}/>
                </div>

                <Footer />
            </div>
        )
    }
  
};
