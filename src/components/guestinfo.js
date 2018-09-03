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
            <input type="text" name="name" placeholder={this.state.name} onChange={this.props.handlePersonChange} required />
            <input type="text" name="email" placeholder={this.state.email} onChange={this.props.handlePersonChange} required />
            <input type="text" name="phoneNumber" placeholder={this.state.phoneNumber} onChange={this.props.handlePersonChange} required />
          <div id="flexwhut">
              <div id="checkbox">
                  <input type="checkbox" required/>
              </div>
              <div id="termsText">
                <p>I accept to the <a href="#">Terms & Conditions</a> regarding my personal data.</p>
              </div>
          </div>
            <input type="submit" value="Send" className="submitButton"/>
        </form>
        
    </div>
	)
}

};

export default Guestinfo;