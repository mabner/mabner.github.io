import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/Home/Home';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	);
};
