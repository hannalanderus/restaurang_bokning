import React from 'react';

class Guestinfo extends React.Component {
	render(){

		return(
			<div>
				<form> 
					<input type="text" placeHolder="Full name"></input>
					<input type="text" placeHolder="email"></input>
					<input type="text" placeHolder="Phone number"></input>
				</form>
			</div>
		)
	}

};

export default Guestinfo;