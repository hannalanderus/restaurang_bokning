import React from 'react';
import Guests from './guests'

class Sittings extends React.Component {

	render(){

		return(
			<div>
				<h2>Avaliable time</h2>
				<button id="earlyButton">18:00</button>
				<button id="lateButton">21:00</button>
				<Guests />
			</div>
		)
	}

}

export default Sittings;