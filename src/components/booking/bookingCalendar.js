
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EarlySittings from './earlySittings';
import LateSittings from './lateSittings';
import Guests from './guests';

export class BookingCalendar extends React.Component {

  render() {

  /* Time buttons and not available message empty as default, 
  and are visable (in the if statments) for the user depending on the result 
  from checkAvailableSittings function in booking.js */

    let early = '';
    let late = '';
    let notAvailable = '';

    if(this.props.earlySittingsButton){
      early = <EarlySittings  EarlyButtonID='EarlyButtonID' 
                              timeButtonClass={this.props.EarlySelected} 
                              event={this.props.showEarlyTime} />
    };
    if(this.props.lateSittingsButton){
      late = <LateSittings  LateButtonID='LateButtonID' 
                            timeButtonClass={this.props.LateSelected} 
                            event={this.props.showLateTime} />
    }; 
    if(this.props.notAvailable){
      notAvailable = 'No tables available. Please choose another date to vist us!'
    };

    return (
      <div>
        <div>
          <Guests SelectID="guestsAmount" event={this.props.numberofguest} />
            <label>Date</label>
              <DatePicker
                dateFormat="YYYY/MM/DD"
                selected={this.props.startDate}
                onChange={this.props.handleChangeDatePicker}        
              />
        </div>
         
        <div id="timeButtons">
          {early}
          {late}    
        </div>  
          <p className="notAvailableMessage">{notAvailable}</p>
      </div>
    )
  }
};

export default BookingCalendar;