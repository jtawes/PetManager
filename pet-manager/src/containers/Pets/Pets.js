import React, { Component } from 'react';
import './Pets.css';
import Pet from './containers/Pet/Pet';
import Toolbar from './UI/Toolbar/'

class Pets extends Component {
  render() {
    return (
      <div className="Pets">
        { Toolbar }
        { Pet }
      </div>
    );
  }
}

export default Pets;