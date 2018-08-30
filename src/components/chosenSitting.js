import React from 'react';


const ChosenSitting = (props) => {
            
        return(
        
                <div id="ChosenSitting">
                  <p>{props.chosenDate} {props.chosenTime} {props.chosenGuests}</p>                          
                </div>
        
        );
    
}

export default ChosenSitting;