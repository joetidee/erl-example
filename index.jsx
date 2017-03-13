import React from 'react';
import { FormattedMessage } from 'react-intl';


export default class My extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			email: 'joe@tidee.com'
		};
	}
	
	render(){
		return (
			<div>
				<FormattedMessage id="test_msg"/>
			</div>
		);
	}
}