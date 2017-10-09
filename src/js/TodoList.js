import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends Component {
	render() {
		return <h1>{this.props.store.todos[1]}</h1>;
	}
}
