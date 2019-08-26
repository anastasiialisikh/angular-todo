import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
	@Input('todo') item: Todo;
	@Output() delete: EventEmitter<any> = new EventEmitter();
	@Output() setDone: EventEmitter<any> = new EventEmitter();
	
	constructor() { }

  ngOnInit() {
	}
	
	onSetDone() {
		console.log('here1');
		this.setDone.emit(this.item);
	}

	onDelete() {
		this.delete.emit(this.item);
	}
}
