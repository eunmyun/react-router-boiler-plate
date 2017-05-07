import React, { Component } from "react";
import classnames from "classnames";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import "./style.css";
const style = {
  margin: 12,
};

const FormField = () => (
	<div>
		<TextField 
			hintText="Email"
			floatingLabelText="Email"
		/><br />
		<TextField 
			hintText="Password"
			floatingLabelText="Password"
			type="password"
		/><br />
		<TextField 
			hintText="Confirm Password"
			floatingLabelText="Confirm Password"
		/><br />
		<TextField 
			hintText="User Name"
			floatingLabelText="User Name"
		/><br />
		<TextField 
			hintText="First Name"
			floatingLabelText="First Name"
		/><br />
		<TextField 
			hintText="Last Name"
			floatingLabelText="Last Name"
		/>
	</div>
);

export default class SignUp extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Card>
					<CardHeader
						title="Join Today"
					/>
					<FormField />
					<CardActions>
						<RaisedButton label="Sign Up" primary={true} style={style} fullWidth={true} />
					</CardActions>
				</Card>
			</MuiThemeProvider>
		);
	}
}
