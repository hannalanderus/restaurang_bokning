import React from 'react';
import NavMenu from '../navMenu.js';
import {
  Link
} from 'react-router-dom';

function BookingHeader (){       
    return(
        <div id="headerWrapper">       
            <header id="headerBooking">
            <NavMenu />
                <div id="restaurantTitle">
                    <p>Calle 90# 11-13, Bogotá, Colombia</p>
                     <Link to="/"><h1>Juana La Loca</h1></Link>
                    <h2>Restaurant & Bar</h2>
                </div>
            </header>
        </div>
    );
}

export default BookingHeader;