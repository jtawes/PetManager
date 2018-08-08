import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PetManager from './PetManager';
import Pets from './Pets';
import NotFound from './NotFound';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={PetManager} />
			<Route path="/pets" component={Pets} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;