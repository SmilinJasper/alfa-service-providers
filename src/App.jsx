import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/pages/home';
import MosquitoNet from './components/pages/mosquitoNet';

class App extends Component {

  state = {  }

  render() { 
    return ( 

        <Router>

        <Switch>

          <Route exact path='/' strict component={withRouter(Home)} />
          <Route exact path='/mosquito-net' strict component={withRouter(MosquitoNet)} />

        </Switch>

        </Router>

    );
  }

}
 
export default App;

