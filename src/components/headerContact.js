
import React from 'react';
import NavMenu from './navMenu';


function ContactHeader (){
            
        return(
        
                <div id="headerWrapper">
                        <header id="headerContact">
                         <NavMenu />
                                <div id="restaurantTitle">
                                        <h1>Juana La Loca</h1>
                                        <h2>Restaurant & Bar</h2>
                                </div>
                        </header>
                </div>
        
        );
    
}

export default ContactHeader;