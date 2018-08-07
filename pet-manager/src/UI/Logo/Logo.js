import React from 'react';

import petsLogo from '../../img/logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={petsLogo} alt="MyPets"/>
  </div>
);

export default logo;