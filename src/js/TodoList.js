import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.filter = this.filter.bind(this);
	}
	filter(e) {
		this.props.store.filter = e.target.value;
	}
	createNew(e) {
		e.preventDefault();
		const newItem = this.newItem.value;
		console.log(newItem);
		this.props.store.createTodo(newItem);

		this.addForm.reset();
	}
	toggleComplete(todo) {
		todo.complete = !todo.complete;
	}
	render() {
		const { clearComplete, filter, filteredTodos, todos } = this.props.store;
		const todoItems = filteredTodos.map(todo => (
			<li className="todo-list__item" key={todo.id}>
				<label htmlFor={todo.id}>
					<input
						id={todo.id}
						type="checkbox"
						onChange={this.toggleComplete.bind(this, todo)}
						value={todo.complete}
						checked={todo.complete}
					/>
					{todo.value}
				</label>
			</li>
		));
		return (
			<div>
				<h1>
					<i className="fa fa-shopping-basket" aria-hidden="true" />
					Shopping List
				</h1>
				<div>{filter}</div>
				<form
					className="add-item__form"
					ref={input => {
						this.addForm = input;
					}}
					onSubmit={e => {
						this.createNew(e);
					}}
				>
					<input className="add-item__input" ref={input => (this.newItem = input)} />
					<button type="submit" className="btn btn--primary">
						Add
					</button>
				</form>
				<input className="filter" value={filter} onChange={this.filter} />
				<ul className="todo-list">{todoItems}</ul>
				<a href="#" onClick={clearComplete}>
					Clear
				</a>
			</div>
		);
	}
}
