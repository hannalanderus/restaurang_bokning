
import React from 'react';
import NavMenu from '../navMenu.js';
import {
  Link
} from 'react-router-dom';

function ContactHeader (){ 
    return(
        <div id="headerWrapper">
            <header id="headerContact">
                <NavMenu />
                    <div id="restaurantTitle">
                        <Link to="/"><h1>Juana La Loca</h1></Link>
                        <h2>Restaurant & Bar</h2>
                    </div>
            </header>
        </div>
    );
}

export default ContactHeader;