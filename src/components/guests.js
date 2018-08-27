import React from 'react';
class Guests extends React.Component {
	render(){

		return(
			<div>
				<label for="guests">Number of people</label>
					<form> 	  
						<select className="form-control" id="guestsAmount" name="guests">
									<option>Number of people</option>
						      <option>1 person</option>
						      <option>2 persons</option>
						      <option>3 persons</option>
						      <option>4 persons</option>
						      <option>5 persons</option>
						      <option>6 persons</option>
					    </select>
					</form>
			</div>
		)
	}

};

export default Guests;