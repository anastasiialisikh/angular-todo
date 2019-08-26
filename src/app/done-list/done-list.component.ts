import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {
	todos: Todo[];
  constructor(private todoService: TodoService) { }

	ngOnInit() {
		this.todoService
			.fetch()
			.subscribe((todos: Todo[]) => this.todos = todos);
	}

}
