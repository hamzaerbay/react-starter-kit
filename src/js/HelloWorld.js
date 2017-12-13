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
            <div className="panel-block">
                <label>
                    <input type="checkbox"
                    id={todo.id}
                    type="checkbox"
                    value={todo.complete}
                    checked={todo.complete}
                    onChange={this.toggleComplete.bind(this, todo)} />
                    {todo.value}
                </label>
            </div>
        ));
        return (
        <div>
            <section className="hero is-medium is-dark is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Hello, React!
                        </h1>
                        <h2 className="subtitle">
                            Builded with MobX and Bulma.io
                        </h2>    
                    </div>
                </div>
          </section>
            <div className="container">
                <div class="column is-half is-offset-one-quarter">
                    <div className="panel">
                        {todoItems}
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
};