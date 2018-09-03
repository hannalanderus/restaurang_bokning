import React from 'react';

const LateSittings = (props) => {
	return(
		<button id={props.LateButtonID} className={props.timeButtonClass} onClick={props.event} value="21:00:00">21:00</button>
		)
	}

export default LateSittings;



