
import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import EarlySittings from './earlySittings';
import LateSittings from './lateSittings';
import Guests from './guests';

 class BookingCalendar extends React.Component {
/*Todays date */
 constructor (props) {
    super(props)
    this.state = {
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

numberofguest(){
  let selectedOption = document.getElementById('selectedId');
  let optionValue = selectedOption.options[selectedOption.selectedIndex].value;
  
  console.log(optionValue);

}

 
  render() {

    let early = '';
    let late = '';

    if(this.state.earlySittingsButton){
      early = <EarlySittings />
    };
    if(this.state.lateSittingsButton){
      late = <LateSittings />
    };

    return (
      <div>
        <div>
        <Guests SelectID="selectedId" event={this.numberofguest} />
        <label>Date</label>
          <DatePicker
            dateFormat="YYYY/MM/DD"
            selected={this.state.startDate}
            onChange={this.handleChange}        
           />
         </div>
         
         <div>
           {early}
           {late}
         </div>  

       </div>
      )
    }

};

export default BookingCalendar;