import React, { Component } from 'react';
import Contact from './contact';
import StartPage from './home'; 
import '../App.css';
import { Booking } from './booking.js';
import { PropTypes } from 'react';
import AdminPage from '../admin/admin.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



class App extends React.Component {
    render() {
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
}

export default App;