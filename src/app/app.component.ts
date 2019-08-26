
import { LocalstorageService } from './localstorage.service';
import { Component } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';


import { Observable, of } from 'rxjs';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Todo App';
}
