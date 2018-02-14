import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './Home';
import About from './About';

class Header extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
						<ul className="App-menu">
					        <li><NavLink to="/">Home</NavLink></li>
					        <li><NavLink to="/about">About</NavLink></li>
					    </ul>
					</header>
					<main className="App-content">
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
					</main>
				</div>
			</HashRouter>
		);
	}
}

export default Header;