import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home';
import MosquitoNet from './components/pages/mosquitoNet';

class App extends Component {

  state = {  }

  render() { 
    return ( 

        <Router>

        <Switch>

          <Route path='/' exact strict component={Home} />
          <Route path='/mosquito-net' exact strict component={MosquitoNet} />

        </Switch>

        </Router>

    );
  }

}
 
export default App;

