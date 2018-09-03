import React from 'react';
import StartPage from './home';
import {
  Link
} from 'react-router-dom';


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