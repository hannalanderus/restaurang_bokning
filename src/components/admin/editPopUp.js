import React from 'react';
import DatePicker from 'react-datepicker';

/* Creates pop up with inputfields to edit a booking.
Passing click and onchange events as props from admin.js
*/
const EditPopUp = (props) => {
	return(  
    <div id={props.modelID} className="modal">
      <div className="modal-content">
        <span id={props.spanID} onClick={props.event} className="close">&times;</span>
          <div className="flex">

              <div className="bookingInfoWhenEdit">
                <p>Sitting booked for {props.Guests} guests on the {props.Date} at {props.Time}</p>
              </div>

              <div>
                <label htmlFor="guests">Number of guests</label>
                  <form>   
                    <select id='guestsAmount' name="guests" className="form-control" onChange={props.changeGuestInfo}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                  </form>

                <label>Date</label>

                <DatePicker
                    dateFormat="YYYY/MM/DD"
                    selected={props.startDate}
                    onChange={props.handleChangeDatePicker} />

                <label>Time</label>
                  <button className={props.EarlySelected} id={props.EarlyButtonID} onClick={props.showEarlyTime} value="18:00:00">18:00</button>
                  <button className={props.LateSelected} id={props.LateButtonID} onClick={props.showLateTime} value="21:00:00">21:00</button>
              </div>

            <form id="reservationInfo" onSubmit={props.Edit}> 
                <label>Name</label>    
                <input type="text" name="name" placeholder={props.Name} value={props.value} onChange={props.changeGuestInfo} />
                <label>Email</label>
                <input type="text" name="email" placeholder={props.Email} onChange={props.changeGuestInfo} />
                <label>Phone Number</label>
                <input type="text" name="phoneNumber" placeholder={props.PhoneNumber} onChange={this.changeGuestInfo} />
                <input type="submit" value="Save" className="submitButton" />
            </form>
          </div>
      </div>
    </div> 
	)

};

export default EditPopUp;