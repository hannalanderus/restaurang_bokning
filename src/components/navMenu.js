import React, { Component } from 'react';
import StartPage from './home/home.js'; 
import { Booking } from './booking/booking.js';
import { PropTypes } from 'react';
import Contact from './contact/contact.js';
import {
  Link
} from 'react-router-dom';



class NavMenu extends React.Component {
  render() {
    return (
        <div>   
           <nav>            
              <ul>
                <Link to="/">HOME</Link>
                <Link to="/Booking">RESERVE</Link>
                <Link to="/Contact">CONTACT</Link>
              </ul>        
            </nav>                       
          </div>  
      )
  }
}

export default NavMenu;