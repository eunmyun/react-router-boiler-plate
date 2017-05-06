import React, { Component } from "react";
import classnames from "classnames";

import "./style.css";

export default class About extends Component {
	render() {
		return (
			<div>
				<h2>Sign Into Your Account</h2>
				<div className="row">
					<form className="col s12 authenticate" id="sign-in">
						<div className="row">
							<div className="input-field col s12">
								<input id="email" type="email" className="validate" />
								<label for="email">Email</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="password" type="password" className="validate" />
								<label for="password">Password</label>
							</div>
						</div>
						<button className="btn waves-effect waves-light" type="submit" name="action">Submit
						<i className="material-icons right">send</i>
						</button>
					</form>
				</div>
			</div>
		);
	}
}
