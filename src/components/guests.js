import React, { Component } from 'react';

const Guests = (props) => {
		return(
			<div> 
				<label htmlFor="guests">Number of guests</label>
				 <form> 	
					<select id={props.SelectID} name="guests" className="form-control" onChange={props.event}>
					      <option value="1 guest">1 guest</option>
					      <option value="2 guests">2 guests</option>
					      <option value="3 guests">3 guests</option>
					      <option value="4 guests">4 guests</option>
					      <option value="5 guests">5 guests</option>
					      <option value="6 guests">6 guests</option>
				    </select>
				  </form>
			</div>
		)
};

export default Guests;