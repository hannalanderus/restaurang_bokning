import React from 'react';
import NavMenu from '../navMenu';
import {
  Link
} from 'react-router-dom';

function StartPageHeader (){
            
    return(
        <div id="headerWrapper">
            <header id="headerContent">
               <NavMenu />
                    <div id="restaurantTitle">
                        <Link to="/"><h1>Juana La Loca</h1></Link>
                        <h2>Restaurant & Bar</h2>
                    </div>
            </header>
        </div>
    );  
}

export default StartPageHeader;