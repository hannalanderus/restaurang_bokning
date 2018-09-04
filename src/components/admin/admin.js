import React from 'react';
import EditPopUp from './editPopUp';

class AdminPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
  			startDate: "",
            time: "",
            guests: "",
            name: "",
            email: "",
            phoneNumber: "",
            guestId: "",
            bookingId: "",
            EarlySelected: null,
            LateSelected: null
		};
/* Bind events to the functions to be called, that are being refered without method () */
		this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.changeGuestInfo = this.changeGuestInfo.bind(this);
		this.showEarlyTime = this.showEarlyTime.bind(this);
		this.showLateTime = this.showLateTime.bind(this);

	}

/* Runs getEditPopUpWithInfo function after the rendering is done.
Window is being used in this case because the function is called inside template literals ( `` ).
Inside template literals 'this' looses its connection the class AdminPage. 
Instead, 'this' points on window. 
 */
componentDidMount(){
	window.getEditPopUpWithInfo = (guestId, bookingId, date, name, time, guests, email, phone) => {
		this.setState({
			name: name,
			email: email,
			phoneNumber: phone,    			
			startDate: date,
			time: time,
			guests: guests,
			guestId: guestId,
			bookingId: bookingId,
		});

		let modal = document.getElementById('myModal');
		modal.style.display = "block";
	}

	window.deleteBooking = (id) => {
		window.confirm('Are you sure you want to delete this booking?');
			let bookingID = {
				id: id,
			}
	
	return fetch('http://localhost:8888/phpfiles/adminDelete.php', {
	    method: "POST",
	    mode: "no-cors",
	    body: JSON.stringify(bookingID)
	    })
	    .then((response) => {
	      this.getBookings();
	    })
	    .catch((error) => {
	      console.error(error);
	    })
	}

}

/* Handles guest information from inputfielts. 
Target indicates which inputfield is being typed in. */
changeGuestInfo(e){
	this.setState({ 
    	[e.target.name]: e.target.value 
	});
}

handleEdit(e){
	e.preventDefault();
	this.editBooking();
}

/* All information from an edited booking is declared inside an object called editedInfo. 
Thanks to JSON.stringify the object is passed as a string into database (through adminUpdate.php) */
editBooking(){		
    let editedInfo = {
        name: this.state.name,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        guestId: this.state.guestId,
        startDate: this.state.startDate,
  		time: this.state.time,
  		guests: this.state.guests,
  		bookingId: this.state.bookingId
    }

    return fetch('http://localhost:8888/phpfiles/adminUpdate.php', {
	    method: "POST",
	    mode: "no-cors",
	    body: JSON.stringify(editedInfo)
	    })
    	.then((response) => {
	        this.closePopUp();
	        this.getBookings(); /* New fetch when the POST is succesfull */
      	})
      	.catch((error) => {
        console.error(error);
      	})
}

/* Fetches all bookings from database, with complete info */

getBookings(){
	fetch('http://localhost:8888/phpfiles/personapi.php')
	.then((response) => response.json())

   /* When fetch is succesfull then bookinginformation is being send to function 'listBookings' */
   .then((response) => {
      this.listBookings(response); /* Response = bookinginformation object */
    })
    .catch((error) => {
      console.error(error);
    })
}

/* Before render fetch all bookings */ 
componentWillMount(){
	this.getBookings();
}

/* Recieves response with bookinginformation and loops through it.
   Generates table row for each booking.
   Dataset is being used to be able to pass multiple values into getEditPopUpWithInfo function */
listBookings(response){
	let tableBody = document.getElementById('tableBody');
	let content = ``;

	for(let booking of response){
		content += `<tr class="table-light">
			<td>${booking.datum}</td>
			<td>${booking.namn}</td>
			<td>${booking.tid}</td>
			<td>${booking.antal_personer}</td>
			<td>${booking.epost}</td>
			<td>${booking.telefon}</td>
			<td><button class="adminButton" id=${booking.person_id} 
											data-booking=${booking.id}
											data-date=${booking.datum} 
											data-name=${booking.namn} 
											data-time=${booking.tid} 
											data-guests=${booking.antal_personer}
											data-email=${booking.epost}
											data-phone=${booking.telefon}
			onClick="getEditPopUpWithInfo(	this.id,
											this.dataset.booking,
											this.dataset.date, 
											this.dataset.name, 
											this.dataset.time,
											this.dataset.guests,
											this.dataset.email,
											this.dataset.phone)">
											<i class="fas fa-edit fa-2x"></i></button></td>
			<td><button class="adminButton" id=${booking.id} onClick="deleteBooking(this.id)">
			<i class="fas fa-trash-alt fa-2x"></i>
			</button></td>
			</tr>
			`;
	} // for

	tableBody.innerHTML = content;
} // listBookings

/* Closes PopUp edit box by changing styling to display none when clicked close */
closePopUp(){	
	let modal = document.getElementById('myModal');
	modal.style.display = "none";
}

/* HandleChangeDatePicker updates the initial state with selected date from datepicker when clicked */
handleChangeDatePicker(date){
	this.setState({
	  startDate: date.format('YYYY-MM-DD'),
	});

 /* Fetching all booking information from database based on chosen date */
	fetch('http://localhost:8888/phpfiles/bokningsapi.php?date=' + this.state.startDate)
    .then((response) => response.json())
    .then((response) => {
      this.checkAvailableSittings(response);
    })
    .catch((error) => {
      console.error(error);
    })

}

/*Funciton receives value "18:00:00" when earlybutton is clicked. 
And sets new state for time,
also changes button styling to be able to see which one is clicked/choosen. */
showEarlyTime(){	
	let EarlyButton = document.getElementById('EarlyButton');
    let EarlyButtonValue = EarlyButton.value; 

    this.setState({ 
        time: EarlyButtonValue,
        EarlySelected: 'selected',
        LateSelected: null
    });
}


/*Funciton receives value "21:00:00" when latebutton is clicked. 
And sets new state for time,
also changes button styling to be able to see which one is clicked/choosen. */
showLateTime(){
	let LateButton = document.getElementById('LateButton');
    let LateButtonValue = LateButton.value; 

     this.setState({ 
        time: LateButtonValue,
        LateSelected: 'selected',
        EarlySelected: null
    });
}


/* Calculates available sittings based on the response from the fetch
 (that happens in handleChangeDatePicker).
 And changes states for timebuttons to be shown or not */
checkAvailableSittings (response){

	if(response.earlyBookings < 15 ){
    	let EarlyButton = document.getElementById('EarlyButton');
    	 
    	EarlyButton.style.display = "block";
	}

	if(response.earlyBookings === 15){
    	let EarlyButton = document.getElementById('EarlyButton');
    	EarlyButton.style.display = "none";
	}

	if(response.lateBookings < 15){
  		let LateButton = document.getElementById('LateButton');
    	
    	LateButton.style.display = "block";
	}

	if(response.lateBookings === 15){
		let LateButton = document.getElementById('LateButton');
    	LateButton.style.display = "none";
	}
};


	render() {
        return(
          <div id="admin">
          <EditPopUp 	modelID='myModal' 
			          	spanID='close'
			          	event={() => this.closePopUp()} 
			        	handleChangeDatePicker={this.handleChangeDatePicker} 
			        	changeGuestInfo={this.changeGuestInfo} 
			        	Edit={this.handleEdit}
			        	showEarlyTime={this.showEarlyTime} 
			        	showLateTime={this.showLateTime}
			         	Date={this.state.startDate} 
			         	Guests={this.state.guests} 
			         	Time={this.state.time}
			        	Name={this.state.name} 
			        	Email={this.state.email} 
			        	PhoneNumber={this.state.phoneNumber} 
			           	EarlyButtonID='EarlyButton' 
			           	LateButtonID='LateButton' 
			           	EarlySelected={this.state.EarlySelected} 
			           	LateSelected={this.state.LateSelected}/>
           
           <h2>Admin</h2>
	           <table className="table table-hover">
					<thead>
						<tr className="table-primary">
							<th>Date</th>
							<th>Name</th>
							<th>Time</th>
							<th>Guests</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody id='tableBody'>
					
					</tbody>
				</table>
          </div>
        );
    }
};
export default AdminPage;
