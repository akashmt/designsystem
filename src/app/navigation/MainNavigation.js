import React from 'react'
import { NavLink } from 'react-router-dom'

export const MainNavigation = () => {
	return (
		<ul>
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/buttons">Buttons</NavLink></li>
			<li><NavLink to="/formelements">Form Elements</NavLink></li>
			<li><NavLink to="/auth">Auth</NavLink></li>
      <li><NavLink to="/charts">Charts</NavLink></li>
		</ul>
	)
}
