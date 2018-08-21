import React from 'react';
import BookingCalendar from './bookingCalendar.js';
import StartPageHeader from './header.js';
import '../App.css';
import { Booking } from './booking.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Sittings from './sittings';

class App extends React.Component {
    render() {
        return(
          <div>
            <StartPageHeader />
            <Booking />
          </div>
        );
    }
}

export default App;
