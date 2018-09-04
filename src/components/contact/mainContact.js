import React from 'react';
import Footer from '../footer';
import OpeningHours from './openingHours';
import Map from './map';

/* Displays the complete main section on contact page */
function ContactPageMain() {
  return (
    <div className="mainWrapper">
      <main className="mainContact">

        <div id="makeReservationImage">
          <img src={require("../images/phone.png")} alt="Phone"/>
        </div>

        <div className="descriptionBox">
          <h2>Make your reservation at Juana La Loca</h2>
            <p>Make yourself comfortable in Juana La Loca. Reserve a table for yourself
            and your beloved ones and let us take you on culinary journey through
            the story Juana La Loca wants to tell. Just give us a call during opening hours. 
            You will reach us at the following telephone number:</p>
            <p id="reachUs">Reach us at</p>
            <span><a href="057 125 67 500">057 125 67 500</a></span>
        </div>

        <OpeningHours />
        <Map />

      </main>
      <Footer />
    </div>    
  );   
};

export default ContactPageMain;