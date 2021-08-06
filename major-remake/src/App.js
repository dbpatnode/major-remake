import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Header from '../src/components/header/header.component'
import HomePage from '../src/components/homepage/homepage.component'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>      
    </div>
  );
}

export default App;
