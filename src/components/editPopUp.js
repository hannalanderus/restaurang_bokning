import React from 'react';
import { BookingCalendar } from './bookingCalendar.js';
import GuestInfo from './guestinfo';



const EditPopUp = (props) => {
	return(  
      <div id={props.modelID} className="modal">
        
        <div className="modal-content">
          <span id={props.spanID} onClick={props.event} className="close">&times;</span>
            <div className="flex">
              <BookingCalendar />
              <GuestInfo />
            </div>
        </div>
      </div> 
	)

};

export default EditPopUp;