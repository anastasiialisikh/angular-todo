import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { LocalstorageService } from './localstorage.service';
import { Todo } from './todo';

@Injectable({
	providedIn: 'root'
})

export class TodoService {
	private apiUrl = 'api/todos';
	private todoKey = 'todo';

	constructor(
		private localstorageService: LocalstorageService,
		private http: HttpClient
	) {}

	fetch(): Observable<Todo[]> {
		return this.http.get(this.apiUrl)
										.pipe(
											map(() => this.getLSList()),
											catchError(this.handleError)
										);
	}

	createTodo(text: string): Observable<Todo> {
		const headers: HttpHeaders = new HttpHeaders({
			'Content-Type': 'aplication-json'
		});
		const options = {headers: headers};
		const todo = new Todo(text);

		return this.http.post(this.apiUrl, todo, options)
										.pipe(
												tap((res: Todo) => {
													const todoList = this.getLSList();
													todoList.push(res);
													this.setLSList(todoList);
												}),
												catchError(this.handleError)
										);
	}
	
	deleteTodo(todo: Todo) {
		const headers: HttpHeaders = new HttpHeaders({
			'Content-Type': 'aplication-json'
		});
		const options = {headers: headers};
		const url = `${this.apiUrl}/${todo.id}`;

		return this.http.delete(url, options)
										.pipe(
												tap(() => {
													let todoList = this.getLSList();
													todoList = todoList.filter((item: Todo) => item.id !== todo.id);

													this.setLSList(todoList);
												}),
												catchError(this.handleError)
										);
		//this.set(this.todos);
	}

	setTodoDone(todo: Todo) {
		const headers: HttpHeaders = new HttpHeaders({
			'Content-Type': 'aplication-json'
		});
		const options = {headers: headers};
		const url = `${this.apiUrl}/${todo.id}`;

		return this.http.put(url, todo, options)
										.pipe(
												tap(() => {
													todo.done = true;
													//return this.todos;
												}),
												catchError(this.handleError)
										);
		//this.set(this.todos);
	}

	private handleError(err: any): (err: any) => Observable<any> {
		console.error(err);
		return (err: any): Observable<any> => {
			return (err.message || err);
		}
	}

	private getLSList() {
		return this.localstorageService.get(this.todoKey) || [];
	}

	private setLSList(todoList: Todo[]): void {
		this.localstorageService.set(this.todoKey, todoList);
	}
}
