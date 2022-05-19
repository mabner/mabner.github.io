import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';

// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

import Logo from '../components/Logo/Logo';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';

const app = () => (
	<BrowserRouter>
		<div className="app">
			<Routes />
			<Logo />
			<Nav />
			<Home />
		</div>
	</BrowserRouter>
);

export default app;
