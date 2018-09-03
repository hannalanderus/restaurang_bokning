import React from 'react';


const ChosenSitting = (props) => {
            
        return(
        
                <div id="ChosenSitting">
                  <p>{props.chosenDate} {props.chosenTime} {props.chosenGuests} persons</p>                          
                </div>
        
        );
    
}

export default ChosenSitting;