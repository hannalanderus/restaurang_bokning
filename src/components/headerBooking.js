
import React from 'react';
import NavMenu from './navMenu';


function BookingHeader (){
            
        return(
        
                <div id="headerWrapper">       
                        <header id="headerBooking">
                        <NavMenu />
                                <div id="restaurantTitle">
                                        <p>Calle 90# 11-13, Bogotá, Colombia</p>
                                        <h1>Juana La Loca</h1>
                                        <h2>Restaurant & Bar</h2>
                                </div>
                        </header>
                </div>
        
        );
    
}

export default BookingHeader;