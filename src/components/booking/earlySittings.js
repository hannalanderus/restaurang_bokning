import React from 'react';

/* Creates button for the early sittings.
With props connects with booking.js to call function showEarlyTime */
const EarlySittings = (props) => {
	return(
		<button id={props.EarlyButtonID} className={props.timeButtonClass} onClick={props.event}  value="18:00:00">18:00</button>
	)
}

export default EarlySittings;


