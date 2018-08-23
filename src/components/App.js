import React, { Component } from 'react';
import BookingCalendar from './bookingCalendar.js';
import StartPage from './home'; 
import '../App.css';
import { Booking } from './booking.js';
import { PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Sittings from './sittings';
import Contact from './contact';

class App extends React.Component {
    render() {
        return(
         <div>
            <Router>
             <div>
             
                <ul>
                  <li><Link to="/Booking">Reserve</Link></li>
                  <li><Link to="/Contact">Contact</Link></li>
                </ul>

                <Route path="/" component={StartPage} exact/>
                <Route path="/Booking" component={Booking} />
                <Route path="/Contact" component={Contact} />
              
              </div>
            </Router>
             
          </div>
        );
    }
}

export default App;
