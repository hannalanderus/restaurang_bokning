import React from 'react';
import EditPopUp from '../components/editPopUp';
import moment from 'moment';

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
            bookingId: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.changeGuestInfo = this.changeGuestInfo.bind(this);
		this.showEarlyTime = this.showEarlyTime.bind(this);
		this.showLateTime = this.showLateTime.bind(this);

	}

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
				console.log(guestId, bookingId, date, name, time, guests, email, phone);
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
		      console.log(bookingID)
		      this.getBookings();

		    })
		    .catch((error) => {
		      console.error(error);
		    })
		}

	}

	changeGuestInfo(e){
		this.setState({ 
        	[e.target.name]: e.target.value 
    	});
	}

	handleEdit(e){
   		e.preventDefault();
		this.editBooking();
	}

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

	    console.log(editedInfo);

	     return fetch('http://localhost:8888/phpfiles/adminUpdate.php', {
	      method: "POST",
	      mode: "no-cors",
	      body: JSON.stringify(editedInfo)
	      })
	      .then((response) => {
	        console.log(editedInfo);
	        this.closePopUp();
	        this.getBookings();
	      })
	      .catch((error) => {
	        console.error(error);
	      })
	  }

	getBookings(){
	   fetch('http://localhost:8888/phpfiles/personapi.php')
	   .then((response) => response.json())
	   .then((response) => {
	   	console.log(response);
	      this.listBookings(response);
	    })
	    .catch((error) => {
	      console.error(error);
	    })
	}

	componentWillMount(){
		this.getBookings();
	}

	listBookings(response){
		console.log('in search of ID', response)
		let tableBody = document.getElementById('tableBody');
		let content = ``;

		for(let booking of response){
	
			content += `<tr>
			<td>${booking.datum}</td>
			<td>${booking.namn}</td>
			<td>${booking.tid}</td>
			<td>${booking.antal_personer}</td>
			<td>${booking.epost}</td>
			<td>${booking.telefon}</td>
			<td><button id=${booking.person_id} 
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
									this.dataset.phone)">Edit</button></td>
			<td><button id=${booking.id} onClick="deleteBooking(this.id)">Delete</button></td>
			</tr>
			`;
		} // for

		tableBody.innerHTML = content;
	} // listBookings


closePopUp(){	
		let modal = document.getElementById('myModal');
		modal.style.display = "none";
	}


handleChange(date){
	this.setState({
	  startDate: date.format('YYYY-MM-DD'),
	});

    let bookingDate = date.format('YYYY-MM-DD');

	 fetch('http://localhost:8888/phpfiles/bokningsapi.php?date=' + bookingDate)
    .then((response) => response.json())
    .then((response) => {
      this.checkAvailableSittings(response);

    })
    .catch((error) => {
      console.error(error);
    })

}
showEarlyTime(){	
	let EarlyButton = document.getElementById('EarlyButton');
    let EarlyButtonValue = EarlyButton.value; 
     console.log(EarlyButtonValue);

     this.setState({ 
        	time: EarlyButtonValue 
    	});
}

showLateTime(){
	let LateButton = document.getElementById('LateButton');
    let LateButtonValue = LateButton.value; 
     console.log(LateButtonValue);

     this.setState({ 
        	time: LateButtonValue 
    	});
}

checkAvailableSittings (response){
 console.log(response.earlyBookings);

  if(response.earlyBookings < 15 ){
     let EarlyButton = document.getElementById('EarlyButton');
     let EarlyButtonValue = EarlyButton.value; 
    
     EarlyButton.style.display = "block";

     console.log('hej', EarlyButtonValue);
 }

  if(response.earlyBookings === 15) {
    console.log('18:00 är fullt!');
    let EarlyButton = document.getElementById('EarlyButton');
    EarlyButton.style.display = "none";
  }

  if(response.lateBookings < 15){
  	let LateButton = document.getElementById('LateButton');
    let LateButtonValue = LateButton.value; 
    
    LateButton.style.display = "block";

     console.log('hello', LateButtonValue);
  }

  if(response.lateBookings === 15){
    console.log('21:00 är fullt!');
   let LateButton = document.getElementById('LateButton');
    LateButton.style.display = "none";
  }
};


	render() {
        return(
          <div id="admin">
          <EditPopUp modelID='myModal' spanID='close' event={() => this.closePopUp()} 
           handleChange={this.handleChange} Change={this.changeGuestInfo} Edit={this.handleEdit}
           showEarlyTime={this.showEarlyTime} showLateTime={this.showLateTime}
           Date={this.state.startDate} Guests={this.state.guests} Time={this.state.time}
           Name={this.state.name} Email={this.state.email} PhoneNumber={this.state.phoneNumber} 
           EarlyButtonID='EarlyButton' LateButtonID='LateButton' />
           <h2>Admin</h2>
	           <table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Name</th>
							<th>Time</th>
							<th>Persons</th>
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