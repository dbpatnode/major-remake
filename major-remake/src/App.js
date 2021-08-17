import React from 'react';
import "./fontello/css/fontello.css"
import { Switch, Route } from 'react-router-dom';
import Header from '../src/components/header/header.component'
import LandingPage from '../src/components/landingpage/landingpage.component'
import Resume from '../src/components/resume/resume.component'
import Projects from '../src/components/projects/projects.component'
import Footer from '../src/components/footer/footer.component'

class App extends React.Component {
render() {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/resume' component={Resume}/> 
          <Route path='/projects' component={Projects} />
          {/* <Route path='/contact' component={HomePage} resumeData={resumeData}/> */}
          
        </Switch>
        <Footer/>    
      </div>
    );
  }
}

export default App;
