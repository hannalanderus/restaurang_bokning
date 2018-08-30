import React from 'react';

class Guestinfo extends React.Component {
 constructor (props) {
    super(props)
    this.state = {
      name: "Full name",
      email: "Email",
      phoneNumber: "PhoneNumber",
    };
  }


render(){
	return(
		<div>     
        <form id="reservationInfo" onSubmit={this.props.handlePersonSubmit}>     
            <input type="text" name="name" placeholder={this.state.name} value={this.state.value} onChange={this.props.handlePersonChange} />
            <input type="text" name="email" placeholder={this.state.email} onChange={this.props.handlePersonChange}/>
            <input type="text" name="phoneNumber" placeholder={this.state.phoneNumber} onChange={this.props.handlePersonChange}/>
            <input type="submit" value="Send" className="submitButton"/>
        </form>
    </div>
	)
}

};

export default Guestinfo;