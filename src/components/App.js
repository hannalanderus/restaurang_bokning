import React from 'react';
import Contact from './contact/contact.js';
import StartPage from './home/home.js'; 
import '../App.css';
import { Booking } from './booking/booking.js';
import AdminPage from './admin/admin.js';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return(
     <Router>
        <div>
            <Route path="/" component={StartPage} exact/>
            <Route path="/AdminPage" component={AdminPage} />
            <Route path="/Booking" component={Booking} />
            <Route path="/Contact" component={Contact} /> 
          </div>
      </Router>
  );
}


export default App;