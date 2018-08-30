import React from 'react';
import EditPopUp from '../components/editPopUp';
import moment from 'moment';


window.deleteBooking = (id) => {
		let bookingID = id;
		
		return fetch('http://localhost:8888/phpfiles/admin.php?bookingID=' + bookingID, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        		}
      	}
	)

    .then((response) => response.json())
    .then((response) => {
      console.log(bookingID)

    })
    .catch((error) => {
      console.error(error);
    })
}

window.getEditPopUp = (bookingID, date, name, time, guests, email, phone) => {
	console.log(bookingID, date, name, time, guests, email, phone);
		let modal = document.getElementById('myModal');
		modal.style.display = "block";
	}



class AdminPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
  			startDate: moment(),
            time: '',
            guests: "1",
            name: "Full Name",
            email: "Email",
            phoneNumber: "Phonenumber",
		};

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
			<td><button id=${booking.id} 
						data-date=${booking.datum} 
						data-name=${booking.namn} 
						data-time=${booking.tid} 
						data-guests=${booking.antal_personer}
						data-email=${booking.epost}
						data-phone=${booking.telefon}
			onClick="getEditPopUp(	this.id,
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

	render() {
        return(
          <div id="admin">
          <EditPopUp modelID='myModal' spanID='close' event={() => this.closePopUp()} />
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