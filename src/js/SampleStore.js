import { autorun, computed, observable } from 'mobx';

class Todo {
	@observable value;
	@observable id;
	@observable complete;
	constructor(value) {
		this.value = value;
		this.id = Date.now();
		this.complete = false;
	}
}
class TodoStore {
	@observable
	todos = [{ id: 1, value: 'react', complete: true }, { id: 2, value: 'mobx', complete: false }];
	@observable filter = '';
	@computed
	get filteredTodos() {
		let matchesFilter = new RegExp(this.filter, '');
		return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value));
	}
	createTodo(value) {
		this.todos.push(new Todo(value));
	}
	clearComplete = () => {
		const incompleteTodos = this.todos.filter(todo => !todo.complete);
		this.todos.replace(incompleteTodos);
	};
}

export default new TodoStore();
