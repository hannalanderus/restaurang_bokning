import React from 'react';
import StartPageHeader from './header';
import StartPageMain from './main';

/* Displays the complete landning page */
class StartPage extends React.Component {
  render(){
    return(
      <div>
        <StartPageHeader />
        <StartPageMain />
      </div>
    );
  }
};

export default StartPage;