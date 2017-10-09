import { autorun, observable } from 'mobx';

class TodoStore {
	@observable todos = ['Learn React', 'Learn Mobx'];
	@observable filter = '';
}
var store = (window.store = new TodoStore());

export default store;
autorun(() => {
	console.log(`filter ${store.filter}`);
	console.log(store.todos[0]);
});
