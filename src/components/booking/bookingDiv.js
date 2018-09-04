import React from 'react';
import BookingCalendar from './bookingCalendar';
import Guestinfo from './guestinfo';

/* Displays the complete booking form
 with select guests, datepicker, timebuttons, and guestinformation fields */
function BookingDiv (){  
	
	return(
		<div id="bookingDiv">
			<BookingCalendar />
			<Guestinfo />
		</div>
	);  
}

export default BookingDiv;