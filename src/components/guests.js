import React from 'react';
import Guestinfo from './guestinfo';
class Guests extends React.Component {
	render(){

		return(
			<div>
				<form> 
					<select class="form-control" id="guestsAmount">
					      <option>1</option>
					      <option>2</option>
					      <option>3</option>
					      <option>4</option>
					      <option>5</option>
					      <option>6</option>
				    </select>
				</form>
				<Guestinfo />
			</div>
		)
	}

};

export default Guests;