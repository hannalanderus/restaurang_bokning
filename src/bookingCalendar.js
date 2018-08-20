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
    let bookingDate = date.format('YYYY-MM-DD');
    console.log(bookingDate)
	fetch('http://localhost:8888/phpfiles/bokningsapi.php?date=' + bookingDate)
	.then((response) => response.json())
	.then((responsejson) => {
	 	
	})
	.catch((error) => {
	    console.error(error);
	});


    console.log(date);
    console.log(bookingDate);
  }

  test() {
  	
  	console.log('hej')
  

  }

 
  render() {
    return (
    	<div>
	    	<div>
		    	<DatePicker
		        dateFormat="YYYY/MM/DD"
		        selected={this.state.startDate}
		        onChange={this.handleChange}
		        
		   		 />
	    		<button id="searchButton" onClick={ () => this.test() }>Sök</button>
	   		 </div>
	   		
   		 </div>
    	)
  	}

};

export default BookingCalendar;
