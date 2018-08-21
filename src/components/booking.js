import React from 'react';
import BookingCalendar from './bookingCalendar';
import Sittings from './sittings';  

export class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        sittings: [],
        };

    }

    render() {
        return (
            <div>
                <BookingCalendar />
                <Sittings />
            </div>
        )
    }
  
};

