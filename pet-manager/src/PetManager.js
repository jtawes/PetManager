import React, { Component } from 'react';
import './PetManager.css';

class PetManager extends Component {
  render() {
    return (
      <div className="App">
        <nav></nav>
        <header className="App-header">          
          <h1 className="App-title">Welcome to PetManager</h1>
        </header>
        <img className="hero-image" src="./img/pet-hero.jpg" alt="cat and dog" />
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
