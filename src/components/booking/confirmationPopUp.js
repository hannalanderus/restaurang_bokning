import React from 'react';
import {
  Link
} from 'react-router-dom';

/* Creates a pop up with booking confirmation.
When the pop up is closed it links the user to startpage */
const ConfirmationPopUp = (props) => {
	return(  
      <div id={props.modelID} className="modal">
        
        <div className="modal-content">
          <Link to="/"><span id={props.spanID} onClick={props.event} className="close">&times;</span></Link>
            <div className="flex">
              <p>Juana La Loca has recieved your reservation</p>
            </div>
        </div>
      </div> 
	)
};

export default ConfirmationPopUp;