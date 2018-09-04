import React from 'react';
import ContactHeader from './headerContact';
import ContactPageMain from './mainContact';

/* Displays the complete contact page */
function Contact (){
	return (
	    <div>
	        <ContactHeader />
	        <ContactPageMain />    
	    </div>
	);
};

export default Contact;