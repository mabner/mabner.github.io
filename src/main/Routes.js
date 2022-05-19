import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home/Home';

const RoutesExport = () => {
	return (
		<Routes>
			<Route exact path='/' component={Home} />
		</Routes>
	);
};

export default RoutesExport;
