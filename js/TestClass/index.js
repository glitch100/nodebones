import React from 'react';
import ReactDOM from 'react-dom';

export default class TestClass extends React.Component {
	
	constructor() : void {
		super();
		console.log('NodeBones!');
	}

	render() : ReactDOM {
		return (
			<div>
				<h1>Success!</h1>
			</div>
		)
	}
}