import React from 'react';
import StartPageHeader from './header';
import StartPageMain from './main';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class StartPage extends React.Component {
    render() {
        
        return(
          <div>
            <StartPageHeader />
            <StartPageMain />
          </div>
        );
    }
};

export default StartPage;