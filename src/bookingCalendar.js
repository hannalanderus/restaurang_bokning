import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

 class BookingCalendar extends React.Component {
/*Todays date */
 constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
 /* handleChange updates the initial state with selected date when clicked */
  handleChange(date) {
  	console.log("Running event handler");
    this.setState({
      startDate: date
    
    });
    let bookingDate = date.format('YYYY/MM/DD');
   

   /*let data = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        'Date': bookingDate,
    }),
}*/

	fetch('http://localhost:8888/phpfiles/bokningsapi.php?date=' + bookingDate)
	.then((response) => response.json())
	.then((responseJson) => {
	 

	})
	.catch((error) => {
	    console.error(error);
	});



    console.log(date);
    console.log(bookingDate);
  }
 
  render() {
    return <DatePicker
        dateFormat="YYYY/MM/DD"
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }

};

export default BookingCalendar;
