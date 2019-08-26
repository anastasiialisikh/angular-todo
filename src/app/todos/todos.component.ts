import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	todos: Todo[];

	constructor(private todoService: TodoService) {}

	ngOnInit() {
		this.todoService
			.fetch()
			.subscribe(todos => {
				console.log('todos', todos);
				this.todos = todos;
			});
	}

	create(title: string) {
		console.log('here2');
		this.todoService
			.createTodo(title)
			.subscribe((todo: Todo) => {
				console.log('work');
				this.todos.push(todo);
			})
	}

	setDone(item: Todo) {
		console.log('here3');
		this.todoService
			.setTodoDone(item)
			.subscribe(() => {
					item.done = true;
					return this.todos;
			});
	}

	delete(item: Todo) {
		this.todoService
			.deleteTodo(item)
			.subscribe(() => 
				this.todos = this.todos.filter((h: Todo) => h !== item)
			);
	}

}
