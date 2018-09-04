import React from 'react';

/* Component with inputfields for guestinformation. 
Events passed as props from bookingCalender.js 
where it is given a function (numberofguest) to call */ 
const Guests = (props) => {
	return(
		<div> 
			<label>Number of people</label>
				<form> 	
					<select id={props.SelectID} name="guests" className="form-control" onChange={props.event}>
					      <option value="1">1</option>
					      <option value="2">2</option>
					      <option value="3">3</option>
					      <option value="4">4</option>
					      <option value="5">5</option>
					      <option value="6">6</option>
				    </select>
				</form>
		</div>
	)
};

export default Guests;