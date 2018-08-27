import React from 'react';
import BookingHeader from './headerBooking';
import Footer from './footer';
import BookingTitle from './bookingTitle';
import BookingDiv from './bookingDiv';

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
                <BookingHeader />
                <BookingTitle />
                <BookingDiv />
                <Footer />
            </div>
        )
    }
  
};
