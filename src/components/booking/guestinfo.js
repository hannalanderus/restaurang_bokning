import React from 'react';


/* Component with inputfields for guestinformation. 
Events passed as props from booking.js */ 
class Guestinfo extends React.Component {


  render(){
  	return(
  		<div>     
        <form id="reservationInfo" onSubmit={this.props.handlePersonSubmit}>  
          <label>Name</label>   
          <input type="text" name="name" placeholder="Full name" onChange={this.props.handlePersonChange} required />
          
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" onChange={this.props.handlePersonChange} required />
          
          <label>Phone Number</label>
          <input type="text" name="phoneNumber" placeholder="PhoneNumber" onChange={this.props.handlePersonChange} required />
            
          <div id="flexGdprBox">
            <div id="checkbox">
                <input type="checkbox" required/>
            </div>
            <div id="termsText">
              <p>I accept to the <a href={null}>Terms & Conditions</a> regarding my personal data.</p>
            </div>
          </div>

          <div className="submitButtonDiv">
            <input type="submit" value="Send" className="submitButton"/>
          </div>
        </form> 
      </div>
  	)
  }
};

export default Guestinfo;