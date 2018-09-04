import React from 'react';
import {
  Link
} from 'react-router-dom';

function NavMenu(){
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

export default NavMenu;