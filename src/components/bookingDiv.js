import React from 'react';
import BookingCalendar from './bookingCalendar';
import Guestinfo from './guestinfo';


function BookingDiv (){
            
        return(
        
                <div id="bookingDiv">
                		<BookingCalendar />
                		<Guestinfo />
                                              
                </div>
        
        );
    
}

export default BookingDiv;