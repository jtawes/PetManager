import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PetManager from './PetManager';
import Pets from './containers/Pets/Pets';



class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/Pets" component={Pets} />
          <Route path="/" exact component={PetManager} />
        </Switch>
      </div>
    );
  }
}

export default App;
