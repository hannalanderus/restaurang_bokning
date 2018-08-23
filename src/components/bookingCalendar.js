import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

 class BookingCalendar extends React.Component {
/*Todays date */
 constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
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
  if(response.earlyBookings < 15){
    console.log('knapp 18:00');
  }

  if(response.earlyBookings === 15) {
    console.log('18:00 är fullt!');
  }

  if(response.lateBookings < 15){
    console.log('knapp 21:00');
  }

  if(response.lateBookings === 15){
    console.log('21:00 är fullt!');
  }
};

 
  render() {
    return (
    	<div>
	    	<div>
		    	<DatePicker
		        dateFormat="YYYY/MM/DD"
		        selected={this.state.startDate}
		        onChange={this.handleChange}        
		   		 />
	   		 </div>
	   		
   		 </div>
    	)
  	}

};

export default BookingCalendar;
