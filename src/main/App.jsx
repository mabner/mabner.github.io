import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';

// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Logo from '../components/Logo/Logo';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				{/* <img src={logo} className='App-logo' alt='logo' /> */}
				<h1>Marcos Leite</h1>
				<p className='announcement'>Coming soon...</p>
			</header>
		</div>
	);
}

export default App;
