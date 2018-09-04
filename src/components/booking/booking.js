import React from 'react';
import BookingHeader from './headerBooking';
import Footer from '../footer';
import BookingTitle from './bookingTitle';
import { BookingCalendar } from './bookingCalendar.js';
import moment from 'moment';
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
            EarlySelected: null,
            LateSelected: null,
            notAvailable: false,

            guestFormDiv: '',
            sittingInformation: '',
        };

/* Bind events to the functions to be called, that are being refered without method () */
      this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
      this.numberofguest = this.numberofguest.bind(this);
      this.showEarlyTime = this.showEarlyTime.bind(this);
      this.showLateTime = this.showLateTime.bind(this)

      this.handlePersonChange = this.handlePersonChange.bind(this);
      this.handlePersonSubmit = this.handlePersonSubmit.bind(this);    
    }
 
/* HandleChangeDatePicker updates the initial state with selected date from datepicker when clicked */
handleChangeDatePicker(date) {
  let guests = this.state.guests;
  let time = this.state.time;
    this.setState({
      startDate: date,
      guests: guests, 
      time: time
    });

  /* Changing date format to match our database format */
  let bookingDate = date.format('YYYY-MM-DD');
   
  /* Fetching all booking information from database based on chosen date */
   fetch('http://localhost:8888/phpfiles/bokningsapi.php?date=' + bookingDate)
  .then((response) => response.json())
  .then((response) => {
    this.checkAvailableSittings(response);
  })
  .catch((error) => {
    console.error(error);
  })
};

/* Selecet number of guests from Select input field and set state with chosen number of guests*/
numberofguest(){
  let date = this.state.startDate;
  let time = this.state.time;
  let selectedOption = document.getElementById('guestsAmount');
  let optionValue = selectedOption.options[selectedOption.selectedIndex].value;
    this.setState({
      startDate: date, 
      guests: optionValue, 
      time: time
    });
}

/*Funciton receives value "18:00:00" when earlybutton is clicked. 
And sets state, not only with time but also changes state for guestInfo inputfields to TRUE 
for them to be shown */
showEarlyTime(){
  let date = this.state.startDate;
  let chosenDate = date.format('ll');
  let guests = this.state.guests;
  let EarlyButtonValue = document.getElementById('EarlyButtonID').value;

  let guestFormDiv = <Guestinfo handlePersonChange = {this.handlePersonChange}
                                handlePersonSubmit = {this.handlePersonSubmit} />;

/* Sittinginformation is the paragraph shown above the bookingDiv, 
with gathered informaiton about the booking (number of guests, time and date) */
  let sittingInformation = <ChosenSitting chosenDate={chosenDate} 
                                          chosenTime={EarlyButtonValue} 
                                          chosenGuests={this.state.guests} />;

  this.setState({
    startDate: date, 
    guests: guests, 
    time: EarlyButtonValue, 
    guestFormDiv: guestFormDiv, 
    sittingInformation: sittingInformation, 
    EarlySelected:'selected', 
    LateSelected: null
  });

}   

/*Funciton receives value "21:00:00" when latebutton is clicked. 
And sets state, not only with time but also changes state for guestInfo inputfields to TRUE 
for them to be shown */
showLateTime(){
  let date = this.state.startDate;
  let chosenDate = date.format('ll');
  let guests = this.state.guests;
  let LateButtonValue = document.getElementById('LateButtonID').value;
  let guestFormDiv = <Guestinfo handlePersonChange = {this.handlePersonChange}
                                handlePersonSubmit = {this.handlePersonSubmit} />;

/* Sittinginformation is the paragraph shown above the bookingDiv, 
with gathered informaiton about the booking (number of guests, time and date) */
  let sittingInformation = <ChosenSitting chosenDate={chosenDate} chosenTime={LateButtonValue} chosenGuests={this.state.guests} />;

  this.setState({
    startDate: date, 
    guests: guests, 
    time: LateButtonValue, 
    guestFormDiv: guestFormDiv, 
    sittingInformation: sittingInformation,
    EarlySelected:null, 
    LateSelected:'selected'
  });
}

/* Calculates available sittings based on the response from the fetch
 (that happens in handleChangeDatePicker).
 And changes states for timebuttons to be shown or not */

checkAvailableSittings (response){

  if(response.earlyBookings < 15 ){
    this.setState({
      earlySittingsButton: true,
      notAvailable: false
    });
  }

  if(response.earlyBookings === 15) {
    this.setState({
      earlySittingsButton: false,
      notAvailable: false
    });
  }

  if(response.lateBookings < 15){
    this.setState({
      lateSittingsButton: true,
      notAvailable: false
    });
  }

  if(response.lateBookings === 15){
    this.setState({
      lateSittingsButton: false,
      notAvailable: false
    });
  }

   if (response.lateBookings === 15 && response.earlyBookings === 15){
    this.setState({
      notAvailable: true,

    });
   } 
};

/* Handling person information from inputfielts. 
Target indicates which inputfield is being typed in. */
handlePersonChange(e) {
  this.setState({ 
    [e.target.name]: e.target.value 
  });
}

/* Prevent standtard behaviour on click and calls postBookingInfo function. */
handlePersonSubmit(e) {
  e.preventDefault();
  this.postBookingInfo()
}

/* All information from making a booking is posted into database (through create.php) */
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

/* Confirmation message when booking is succesfull */
confirmationPopUp(){
  let modal = document.getElementById('myModal');
  modal.style.display = "block";
}

closeConfirmationPopUp(){
  let modal = document.getElementById('myModal');
  modal.style.display = "none";
}

  render() {
    return (
      <div>
          <BookingHeader />
          <BookingTitle />
          {this.state.sittingInformation}

            <div id="bookingDiv">
            
            {/* Sending values from this component
             to BookingCalender component using props method */}
             
            <BookingCalendar    startDate={this.state.startDate} 
                                handleChangeDatePicker={this.handleChangeDatePicker}
                                numberofguest={this.numberofguest}
                                showEarlyTime={this.showEarlyTime} 
                                showLateTime={this.showLateTime}
                                earlySittingsButton={this.state.earlySittingsButton}
                                lateSittingsButton={this.state.lateSittingsButton}
                                EarlySelected={this.state.EarlySelected}
                                LateSelected={this.state.LateSelected}
                                notAvailable={this.state.notAvailable}
                                changeToDisabled={this.state.changeToDisabled}
                                timeButtonDisabled={this.state.timeButtonDisabled} />
              
              {this.state.guestFormDiv}
              <ConfirmationPopUp modelID='myModal' event={this.closeConfirmationPopUp}/>
            </div>
          <Footer />
      </div>
    )
  }
};
