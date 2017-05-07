import React, { Component } from "react";
import classnames from "classnames";

import { IndexLink } from "react-router";
import NavLink from "../NavLink";

export default class Header extends Component {
	render() {
		return(
			<header className={classnames("Header", this.props.className)}>
				<h1>Header</h1>
				<p>TODO: UPDATE Header <code>./components/Layout/Header/index.js</code></p>
				<nav>
					<ul>
						<li><IndexLink to="/" activeClassName="active">Sign Up</IndexLink></li>
						<li><NavLink to="/about">Sign In</NavLink></li>
					</ul>
				</nav>
			</header>
		);
	}
}
