import React from 'react';

/* Returns paragraph with information about date, time, and number of guests in the users booking */
const ChosenSitting = (props) => {
            
	return(
		<div id="ChosenSitting">
			<p>{props.chosenDate} {props.chosenTime} {props.chosenGuests} persons</p>
		</div>
    );   
}

export default ChosenSitting;