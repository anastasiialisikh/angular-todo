export class Todo {
	id: number;

	constructor( 
		public title: string, 
		public done: boolean = false
	) {}
}