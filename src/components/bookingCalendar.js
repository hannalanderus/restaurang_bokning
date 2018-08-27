
import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import EarlySittings from './earlySittings';
import LateSittings from './lateSittings';
import Guests from './guests';

export class BookingCalendar extends React.Component {
/*Todays date */
 



//funktion som kallar på handleChange i booking.js



numberofguest(){
  let selectedOption = document.getElementById('guestsAmount');
  let optionValue = selectedOption.options[selectedOption.selectedIndex].value;
  
  console.log(optionValue);

}

showEarlyTime(){
 let EarlyButtonValue = document.getElementById('EarlyButtonID').value;
 console.log(EarlyButtonValue);
}

showLateTime(){
  let LateButtonValue = document.getElementById('LateButtonID').value;
  console.log(LateButtonValue);
}

 
  render() {

    let early = '';
    let late = '';

    if(this.props.earlySittingsButton){
      early = <EarlySittings EarlyButtonID='EarlyButtonID' event={this.showEarlyTime} />
    };
    if(this.props.lateSittingsButton){
      late = <LateSittings LateButtonID='LateButtonID' event={this.showLateTime} />
    }; 

    return (
      <div>
        <div>
        <Guests SelectID="guestsAmount" event={this.numberofguest} />
        <label>Date</label>
          <DatePicker
            dateFormat="YYYY/MM/DD"
            selected={this.props.startDate}
            onChange={this.props.handleChange}        
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