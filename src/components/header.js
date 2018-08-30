import React from 'react';
import NavMenu from './navMenu';

function StartPageHeader (){
            
        return(
        
                <div id="headerWrapper">
                        <header id="headerContent">
                           <NavMenu />
                                <div id="restaurantTitle">
                                <h1>Juana La Loca</h1>
                                <h2>Restaurant & Bar</h2>
                                </div>
                        </header>
                </div>
        
        );
    
}

export default StartPageHeader;