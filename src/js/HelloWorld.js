import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class HelloWorld extends Component {
    constructor(props) {
		super(props);
		this.filter = this.filter.bind(this);
    }
    filter(e) {
		this.props.store.filter = e.target.value;
    }
    toggleComplete(todo) {
		todo.complete = !todo.complete;
	}
    	
    render(){
        const { filter, filteredTodos, todos } = this.props.store;
        const todoItems = filteredTodos.map(todo => (
			<li className="todo-list__item" key={todo.id}>
				<label htmlFor={todo.id}>
					<input
						id={todo.id}
						type="checkbox"
						value={todo.complete}
                        checked={todo.complete}
                        onChange={this.toggleComplete.bind(this, todo)}
					/>
					{todo.value}
				</label>
			</li>
        ));
        return (
            <div>
                <h1>Hello, React!</h1>
                <ul className="todo-list">{todoItems}</ul>
            </div>
        )
    }
    
};