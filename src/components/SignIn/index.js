import React, { Component } from "react";
import classnames from "classnames";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./style.css";

export default class SignIn extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<TextField 
						hintText="Email"
						floatingLabelText="Email"
					/><br />
					<TextField 
						hintText="Password"
						floatingLabelText="Password"
					/>
				</div>
			</MuiThemeProvider>
		);
	}
}
