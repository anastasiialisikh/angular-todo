import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
	@Input() todos: Todo[];

	@Output() setDone: EventEmitter<any> = new EventEmitter();
	@Output() delete: EventEmitter<any> = new EventEmitter();
	constructor(private todoService: TodoService) {}

	ngOnInit() {
		// this.todoService
		// 	.fetch()
		// 	.subscribe(todos => {
		// 		console.log('todos', todos);
		// 		this.todos = todos;
		// 	});
	}

	onSetDone(item: Todo) {
		this.setDone.emit(item);
	}

	onDelete(item: Todo) {
		this.delete.emit(item);
	}

	// setDone(item: Todo) {
	// 	this.todoService
	// 		.setTodoDone(item)
	// 		.subscribe((todos: Todo[]) => this.todos = todos);
	// }

	// delete(item: Todo) {
	// 	this.todoService
	// 		.deleteTodo(item)
	// 		.subscribe((todos: Todo[]) => this.todos = todos);
	// }

}
