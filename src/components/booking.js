import React from 'react';
import BookingCalendar from './bookingCalendar';
 

export class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        };

    }

    render() {
        return (
            <div>
                <BookingCalendar />
                
            </div>
        )
    }
  
};

