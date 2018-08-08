import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Pets from './Pets';
import base from '../base';

class PetManager extends Component {
  state = {
    pets: {},
    owner: {}
  };


  render() {
    return (
      <div className="PetManager">
        < Header />
        <img className="hero-image" src="./images/pet-hero.jpg" alt="cat and dog" />
        <p>We know how much you love your pets and with Pet Manager you can now keep all of your pet's information in one place! Track appointments, contacts and important health information. You can even create a photo gallery!"</p>
        <h2 className="App-intro">
          Sign up or Login.
        </h2>
        <quote>"Animals are such agreeable friends - they ask no questions, they pass no criticisms."</quote>
        <cite> ~ George Elliot </cite>
      </div>
    );
  }
}

export default PetManager;
