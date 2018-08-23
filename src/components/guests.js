import React, { Component } from 'react';

const Guests = (props) => {
		return(
			<div>
					<select id={props.SelectID} className="form-control" onChange={props.event}>
					      <option value="1">1</option>
					      <option value="2">2</option>
					      <option value="3">3</option>
					      <option value="4" >4</option>
					      <option value="5">5</option>
					      <option value="6">6</option>
				    </select>
			</div>
		)
};

export default Guests;