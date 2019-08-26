import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
	title: string =  '';

	@Output() create: EventEmitter<any> = new EventEmitter();

  constructor() { }

	add(): void {
		if(this.title.trim()) {
			console.log('here');
			this.create.emit(this.title);
			this.title = '';
		}
	}
}
