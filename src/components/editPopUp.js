import React from 'react';
import DatePicker from 'react-datepicker';
import EarlySittings from './earlySittings';
import LateSittings from './lateSittings';


const EditPopUp = (props) => {
	return(  
      <div id={props.modelID} className="modal">
        
        <div className="modal-content">
          <span id={props.spanID} onClick={props.event} className="close">&times;</span>
            <div className="flex">
               <div>
                <p>Sitting booked for {props.Guests} guests on the {props.Date} at {props.Time}</p>
                <label htmlFor="guests">Number of guests</label>
                 <form>   
                  <select id='guestsAmount' name="guests" className="form-control" onChange={props.Change}>
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
                    onChange={props.handleChange} />

                  <label>Time</label>
                   <button id={props.EarlyButtonID} onClick={props.showEarlyTime} value="18:00:00">18:00</button>
                   <button id={props.LateButtonID} onClick={props.showLateTime} value="21:00:00">21:00</button>
                </div>

               <form id="reservationInfo" onSubmit={props.Edit}>     
                    <input type="text" name="name" placeholder={props.Name} value={props.value} onChange={props.Change} />
                    <input type="text" name="email" placeholder={props.Email} onChange={props.Change} />
                    <input type="text" name="phoneNumber" placeholder={props.PhoneNumber} onChange={this.Change} />
                    <input type="submit" value="Save" className="submitButton" />
              </form>
            </div>
        </div>
      </div> 
	)

};

export default EditPopUp;