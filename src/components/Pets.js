import React, { Component } from 'react';
import Pet from './Pet';
import Header from './Header';


class Pets extends Component {
  render() {
    return (
      <div>
        { Header }
        { Pet }
      </div>
    );
  }
}


export default Pets;