import React, { Component } from 'react';
import StartPage from './home'; 
import { Booking } from './booking.js';
import { PropTypes } from 'react';
import Contact from './contact';
import {
  Link
} from 'react-router-dom';



class NavMenu extends React.Component {
  render() {
    return (
        <div>   
           <nav>            
              <ul>
                <Link to="/">Home</Link>
                <Link to="/Booking">Reserve</Link>
                <Link to="/Contact">Contact</Link>
              </ul>        
            </nav>                       
          </div>  
      )
  }
}

export default NavMenu;