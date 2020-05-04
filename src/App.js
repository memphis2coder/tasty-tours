import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './styles/App.scss';

import Header from './components/header/Header';
import Contact from './pages/Contact';
import Story from './pages/Story';
import Food from './pages/Food';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <div className="container-fluid">
            <div className="main">
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/story' component={Story} />
                <Route path='/food' component={Food} />
                <Route path='/contact' component={Contact} />
              </Switch>
            </div>
          </div>
      </div>
    </Router>
  );
}
export default App;

