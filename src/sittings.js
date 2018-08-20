import React from 'react';


class Sittings extends React.Component {
	  constructor(props) {
	    super(props)
	    this.state = {
		    sittings: [],
	      	visible: 'off', 
	    };

	    }


	render(){

		return(
			<div>
				<h2>Lediga tider</h2>
				<button id="earlyButton">18:00</button>
				<button id="lateButton">21:00</button>
			</div>
		)
	}

}

export default Sittings;