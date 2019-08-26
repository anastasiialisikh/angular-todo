import { DoneListComponent } from './done-list/done-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/todo', pathMatch: 'full'},
	{ path: 'todo', component: TodoListComponent },
	{ path: 'done', component: DoneListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
	@Input() test: any;


}
