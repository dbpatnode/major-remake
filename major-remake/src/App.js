import React from 'react';
// import './App.scss';
import "./fontello/css/fontello.css"
import { Switch, Route } from 'react-router-dom';
import Header from '../src/components/header/header.component'
import LandingPage from '../src/components/landingpage/landingpage.component'

class App extends React.Component {
render() {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          {/* <Route path='/resume' component={HomePage} resumeData={resumeData}/>
          <Route path='/projects' component={HomePage} resumeData={resumeData}/>
          <Route path='/contact' component={HomePage} resumeData={resumeData}/> */}
          
        </Switch>      
      </div>
    );
  }
}

export default App;
