import React from 'react';

class Guestinfo extends React.Component {
 constructor (props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      date: "",
      sitting: "",
      guests: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 	
  }

handleChange(e) {
	 this.setState({ [e.target.name]: e.target.value });
}

handleSubmit(e) {
	e.preventDefault();
	this.postInfo()

}

postInfo() {
	let data = {
    name: this.state.name,
    email: this.state.email,
    phoneNumber: this.state.phoneNumber,
    date: "",
    sitting: "",
    guests: ""

	}

	console.log(data)
	
      return fetch('http://localhost:8888/phpfiles/create.php', {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
    }


render(){
	return(
		<div>
			<form onSubmit={this.handleSubmit}>	 
				<input type="text" name="name" placeholder="Full name" value={this.state.value} onChange={this.handleChange} />
				<input type="text" name="email" placeholder="email" onChange={this.handleChange}/>
				<input type="text" name="phoneNumber" placeholder="Phone number" onChange={this.handleChange}/>
				<input type="submit" value="Send"/>
			</form>
		</div>
	)
}

};

export default Guestinfo;