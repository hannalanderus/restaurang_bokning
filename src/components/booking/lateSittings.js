import React from 'react';

/* Creates button for the late sittings.
With props connects with booking.js to call function showLateTime */
const LateSittings = (props) => {
	return(
		<button id={props.LateButtonID} className={props.timeButtonClass} onClick={props.event} value="21:00:00">21:00</button>
	)
}

export default LateSittings;



