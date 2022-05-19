import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<Nav class='nav-menu'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/workxp'>Work Experience</NavLink>
				<NavLink to='/academicxp'>Academic Experience</NavLink>
				<NavLink to='/contact'>Contact</NavLink>
				<NavLink to='/about'>About</NavLink>
			</Nav>
		);
	}
}

export default Nav;
