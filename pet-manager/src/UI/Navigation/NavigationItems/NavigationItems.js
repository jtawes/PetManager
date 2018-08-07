import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
  <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>Pet Manager</NavigationItem>
      {props.isAuthenticated ? <NavigationItem link="/orders">Pets</NavigationItem> : null}
      {props.isAuthenticated
        ? <NavigationItem link="/logout">Logout</NavigationItem>
        : <NavigationItem link="/auth">Login/Sign Up</NavigationItem>}
  </ul>

);

export default navigationItems;
