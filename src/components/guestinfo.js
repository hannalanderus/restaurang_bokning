import React from 'react';
import ChosenSitting from './chosenSitting';

class Guestinfo extends React.Component {
 constructor (props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
    };
  }


render(){
	return(
		<div>
      <ChosenSitting />
            <form id="reservationInfo" onSubmit={this.props.handlePersonSubmit}>     
                <input type="text" name="name" placeholder="Full name" value={this.state.value} onChange={this.props.handlePersonChange} />
                <input type="text" name="email" placeholder="Email" onChange={this.props.handlePersonChange}/>
                <input type="text" name="phoneNumber" placeholder="Phone number" onChange={this.props.handlePersonChange}/>
                <input type="submit" value="Send" className="submitButton"/>
            </form>
        </div>
	)
}

};

export default Guestinfo;