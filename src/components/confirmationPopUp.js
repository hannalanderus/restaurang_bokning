import React from 'react';

const ConfirmationPopUp = (props) => {
	return(  
      <div id={props.modelID} className="modal">
        
        <div className="modal-content">
          <span id={props.spanID} onClick={props.event} className="close">&times;</span>
            <div className="flex">
              <p>Juana La Loca has recieved your reservation</p>
            </div>
        </div>
      </div> 
	)

};

export default ConfirmationPopUp;